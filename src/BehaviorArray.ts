import { Behavior } from "./Behavior";

/**
 * An extension of BehaviorSubject that requires an initial value and emits its current
 * value whenever it is subscribed to.
 *
 * @class BehaviorArray<E>
 */
export class BehaviorArray<E> extends Behavior<E[]> {
  /**
   * Add item to end of array and emit as next value (push)
   * @notes `this` is bounded
   */
  nextAppendItem = (item: E) => {
    this.next([...this.value, item]);
  };

  /**
   * Add to start of array and emit as next value (unshift)
   * @notes `this` is bounded
   */
  nextPrependItem = (item: E) => {
    this.next([item, ...this.value]);
  };

  /**
   * Emits next value with items matching the given predicate removed.
   * @param shouldRemove return true for values that need to be removed
   */
  nextRemoveItemsWhere(shouldRemove: (item: E) => boolean): void {
    this.next(this.value.filter(item => !shouldRemove(item)));
  }

  /**
   * Emits next value with items matching the given predicate retained.
   * @param shouldKeep return true for values that you want to keep in the next emitted array
   */
  nextRetainItemsWhere(shouldKeep: (item: E) => boolean): void {
    this.next(this.value.filter(shouldKeep));
  }

  /**
   * @param shouldUpdate return true for values that you want to update using @param update in the next emitted array
   */
  nextUpdateItemsWhere(
    shouldUpdate: (item: E) => boolean,
    update: (item: E) => E
  ): void {
    this.next(
      this.value.map(item => {
        if (shouldUpdate(item)) {
          return update(item);
        } else {
          return item;
        }
      })
    );
  }

  /**
   * @param update each item
   */
  nextUpdateItems(update: (item: E) => E): void {
    this.next(this.value.map(update));
  }
}
