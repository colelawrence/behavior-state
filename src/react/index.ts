import React from "react";
import { Observable } from "rxjs";
import { Observer } from "./Observer";
import { BehaviorList, ObservableList } from "../BehaviorList";
import { map } from "rxjs/operators";

export * from "./Observer";

type ObserverProps<T> = {
  init?: () => React.ReactNode;
  complete?: () => React.ReactNode;
} & (T extends string | number
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

/** default next if props.next is not defined */
function next(value: string | number) {
  return value;
}

Object.defineProperty(Observable.prototype, "react", {
  get() {
    // the scope this binding here is critical
    return props => React.createElement(Observer, { of: this, next, ...props });
  }
});

type ObserverListProps<E> = {
  init?: () => React.ReactNode;
  complete?: () => React.ReactNode;
  nextItem: (item: E) => React.ReactNode;
};

declare module "../BehaviorList" {
  interface IObservableList<E> {
    react: React.FC<ObserverListProps<E>>;
  }
}

Object.defineProperty(ObservableList.prototype, "react", {
  get<E>(this: ObservableList<E>) {
    // the scope this binding here is critical
    return (props: ObserverListProps<E>) =>
      React.createElement(Observer, {
        ...props,
        of: this.mapItems(obs => obs.pipe(map(props.nextItem))),
        next(children: React.ReactNode[]) {
          return React.createElement(React.Fragment, { children });
        }
      });
  }
});
