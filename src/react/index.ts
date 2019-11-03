import React from "react";
import { Observable } from "rxjs";
import { Observer } from "./Observer";
import { BehaviorList, ObservableList } from "../BehaviorList";
import { map } from "rxjs/operators";
import { Behavior } from "../Behavior";

export * from "./Observer";

type ObserverProps<T> = {
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

type ObserverListProps<E> = {
  init?: () => React.ReactNode;
  complete?: () => React.ReactNode;
  nextItem: (item: E) => React.ReactNode;
  nextKey: (item: E) => React.Key;
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
        // of: this.mapItems(obs => obs.pipe(map(props.nextItem))),
        // next(children: React.ReactNode[]) {
        //   console.log('next', { children })
        //   return React.createElement(React.Fragment, { children });
        // }
        of: ofOrder,
        next: renderObservableList.bind(null, props)
      });
  }
});

const id = <A> (a: A) => a
function renderObservableList<E>(props: ObserverListProps<E>, behs: Behavior<E>[]) {
  return React.createElement(React.Fragment, {
    children: behs.map(obs =>
      React.createElement(Observer, {
        key: props.nextKey(obs.value),
        of: obs.pipe(map(props.nextItem)),
        next: id
      })
    )
  })
}

