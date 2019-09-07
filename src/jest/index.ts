import { Observable } from "rxjs";
import { BlocInput, ProtectedBloc } from "../protectBloc";

interface SpyOnObservable<T> extends Observable<T> {
  readonly latestValue: T;
  readonly nextValue: Promise<T>;
}

const INIT = Symbol("init");

type SpyOnBloc<T> = {
  [P in keyof T]: T[P] extends Observable<infer R> ? SpyOnObservable<R> : T[P];
};

/** Helper for unnesting the Bloc type out of the ProtectedBloc<T> wrapper */
type Unwrap<T> = T extends ProtectedBloc<infer R> ? R : T;

/**
 * Test Bloc observable values by extending each observable with
 * `.nextValue: Promise<T>` and `.latestValue: T` for easier testing with `jest`
 * 
 * Example:
 * ```js
 * const todos = spyOnBloc(createTodosBloc());
 * 
 * expect(todos.$todoInput.latestValue).toBe("")
 * // this is a promise, so we must resolve
 * expect(todos.$todoInput.nextValue).resolve.toBe("new value")
 * 
 * // this will update $todoInput, and the expect will test it
 * todos.updateInput("new value")
 * ```
 */
export function spyOnBloc<T extends BlocInput>(bloc: T): SpyOnBloc<Unwrap<T>> {
  const spyOn = { ...bloc };
  for (const key in bloc) {
    const value = bloc[key];
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
