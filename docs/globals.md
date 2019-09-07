**[bloc-utils](README.md)**

[Globals](globals.md)

# bloc-utils

## Index

### Classes

* [Behavior](classes/behavior.md)
* [Observer](classes/observer.md)

### Type aliases

* [BlocInput](globals.md#blocinput)
* [ObserverProps](globals.md#observerprops)
* [ProtectedBloc](globals.md#protectedbloc)

### Functions

* [protectBloc](globals.md#protectbloc)
* [spyOnBloc](globals.md#spyonbloc)
* [spyOnObservable](globals.md#spyonobservable)

## Type aliases

###  BlocInput

Ƭ **BlocInput**: *object*

Defined in protectBloc.ts:12

Strict BLoC type which enforces that each property is either a void function, or an Observable

#### Type declaration:

* \[ **propertyOrAction**: *string*\]: function | Observable‹any›

___

###  ObserverProps

Ƭ **ObserverProps**: *object*

Defined in react/Observer.ts:12

Properties of the `<Observer .../>` component

#### Type declaration:

___

###  ProtectedBloc

Ƭ **ProtectedBloc**: *object*

Defined in protectBloc.ts:7

Make all Behavior / Subject properties in T asObservable().
The resulting ProtectedBloc will not allow anyone to call .next() on any Behaviors.

#### Type declaration:

## Functions

###  protectBloc

▸ **protectBloc**<**T**>(`bloc`: T): *[ProtectedBloc](globals.md#protectedbloc)‹T›*

Defined in protectBloc.ts:24

Protects a BLoC from exposing mutable Behaviors or Subjects, and exposes those as Observables.

Ensure that the users of this BLoC are not able to call .next() on the behaviors passed in.
Additionally, types for protectBloc ensure that the shape of the bloc follows BLoC best practices.

**Type parameters:**

▪ **T**: *[BlocInput](globals.md#blocinput)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bloc` | T | set of Behavior / Observable values and action functions controlling the state  |

**Returns:** *[ProtectedBloc](globals.md#protectedbloc)‹T›*

___

###  spyOnBloc

▸ **spyOnBloc**<**T**>(`bloc`: T): *SpyOnBloc‹Unwrap‹T››*

Defined in jest/index.ts:34

Test Bloc observable values by extending each observable with
`.nextValue: Promise<T>` and `.latestValue: T` for easier testing with `jest`

Example:
```js
const todos = spyOnBloc(createTodosBloc());

expect(todos.$todoInput.latestValue).toBe("")
// this is a promise, so we must resolve
expect(todos.$todoInput.nextValue).resolve.toBe("new value")

// this will update $todoInput, and the expect will test it
todos.updateInput("new value")
```

**Type parameters:**

▪ **T**: *[BlocInput](globals.md#blocinput)*

**Parameters:**

Name | Type |
------ | ------ |
`bloc` | T |

**Returns:** *SpyOnBloc‹Unwrap‹T››*

___

###  spyOnObservable

▸ **spyOnObservable**<**T**>(`obs`: Observable‹T›): *SpyOnObservable‹T›*

Defined in jest/index.ts:47

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obs` | Observable‹T› |

**Returns:** *SpyOnObservable‹T›*