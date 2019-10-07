import { Observable, Subject } from "rxjs";

/**
 * Make all Behavior / Subject properties in T asObservable().
 * The resulting ProtectedState will not allow anyone to call .next() on any Behaviors.
 */
export type ProtectedState<T> = {
  [P in keyof T]: T[P] extends Subject<infer R> ? Observable<R> : T[P];
};

/** Strict State type which enforces that each property is either a void function, or an Observable */
export type SealState = {
  [propertyOrAction: string]: ((...args: any[]) => void) | Observable<any>;
};

/**
 * Protects a State from exposing mutable Behaviors or Subjects, and exposes those as Observables.
 *
 * Ensure that the users of this State are not able to call .next() on the behaviors passed in.
 * Additionally, types for protectState ensure that the shape of the State follows State best practices.
 *
 * @param state set of Behavior / Observable values and action functions controlling the state
 */
export function seal<T extends SealState>(state: T): ProtectedState<T> {
  const protect = { ...state };
  for (const key in state) {
    const value = state[key];
    if (value instanceof Subject) {
      // @ts-ignore
      protect[key] = value.asObservable();
    }
  }
  // @ts-ignore
  return protect;
}
