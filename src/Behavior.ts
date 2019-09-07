import { BehaviorSubject } from "rxjs";

/**
 * An extension of BehaviorSubject that requires an initial value and emits its current
 * value whenever it is subscribed to.
 *
 * @class Behavior<T>
 */
export class Behavior<T> extends BehaviorSubject<T> {}
