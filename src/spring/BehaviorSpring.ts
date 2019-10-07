import now from "performance-now";
import raf from "raf";
import { Behavior } from "../Behavior";
import shouldStopAnimation from "./shouldStopAnimation";
import stepper from "./stepper";

const NOOP = () => {};
const MS_PER_FRAME = 1000 / 60;

/**
 * An extension of BehaviorSubject that requires an initial value and emits its current
 * value whenever it is subscribed to.
 *
 * @class BehaviorSpring
 */
export class BehaviorSpring extends Behavior<number> {
  private _stiffness: number = 170;
  private _damping: number = 26;
  private _precision: number = 0.01;
  private _destination: number;
  private _velocity: number = 0;
  private _lastIdealValue: number = 0;
  private _lastIdealVelocity: number = 0;
  private _animationID: number | null = null;
  /** todo: I'm not sure if we need this, but maybe later for cancelling... */
  private _unmounting = false;
  private _prevTime = 0;
  private _accTime = 0;
  private _wasAnimating: boolean = false;

  /** current resolver */
  private resolver: (completed: boolean) => any = NOOP;

  constructor(
    initialValue: number,
    c?: {
      /**
       * optional, defaults to value of `initialValue`
       */
      destination?: number;
      /**
       * optional, defaults to `170`
       */
      stiffness?: number;
      /**
       * damping: optional, defaults to `26`
       */
      damping?: number;
      /**
       * optional, defaults to `0.01` specifies both the rounding of the
       * interpolated value and the speed (internal).
       */
      precision?: number;
      /**
       * optional, defaults to `0`
       */
      initialVelocity?: number;
    }
  ) {
    super(initialValue);
    this._destination = this._lastIdealValue = initialValue;
    if (c != null) {
      if (c.damping != null) this._damping = c.damping;
      if (c.precision != null) this._precision = c.precision;
      if (c.stiffness != null) this._stiffness = c.stiffness;
      if (c.initialVelocity != null)
        this._velocity = this._lastIdealVelocity = c.initialVelocity;
      if (c.destination != null) this._setDestination(c.destination);
    }
  }

  setDestination = (newDestination: number): Promise<boolean> => {
    // cancelled previous destination
    this._resolve(false);

    return new Promise(res => {
      this.resolver = res;
      this._setDestination(newDestination);
    });
  };

  setDestinationAndForget = (newDestination: number): void => {
    // cancelled previous destination
    this._resolve(false);
    this._setDestination(newDestination);
  };

  private _setDestination(newDestination: number): void {
    this._destination = newDestination;
    if (
      // notice the importance of the stepper communicating properly
      this._velocity === 0 &&
      this._destination === this.value
    ) {
      // immediately resolve as we are settled
      this._resolve(true);
    } else {
      this._startAnimationIfNecessary();
    }
  }

  // Managing the animation

  private _startAnimationIfNecessary(): void {
    if (this._unmounting || this._animationID != null) {
      return;
    }

    this._animationID = raf(timestamp => {
      if (this._unmounting) return;

      if (shouldStopAnimation(this.value, this._destination, this._velocity)) {
        this._animationID = null;
        this._resolve(true);
        this._wasAnimating = false;
        this._accTime = 0;
        return;
      }

      this._wasAnimating = true;

      const currentTime = timestamp || now();
      const timeDelta = currentTime - this._prevTime;
      this._prevTime = currentTime;
      this._accTime = this._accTime + timeDelta;
      // more than 10 frames? prolly switched browser tab. Restart
      if (this._accTime > MS_PER_FRAME * 10) {
        this._accTime = 0;
      }

      if (this._accTime === 0) {
        // no need to cancel animationID here; shouldn't have any in flight
        this._animationID = null;
        this._startAnimationIfNecessary();
        return;
      }

      let currentFrameCompletion =
        (this._accTime -
          Math.floor(this._accTime / MS_PER_FRAME) * MS_PER_FRAME) /
        MS_PER_FRAME;
      const framesToCatchUp = Math.floor(this._accTime / MS_PER_FRAME);

      let newLastIdealValue: number = 0;
      let newLastIdealVelocity: number = 0;
      let newCurrentValue: number = 0;
      let newCurrentVelocity: number = 0;

      // for (let key in propsStyle) {
      //   if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
      //     continue;
      //   }

      const destValue = this._destination;
      // if (typeof styleValue === "number") {
      //   newCurrentStyle = styleValue;
      //   newCurrentVelocity = 0;
      //   newLastIdealStyle = styleValue;
      //   newLastIdealVelocity = 0;
      // } else {
      let stiffness = this._stiffness,
        damping = this._damping,
        precision = this._precision;

      let newLastIdealStyleValue = this._lastIdealValue;
      let newLastIdealVelocityValue = this._lastIdealVelocity;
      for (let i = 0; i < framesToCatchUp; i++) {
        [newLastIdealStyleValue, newLastIdealVelocityValue] = stepper(
          MS_PER_FRAME / 1000,
          newLastIdealStyleValue,
          newLastIdealVelocityValue,
          destValue,
          stiffness,
          damping,
          precision
        );
      }
      const [nextIdealX, nextIdealV] = stepper(
        MS_PER_FRAME / 1000,
        newLastIdealStyleValue,
        newLastIdealVelocityValue,
        destValue,
        stiffness,
        damping,
        precision
      );

      newCurrentValue =
        newLastIdealStyleValue +
        (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
      newCurrentVelocity =
        newLastIdealVelocityValue +
        (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
      newLastIdealValue = newLastIdealStyleValue;
      newLastIdealVelocity = newLastIdealVelocityValue;
      // }
      // }

      this._animationID = null;
      // the amount we're looped over above
      this._accTime -= framesToCatchUp * MS_PER_FRAME;

      this._velocity = newCurrentVelocity;
      this._lastIdealValue = newLastIdealValue;
      this._lastIdealVelocity = newLastIdealVelocity;
      this.next(newCurrentValue);

      this._startAnimationIfNecessary();
    });
  }

  /** @internal mark current animation as resolved and notify listeners */
  private _resolve(completed: boolean): void {
    this.resolver(completed);
    this.resolver = NOOP;

    if (completed && this._animationID != null) {
      raf.cancel(this._animationID);
      this._animationID = null;
    }
  }

  // Helpers

  /** @internal compare equality based on precision */
  private _eq(a: number, b: number): boolean {
    return (a > b ? a - b : b - a) <= this._precision;
  }

  private _eq2(a: number, b: number): boolean {
    return (a > b ? a - b : b - a) <= this._precision * 5;
  }
}

function testSpring() {
  const spring = new BehaviorSpring(10);
}
