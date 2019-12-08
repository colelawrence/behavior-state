import {
  BehaviorSubject,
  combineLatest,
  MonoTypeOperatorFunction,
  Observable
} from "rxjs";
import { filter, flatMap } from "rxjs/operators";
import { Behavior } from "./Behavior";

// used by extenders of ObservableList
export interface IObservableList<E> {}

const empty = new BehaviorSubject<[]>([]).asObservable();

export class ObservableList<E> implements IObservableList<E> {
  // TODO: figure out how to move this declaration out of this file
  react: IObservableList<E>["react"];

  /**
   * @internal `ObservableList` should only be created from an extending `BehaviorList`
   */
  protected constructor(
    /**
     * @internal `_order` is a very simple structure of an observable list of observables.
     * The first dimension of `_order` is the list which defines the length and order of the values.
     * The second dimension is a behavior for each element which enables us to emit an update for
     * one item without emitting for the whole list.
     */
    protected _order: Behavior<Behavior<E | ItemPlaceholders>[]>
  ) {
    if (!(_order instanceof Behavior)) {
      throw new TypeError(
        `ObservableList constructed with incorrect type: ${_order}`
      );
    }
  }

  // I get the sense that this can be optimized
  mapItems = <T>(
    mapFn: (itemObservable: Observable<E>) => Observable<T>
  ): Observable<T[]> => {
    return this._order.pipe(
      flatMap(behs => {
        if (behs.length === 0) return empty;
        else
          return combineLatest(
            behs.map(beh => mapFn(beh.pipe(FILTER_PIPE_NOT_EMPTY)))
          );
      })
    );
  };

  asObservable(): Observable<E[]> {
    return this._order.pipe(
      flatMap(behs => {
        if (behs.length === 0) return empty;
        else return combineLatest(behs).pipe(FILTER_PIPE_NOT_EMPTY);
      })
    );
  }
}

export const INIT_ITEM = Symbol("unallocated");
export const REMOVED_ITEM = Symbol("removed");

type ItemPlaceholders = typeof INIT_ITEM | typeof REMOVED_ITEM;

const FILTER_PIPE_NOT_EMPTY: MonoTypeOperatorFunction<any> = filter(
  <A>(e: A | ItemPlaceholders) => e !== INIT_ITEM && e !== REMOVED_ITEM
);

/** @internal allocation strategy */
function allocationExpandBy(
  len: number,
  capacity: number,
  reserve: number
): number | null {
  const currentFree = capacity - len;
  if (currentFree > reserve) {
    return null;
  } else if (reserve > 256) {
    return reserve + 128;
  } else {
    // increment capacity by powers of 2
    let newCapacity = capacity * 2;
    while (newCapacity < reserve + len) {
      newCapacity *= 2;
    }
    return newCapacity - capacity;
  }
}

/**
 * Almost indistinguishable from `BehaviorArray`, `BehaviorList`
 * is not an extension of `Behavior`, and does not allow you to directly
 * call `.next(value)`. This enables us to provide precise update paths
 * which can be listened to through `.mapItems(fn)`
 *
 * @class BehaviorList<E>
 */
export class BehaviorList<E> extends ObservableList<E> {
  private capacity: number;
  private removed: number = 0;
  private shrinkTimer: any = null;
  /** includes dead + alive */
  private len: number = 0;

  /** @internal may or may not expand the capacity */
  private _reserve(additionalCapacity: number) {
    const expandBy = allocationExpandBy(
      this.len,
      this.capacity,
      additionalCapacity
    );
    if (expandBy != null) {
      // create items to add
      const add = new Array(expandBy);
      for (let i = 0; i < add.length; i++) {
        add[i] = new Behavior(INIT_ITEM);
      }

      // TODO: We might be able to replace BehaviorArray with our own custom subject logic
      this._order.next([...this._order.value, ...add]);
    }
  }

  /** @internal tally removals for shrinking */
  private _shrink(removedItems: number): void {
    this.removed += removedItems;
    if (this.shrinkTimer) clearTimeout(this.shrinkTimer);
    if (this.removed > 1028) {
      // immediately to avoid out of memory errors
      this._shrinkCapacity();
    } else if (this.removed > 256) {
      this.shrinkTimer = setTimeout(this._shrinkCapacity, 500);
    } else if (this.removed > 64) {
      this.shrinkTimer = setTimeout(this._shrinkCapacity, 5000);
    }
  }

