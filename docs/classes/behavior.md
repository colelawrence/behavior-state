**[behavior-state](../README.md)**

[Globals](../globals.md) › [Behavior](behavior.md)

# Class: Behavior <**T**>

An extension of BehaviorSubject that requires an initial value and emits its current
value whenever it is subscribed to.

**`class`** Behavior<T>

## Type parameters

▪ **T**

## Hierarchy

* BehaviorSubject‹T›

  * **Behavior**

  * [BehaviorArray](behaviorarray.md)

  * [BehaviorSpring](behaviorspring.md)

## Implements

* Subscribable‹T›
* SubscriptionLike

## Index

### Constructors

* [constructor](behavior.md#constructor)

### Properties

* [__computed](behavior.md#__computed)
* [_isScalar](behavior.md#_isscalar)
* [closed](behavior.md#closed)
* [hasError](behavior.md#haserror)
* [isStopped](behavior.md#isstopped)
* [observers](behavior.md#observers)
* [operator](behavior.md#operator)
* [react](behavior.md#react)
* [source](behavior.md#source)
* [thrownError](behavior.md#thrownerror)
* [create](behavior.md#static-create)
* [if](behavior.md#static-if)
* [throw](behavior.md#static-throw)

### Accessors

* [value](behavior.md#value)

### Methods

* [_subscribe](behavior.md#_subscribe)
* [_trySubscribe](behavior.md#_trysubscribe)
* [asObservable](behavior.md#asobservable)
* [complete](behavior.md#complete)
* [error](behavior.md#error)
* [forEach](behavior.md#foreach)
* [getValue](behavior.md#getvalue)
* [lift](behavior.md#lift)
* [next](behavior.md#next)
* [pipe](behavior.md#pipe)
* [subscribe](behavior.md#subscribe)
* [toPromise](behavior.md#topromise)
* [unsubscribe](behavior.md#unsubscribe)

## Constructors

###  constructor

\+ **new Behavior**(`_value`: T): *[Behavior](behavior.md)*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/BehaviorSubject.d.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`_value` | T |

**Returns:** *[Behavior](behavior.md)*

## Properties

###  __computed

• **__computed**: *number*

*Inherited from void*

*Defined in [react/index.ts:28](https://github.com/colelawrence/behavior-state/blob/cacd576/src/react/index.ts#L28)*

___

###  _isScalar

• **_isScalar**: *boolean*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:15

Internal implementation detail, do not use directly.

___

###  closed

• **closed**: *boolean*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Subject.d.ts:24

___

###  hasError

• **hasError**: *boolean*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Subject.d.ts:26

___

###  isStopped

• **isStopped**: *boolean*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Subject.d.ts:25

___

###  observers

• **observers**: *Observer‹T›[]*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Subject.d.ts:23

___

###  operator

• **operator**: *Operator‹any, T›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:19

**`deprecated`** This is an internal implementation detail, do not use.

___

###  react

• **react**: *React.FC‹[ObserverProps](../globals.md#observerprops)‹T››*

*Inherited from void*

*Defined in [react/index.ts:29](https://github.com/colelawrence/behavior-state/blob/cacd576/src/react/index.ts#L29)*

___

###  source

• **source**: *Observable‹any›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:17

**`deprecated`** This is an internal implementation detail, do not use.

___

###  thrownError

• **thrownError**: *any*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Subject.d.ts:27

___

### `Static` create

▪ **create**: *Function*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Subject.d.ts:32

**`nocollapse`** 

**`deprecated`** use new Subject() instead

___

### `Static` if

▪ **if**: *iif*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:71

**`nocollapse`** 

**`deprecated`** In favor of iif creation function: import { iif } from 'rxjs';

___

### `Static` throw

▪ **throw**: *throwError*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:76

**`nocollapse`** 

**`deprecated`** In favor of throwError creation function: import { throwError } from 'rxjs';

## Accessors

###  value

• **get value**(): *T*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/BehaviorSubject.d.ts:13

**Returns:** *T*

## Methods

###  _subscribe

▸ **_subscribe**(`subscriber`: Subscriber‹T›): *Subscription*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/BehaviorSubject.d.ts:15

**`deprecated`** This is an internal implementation detail, do not use.

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | Subscriber‹T› |

**Returns:** *Subscription*

___

###  _trySubscribe

▸ **_trySubscribe**(`subscriber`: Subscriber‹T›): *TeardownLogic*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Subject.d.ts:39

**`deprecated`** This is an internal implementation detail, do not use.

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | Subscriber‹T› |

**Returns:** *TeardownLogic*

___

###  asObservable

▸ **asObservable**(): *Observable‹T›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Subject.d.ts:48

Creates a new Observable with this Subject as the source. You can do this
to create customize Observer-side logic of the Subject and conceal it from
code that uses the Observable.

**Returns:** *Observable‹T›*

Observable that the Subject casts to

___

###  complete

▸ **complete**(): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Subject.d.ts:36

**Returns:** *void*

___

###  error

▸ **error**(`err`: any): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Subject.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *void*

___

###  forEach

▸ **forEach**(`next`: function, `promiseCtor?`: PromiseConstructorLike): *Promise‹void›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:64

**`method`** forEach

**Parameters:**

▪ **next**: *function*

a handler for each value emitted by the observable

▸ (`value`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

▪`Optional`  **promiseCtor**: *PromiseConstructorLike*

**Returns:** *Promise‹void›*

a promise that either resolves on observable completion or
 rejects with the handled error

___

###  getValue

▸ **getValue**(): *T*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/BehaviorSubject.d.ts:16

**Returns:** *T*

___

###  lift

▸ **lift**<**R**>(`operator`: Operator‹T, R›): *Observable‹R›*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Subject.d.ts:33

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | Operator‹T, R› |

**Returns:** *Observable‹R›*

___

###  next

▸ **next**(`value`: T): *void*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/BehaviorSubject.d.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  pipe

▸ **pipe**(): *Observable‹T›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:77

**Returns:** *Observable‹T›*

▸ **pipe**<**A**>(`op1`: OperatorFunction‹T, A›): *Observable‹A›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:78

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |

**Returns:** *Observable‹A›*

▸ **pipe**<**A**, **B**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›): *Observable‹B›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:79

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |

**Returns:** *Observable‹B›*

▸ **pipe**<**A**, **B**, **C**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›): *Observable‹C›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:80

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |

**Returns:** *Observable‹C›*

▸ **pipe**<**A**, **B**, **C**, **D**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›): *Observable‹D›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:81

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |

**Returns:** *Observable‹D›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›): *Observable‹E›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:82

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |

**Returns:** *Observable‹E›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›): *Observable‹F›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:83

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |

**Returns:** *Observable‹F›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›): *Observable‹G›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:84

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |

**Returns:** *Observable‹G›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›, `op8`: OperatorFunction‹G, H›): *Observable‹H›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:85

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |
`op8` | OperatorFunction‹G, H› |

**Returns:** *Observable‹H›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›, `op8`: OperatorFunction‹G, H›, `op9`: OperatorFunction‹H, I›): *Observable‹I›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:86

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

▪ **I**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |
`op8` | OperatorFunction‹G, H› |
`op9` | OperatorFunction‹H, I› |

**Returns:** *Observable‹I›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›, `op8`: OperatorFunction‹G, H›, `op9`: OperatorFunction‹H, I›, ...`operations`: OperatorFunction‹any, any›[]): *Observable‹unknown›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:87

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

▪ **I**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |
`op8` | OperatorFunction‹G, H› |
`op9` | OperatorFunction‹H, I› |
`...operations` | OperatorFunction‹any, any›[] |

**Returns:** *Observable‹unknown›*

___

###  subscribe

▸ **subscribe**(`observer?`: PartialObserver‹T›): *Subscription*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`observer?` | PartialObserver‹T› |

**Returns:** *Subscription*

▸ **subscribe**(`next`: null | undefined, `error`: null | undefined, `complete`: function): *Subscription*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:49

**`deprecated`** Use an observer instead of a complete callback

**Parameters:**

▪ **next**: *null | undefined*

▪ **error**: *null | undefined*

▪ **complete**: *function*

▸ (): *void*

**Returns:** *Subscription*

▸ **subscribe**(`next`: null | undefined, `error`: function, `complete?`: function): *Subscription*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:51

**`deprecated`** Use an observer instead of an error callback

**Parameters:**

▪ **next**: *null | undefined*

▪ **error**: *function*

▸ (`error`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

▪`Optional`  **complete**: *function*

▸ (): *void*

**Returns:** *Subscription*

▸ **subscribe**(`next`: function, `error`: null | undefined, `complete`: function): *Subscription*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:53

**`deprecated`** Use an observer instead of a complete callback

**Parameters:**

▪ **next**: *function*

▸ (`value`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

▪ **error**: *null | undefined*

▪ **complete**: *function*

▸ (): *void*

**Returns:** *Subscription*

▸ **subscribe**(`next?`: function, `error?`: function, `complete?`: function): *Subscription*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:54

**Parameters:**

▪`Optional`  **next**: *function*

▸ (`value`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

▪`Optional`  **error**: *function*

▸ (`error`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

▪`Optional`  **complete**: *function*

▸ (): *void*

**Returns:** *Subscription*

___

###  toPromise

▸ **toPromise**<**T**>(`this`: Observable‹T›): *Promise‹T›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:88

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`this` | Observable‹T› |

**Returns:** *Promise‹T›*

▸ **toPromise**<**T**>(`this`: Observable‹T›, `PromiseCtor`: PromiseConstructor): *Promise‹T›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:89

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`this` | Observable‹T› |
`PromiseCtor` | PromiseConstructor |

**Returns:** *Promise‹T›*

▸ **toPromise**<**T**>(`this`: Observable‹T›, `PromiseCtor`: PromiseConstructorLike): *Promise‹T›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Observable.d.ts:90

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`this` | Observable‹T› |
`PromiseCtor` | PromiseConstructorLike |

**Returns:** *Promise‹T›*

___

###  unsubscribe

▸ **unsubscribe**(): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/dist/types/internal/Subject.d.ts:37

**Returns:** *void*