**[behavior-state](README.md)**

[Globals](globals.md)

# behavior-state

## Index

### Classes

* [Behavior](classes/behavior.md)
* [BehaviorArray](classes/behaviorarray.md)
* [BehaviorList](classes/behaviorlist.md)
* [BehaviorSpring](classes/behaviorspring.md)
* [ObservableList](classes/observablelist.md)
* [Observer](classes/observer.md)

### Interfaces

* [IObservableList](interfaces/iobservablelist.md)

### Type aliases

* [ObserverListProps](globals.md#observerlistprops)
* [ObserverProps](globals.md#observerprops)
* [ProtectedState](globals.md#protectedstate)
* [SealState](globals.md#sealstate)
* [TLength](globals.md#tlength)

### Variables

* [INIT_ITEM](globals.md#const-init_item)
* [REMOVED_ITEM](globals.md#const-removed_item)

### Functions

* [seal](globals.md#seal)
* [shouldStopAnimation](globals.md#shouldstopanimation)
* [spyOnObservable](globals.md#spyonobservable)
* [spyOnState](globals.md#spyonstate)
* [stepper](globals.md#stepper)

## Type aliases

###  ObserverListProps

Ƭ **ObserverListProps**: *object*

*Defined in [react/index.ts:49](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/react/index.ts#L49)*

#### Type declaration:

___

###  ObserverProps

Ƭ **ObserverProps**: *object & T extends ReactNode ? { next?: (value: T) => ReactNode; } : { next: (value: T) => ReactNode; }*

*Defined in [preact/Observer.ts:12](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/preact/Observer.ts#L12)*

*Defined in [react/Observer.ts:12](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/react/Observer.ts#L12)*

*Defined in [react/index.ts:14](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/react/index.ts#L14)*

Properties of the `<Observer .../>` component
Properties of the `<Observer .../>` component

___

###  ProtectedState

Ƭ **ProtectedState**: *object*

*Defined in [seal.ts:7](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/seal.ts#L7)*

Make all Behavior / Subject properties in T asObservable().
The resulting ProtectedState will not allow anyone to call .next() on any Behaviors.

#### Type declaration:

___

###  SealState

Ƭ **SealState**: *object*

*Defined in [seal.ts:12](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/seal.ts#L12)*

Strict State type which enforces that each property is either a void function, or an Observable

#### Type declaration:

* \[ **propertyOrAction**: *string*\]: function | Observable‹any›

___

###  TLength

Ƭ **TLength**: *number | string*

*Defined in [spring/CSS.ts:3](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/spring/CSS.ts#L3)*

## Variables

### `Const` INIT_ITEM

• **INIT_ITEM**: *unique symbol* =  Symbol("unallocated")

*Defined in [BehaviorList.ts:54](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/BehaviorList.ts#L54)*

___

### `Const` REMOVED_ITEM

• **REMOVED_ITEM**: *unique symbol* =  Symbol("removed")

*Defined in [BehaviorList.ts:55](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/BehaviorList.ts#L55)*

## Functions

###  seal

▸ **seal**<**T**>(`state`: T): *[ProtectedState](globals.md#protectedstate)‹T›*

*Defined in [seal.ts:24](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/seal.ts#L24)*

Protects a State from exposing mutable Behaviors or Subjects, and exposes those as Observables.

Ensure that the users of this State are not able to call .next() on the behaviors passed in.
Additionally, types for protectState ensure that the shape of the State follows State best practices.

**Type parameters:**

▪ **T**: *[SealState](globals.md#sealstate)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`state` | T | set of Behavior / Observable values and action functions controlling the state  |

**Returns:** *[ProtectedState](globals.md#protectedstate)‹T›*

___

###  shouldStopAnimation

▸ **shouldStopAnimation**(`value`: number, `destination`: number, `velocity`: number): *boolean*

*Defined in [spring/shouldStopAnimation.ts:1](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/spring/shouldStopAnimation.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`destination` | number |
`velocity` | number |

**Returns:** *boolean*

___

###  spyOnObservable

▸ **spyOnObservable**<**T**>(`obs`: Observable‹T›): *SpyOnObservable‹T›*

*Defined in [jest/index.ts:47](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/jest/index.ts#L47)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obs` | Observable‹T› |

**Returns:** *SpyOnObservable‹T›*

___

###  spyOnState

▸ **spyOnState**<**T**>(`state`: T): *SpyOnState‹Unwrap‹T››*

*Defined in [jest/index.ts:34](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/jest/index.ts#L34)*

Test State observable values by extending each observable with
`.nextValue: Promise<T>` and `.latestValue: T` for easier testing with `jest`

Example:
```js
const todos = spyOnState(createTodosState());

expect(todos.$todoInput.latestValue).toBe("")
// this is a promise, so we must resolve
expect(todos.$todoInput.nextValue).resolve.toBe("new value")

// this will update $todoInput, and the expect will test it
todos.updateInput("new value")
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`state` | T |

**Returns:** *SpyOnState‹Unwrap‹T››*

___

###  stepper

▸ **stepper**(`secondPerFrame`: number, `x`: number, `v`: number, `destX`: number, `k`: number, `b`: number, `precision`: number): *[number, number]*

*Defined in [spring/stepper.ts:6](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/spring/stepper.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`secondPerFrame` | number |
`x` | number |
`v` | number |
`destX` | number |
`k` | number |
`b` | number |
`precision` | number |

**Returns:** *[number, number]*