  /** @internal perform capacity shrinking */
  private _shrinkCapacity = (): void => {
    console.debug(`Shrinking capacity by ${this.removed}`);
    // clear debouncer
    clearTimeout(this.shrinkTimer);
    this.shrinkTimer = null;

    const capacityFree = this.capacity - this.len;
    const kept = this._order.value.filter(beh => beh.value !== REMOVED_ITEM);
    this._order.next(kept);
    this.len = kept.length - capacityFree;
    this.removed = 0;
  };

  private _nextAppendItems(items: E[]) {
    this._reserve(items.length);
    const len = this.len;
    const itemsLength = items.length;
    for (let i = 0; i < itemsLength; i++) {
      this._order.value[i + len] = new Behavior<E>(items[i]);
    }
    this.len += itemsLength;
  }

  constructor(init?: E[]) {
    super(
      new Behavior<Behavior<E | typeof INIT_ITEM>[]>([new Behavior(INIT_ITEM)])
    );
    this.capacity = 1;
    this._order.subscribe({
      next: items => {
        this.capacity = items.length;
      }
    });
    if (init && init.length > 0) {
      this._nextAppendItems(init);
    }
  }

  asObservableList(): ObservableList<E> {
    //@ts-ignore
    return new ObservableList(this._order);
  }

  /**
   * Add item to end of array and emit as next value (push)
   * @notes `this` is bounded
   */
  nextAppendItem = (item: E) => {
    if (this.len === this.capacity) {
      this._reserve(1);
    }
    this._nextAppendItem(item);
  };

  /** @internal Warning! This method assumes there will be enough room! */
  private _nextAppendItem(item: E) {
    this._order.value[this.len].next(item);
    this.len += 1;
  }

  /**
   * Add to start of array and emit as next value (unshift)
   * @notes `this` is bounded
   */
  nextPrependItem = (item: E) => {
    console.error(new Error("nextPrependItem not implemented"));
    // TODO: implement prepend item
    // this._order.nextPrependItem(new Behavior(item));
  };

  /**
   * Emits next value with items matching the given predicate removed.
   * @param shouldRemove return true for values that need to be removed
   */
  nextRemoveItemsWhere(shouldRemove: (item: E) => boolean) {
    let removed = 0;
    for (const beh of this._order.value) {
      if (beh.value === INIT_ITEM) break;
      if (beh.value !== REMOVED_ITEM && shouldRemove(beh.value)) {
        beh.next(REMOVED_ITEM);
        beh.complete();
        removed += 1;
      }
    }
    if (removed > 0) {
      this._shrink(removed);
    }
  }

  /**
   * Emits next value with items matching the given predicate retained.
   * @param shouldKeep return true for values that you want to keep in the next emitted array
   */
  nextRetainItemsWhere(shouldKeep: (item: E) => boolean): void {
    let removed = 0;
    for (const beh of this._order.value) {
      if (beh.value === INIT_ITEM) break;
      if (beh.value !== REMOVED_ITEM && !shouldKeep(beh.value)) {
        beh.next(REMOVED_ITEM);
        beh.complete();
        removed += 1;
      }
    }
    if (removed > 0) {
      this._shrink(removed);
    }
  }

  /**
   * @param shouldUpdate return true for values that you want to update using @param update in the next emitted array
   */
  nextUpdateItemsWhere(
    shouldUpdate: (item: E) => boolean,
    update: (item: E) => E
  ): void {
    for (const beh of this._order.value) {
      if (beh.value === INIT_ITEM) break;
      if (beh.value !== REMOVED_ITEM && shouldUpdate(beh.value)) {
        beh.next(update(beh.value));
      }
    }
  }

  /**
   * @param update each item
   */
  nextUpdateItems(update: (item: E) => E): void {
    for (const beh of this._order.value) {
      if (beh.value === INIT_ITEM) break;
      if (beh.value !== REMOVED_ITEM) {
        beh.next(update(beh.value));
      }
    }
  }
}
