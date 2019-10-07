import * as React from "react";
import { Subscribable, Subscription, Unsubscribable } from "rxjs";

/** @internal Marker for the initial state */
const INIT = Symbol("init");
/** @internal Marker for the complete state */
const COMPLETE = Symbol("complete");

/**
 * Properties of the `<Observer .../>` component
 */
export type ObserverProps<T> = {
  of: Subscribable<T>;
  next: (value: T) => React.ReactNode;
  init?: () => React.ReactNode;
  complete?: () => React.ReactNode;
};

/** @internal */
type ObserverState<T> = {
  data: T | typeof INIT | typeof COMPLETE;
};

/** @internal nothing to render */
const NONE = () => null;

/**
 * Observer builds itself based on the latest value emitted by an Observable.
 *
 * Example:
 *
 * ```jsx
 *    <Observer
 *      of={state.$places}
 *      next={places => (
 *        places.map(place =>
 *          <li>
 *            <a href={place.href}>{place.name}</a>
 *          </li>
 *        )
 *      )}
 *    />
 * ```
 *
 * You might also want to build something before the {@link rxjs#Observable | Observable} has a value and after it completes:
 *
 * ```jsx
 *    <Observer
 *      of={stagedFile.$uploadProgress)}
 *      init={() => <LoadingSpinner/>}
 *      next={percentComplete => <ProgressBar progress={percentComplete * 0.01}/>}
 *      complete={() => <Okay/>}
 *    />
 * ```
 */
export class Observer<T> extends React.Component<
  ObserverProps<T>,
  ObserverState<T>
> {
  private subscription: Unsubscribable;

  static defaultProps = {
    init: NONE,
    complete: NONE
  };

  constructor(props: ObserverProps<T>) {
    super(props);
    this.state = {
      data: INIT
    };
    this.subscription = Subscription.EMPTY;
  }

  componentDidMount() {
    this.subscription = this.props.of.subscribe({
      next: data =>
        this.setState({
          data
        })
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    // Dispatch directly to the user-supplied render function.
    switch (this.state.data) {
      case INIT:
        return this.props.init!();
      case COMPLETE:
        return this.props.complete!();
      default:
        return this.props.next(this.state.data);
    }
  }
}
