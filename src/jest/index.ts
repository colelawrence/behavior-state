import { Observable } from "rxjs";
import { SealState, ProtectedState } from "../seal";

interface SpyOnObservable<T> extends Observable<T> {
  readonly latestValue: T;
  readonly nextValue: Promise<T>;
}

const INIT = Symbol("init");

type SpyOnState<T> = {
  [P in keyof T]: T[P] extends Observable<infer R> ? SpyOnObservable<R> : T[P];
};

/** Helper for unnesting the State type out of the ProtectedState<T> wrapper */
type Unwrap<T> = T extends ProtectedState<infer R> ? R : T;

/**
 * Test State observable values by extending each observable with
 * `.nextValue: Promise<T>` and `.latestValue: T` for easier testing with `jest`
 * 
 * Example:
 * ```js
 * const todos = spyOnState(createTodosState());
 * 
 * expect(todos.$todoInput.latestValue).toBe("")
 * // this is a promise, so we must resolve
 * expect(todos.$todoInput.nextValue).resolve.toBe("new value")
 * 
 * // this will update $todoInput, and the expect will test it
 * todos.updateInput("new value")
 * ```
 */
export function spyOnState<T>(state: T): SpyOnState<Unwrap<T>> {
  const spyOn = { ...state };
  for (const key in state) {
    const value = state[key];
    if (value instanceof Observable) {
      // @ts-ignore
      spyOn[key] = spyOnObservable(value);
    }
  }
  // @ts-ignore
  return spyOn;
}

export function spyOnObservable<T>(obs: Observable<T>): SpyOnObservable<T> {
  let latestValue: T | typeof INIT = INIT;
  let nextResolver!: (value: T) => void;
  let nextPromise: Promise<T> = new Promise(
    resolve => (nextResolver = resolve)
  );

  obs.subscribe({
    next: value => {
      nextResolver(value);
      latestValue = value;
      nextPromise = new Promise(resolve => (nextResolver = resolve));
    }
  });

  Object.defineProperties(obs, {
    latestValue: {
      get() {
        jest.runOnlyPendingTimers();
        if (latestValue === INIT) {
          throw new Error("no latest value");
        } else {
          return latestValue;
        }
      }
    },
    nextValue: {
      get() {
        return nextPromise;
      }
    }
  });

  // @ts-ignore
  return obs;
}
