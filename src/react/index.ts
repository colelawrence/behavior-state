import React from "react";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Behavior } from "../Behavior";
import { ObservableList, INIT_ITEM, REMOVED_ITEM } from "../BehaviorList";
import { Observer } from "./Observer";

export * from "./Observer";

export type ObserverProps<T> = {
  init?: () => React.ReactNode;
  complete?: () => React.ReactNode;
} & (T extends string | number | React.ReactNode
  ? {
      /** next is optional if we can easily render your component as a simple string / number */
      next?: (value: T) => React.ReactNode;
    }
  : {
      next: (value: T) => React.ReactNode;
    });

declare module "rxjs" {
  class Observable<T> {
    react: React.FC<ObserverProps<T>>;
  }
}

Object.defineProperty(Observable.prototype, "react", {
  get() {
    // the scope this binding here is critical
    return props => React.createElement(Observer, { of: this, ...props });
  }
});

export type ObserverListProps<E> = {
  // TODO: What does init even do in this context?
  init?: () => React.ReactNode;
  nextItem: (item: E) => React.ReactNode;
};

declare module "../BehaviorList" {
  interface IObservableList<E> {
    react: React.FC<ObserverListProps<E>>;
  }
}

Object.defineProperty(ObservableList.prototype, "react", {
  get<E>(this: ObservableList<E>) {
    const ofOrder = this["_order"].asObservable();
    // the scope this binding here is critical
    return (props: ObserverListProps<E>) =>
      React.createElement(Observer, {
        ...props,
        of: ofOrder,
        next: renderObservableList.bind(null, props)
      });
  }
});

const id = <A>(a: A) => a;
const none = () => null;
function renderObservableList<E>(
  props: ObserverListProps<E>,
  behs: Behavior<E>[]
) {
  const nextItem = e =>
    e !== INIT_ITEM && e !== REMOVED_ITEM ? props.nextItem(e) : null;
  return React.createElement(React.Fragment, {
    children: behs.map(obs =>
      React.createElement(Observer, {
        key: Math.random(),
        // nextItem transforms E to a React.ReactNode
        of: obs.pipe(map(nextItem)),
        // if an observable is completed, then it is an indication that the item has been removed
        complete: none,
        next: id
      })
    )
  });
}
