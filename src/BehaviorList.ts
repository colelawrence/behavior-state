import { combineLatest, Observable } from "rxjs";
import { flatMap } from "rxjs/operators";
import { Behavior } from "./Behavior";
import { BehaviorArray } from "./BehaviorArray";

class ItemRef {}
function createRef() {
  return new ItemRef();
}

// used by extenders of ObservableList
export interface IObservableList<E> {}

export class ObservableList<E> implements IObservableList<E> {
  react: import("react").FunctionComponent<{
    init?: () => import("react").ReactNode;
    complete?: () => import("react").ReactNode;
    nextItem: (item: E) => import("react").ReactNode;
  }>;

  // 🤓 KISS
  protected _order: BehaviorArray<Behavior<E>>;

  constructor(init?: E[]) {
    this._order = new BehaviorArray<Behavior<E>>(
      (init || []).map(e => new Behavior<E>(e))
    );
  }

  /** I get the sense that this can be heavily optimized */
  mapItems = <T>(
    mapFn: (itemObservable: Observable<E>) => Observable<T>
  ): Observable<T[]> => {
    return this._order.pipe(
      flatMap(behs => combineLatest(behs.map(beh => mapFn(beh.asObservable()))))
    );
  };
}

/**
 * Almost indistinguishable from BehaviorArray, BehaviorList
 * does not extend Behavior, and does not allow you to directly
 * call .next(value), because it is designed for performant
 * transforms using .mapItems(fn)
 *
 * @class BehaviorList<E>
 */
export class BehaviorList<E> extends ObservableList<E> {
  // private _order1: ItemRef[] = [];
  // private _map1 = new WeakMap<ItemRef, Behavior<E>>();

  asObservableList = (): ObservableList<E> =>
    //@ts-ignore
    Object.assign(new ObservableList(), { _order: this._order });

  asObservable = (): Observable<E[]> =>
    this._order.pipe(flatMap(behs => combineLatest(behs)));

  /** add to end of array and emit as next value */
  nextPushItem = (item: E) => {
    this._order.nextPushItem(new Behavior(item));
  };

  /** add to start of array and emit as next value */
  nextUnshiftItem = (item: E) => {
    this._order.nextUnshiftItem(new Behavior(item));
  };

  /**
   * Emits next value with items matching the given predicate removed.
   * @param shouldRemove return true for values that need to be removed
   */
  nextRemoveItemsWhere(shouldRemove: (item: E) => boolean) {
    this._order.nextRemoveItemsWhere(beh => shouldRemove(beh.value));
  }

  /**
   * @param shouldUpdate return true for values that you want to update using @param update in the next emitted array
   */
  nextUpdateItemsWhere = (
    shouldUpdate: (item: E) => boolean,
    update: (item: E) => E
  ) => {
    for (const beh of this._order.value) {
      if (shouldUpdate(beh.value)) {
        beh.next(update(beh.value));
      }
    }
  };

  /**
   * @param update each item
   */
  nextUpdateItems = (update: (item: E) => E) => {
    for (const beh of this._order.value) {
      beh.next(update(beh.value));
    }
  };

  /**
   * Emits next value with items matching the given predicate retained.
   * @param shouldKeep return true for values that you want to keep in the next emitted array
   */
  nextRetainItemsWhere = (shouldKeep: (item: E) => boolean) => {
    this._order.nextRetainItemsWhere(beh => shouldKeep(beh.value));
  };
}
