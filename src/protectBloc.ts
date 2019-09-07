import { Observable, Subject } from "rxjs";

/**
 * Make all Behavior / Subject properties in T asObservable().
 * The resulting ProtectedBloc will not allow anyone to call .next() on any Behaviors.
 */
export type ProtectedBloc<T> = {
  [P in keyof T]: T[P] extends Subject<infer R> ? Observable<R> : T[P];
};

/** Strict BLoC type which enforces that each property is either a void function, or an Observable */
export type BlocInput = {
  [propertyOrAction: string]: ((...args: any[]) => void) | Observable<any>;
};

/**
 * Protects a BLoC from exposing mutable Behaviors or Subjects, and exposes those as Observables.
 * 
 * Ensure that the users of this BLoC are not able to call .next() on the behaviors passed in.
 * Additionally, types for protectBloc ensure that the shape of the bloc follows BLoC best practices.
 *
 * @param bloc set of Behavior / Observable values and action functions controlling the state
 */
export function protectBloc<T extends BlocInput>(bloc: T): ProtectedBloc<T> {
  const protect = { ...bloc };
  for (const key in bloc) {
    const value = bloc[key];
    if (value instanceof Subject) {
      // @ts-ignore
      protect[key] = value.asObservable();
    }
  }
  // @ts-ignore
  return protect;
}
