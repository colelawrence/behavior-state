**[behavior-state](../README.md)**

[Globals](../globals.md) › [BehaviorSpring](behaviorspring.md)

# Class: BehaviorSpring

An extension of BehaviorSubject that requires an initial value and emits its current
value whenever it is subscribed to.

**`class`** BehaviorSpring

## Hierarchy

  * [Behavior](behavior.md)‹number›

  * **BehaviorSpring**

## Implements

* Subscribable‹number›
* SubscriptionLike

## Index

### Constructors

* [constructor](behaviorspring.md#constructor)

### Properties

* [_isScalar](behaviorspring.md#_isscalar)
* [closed](behaviorspring.md#closed)
* [hasError](behaviorspring.md#haserror)
* [isStopped](behaviorspring.md#isstopped)
* [observers](behaviorspring.md#observers)
* [operator](behaviorspring.md#operator)
* [react](behaviorspring.md#react)
* [source](behaviorspring.md#source)
* [thrownError](behaviorspring.md#thrownerror)
* [value](behaviorspring.md#value)
* [create](behaviorspring.md#static-create)
* [if](behaviorspring.md#static-if)
* [throw](behaviorspring.md#static-throw)

### Methods

* [_subscribe](behaviorspring.md#_subscribe)
* [_trySubscribe](behaviorspring.md#_trysubscribe)
* [asObservable](behaviorspring.md#asobservable)
* [complete](behaviorspring.md#complete)
* [error](behaviorspring.md#error)
* [forEach](behaviorspring.md#foreach)
* [getValue](behaviorspring.md#getvalue)
* [lift](behaviorspring.md#lift)
* [next](behaviorspring.md#next)
* [pipe](behaviorspring.md#pipe)
* [setDestination](behaviorspring.md#setdestination)
* [setDestinationAndForget](behaviorspring.md#setdestinationandforget)
* [subscribe](behaviorspring.md#subscribe)
* [toPromise](behaviorspring.md#topromise)
* [unsubscribe](behaviorspring.md#unsubscribe)

## Constructors

###  constructor

\+ **new BehaviorSpring**(`initialValue`: number, `c?`: object): *[BehaviorSpring](behaviorspring.md)*

*Overrides void*

*Defined in [spring/BehaviorSpring.ts:32](https://github.com/colelawrence/behavior-state/blob/40001fc/src/spring/BehaviorSpring.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`initialValue` | number |
`c?` | object |

**Returns:** *[BehaviorSpring](behaviorspring.md)*

## Properties

###  _isScalar

• **_isScalar**: *boolean*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:15

Internal implementation detail, do not use directly.

___

###  closed

• **closed**: *boolean*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Subject.d.ts:24

___

###  hasError

• **hasError**: *boolean*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Subject.d.ts:26

___

###  isStopped

• **isStopped**: *boolean*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Subject.d.ts:25

___

###  observers

• **observers**: *Observer‹number›[]*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Subject.d.ts:23

___

###  operator

• **operator**: *Operator‹any, number›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:19

**`deprecated`** This is an internal implementation detail, do not use.

___

###  react

• **react**: *React.FC‹[ObserverProps](../globals.md#observerprops)‹number››*

*Inherited from void*

*Defined in [react/index.ts:24](https://github.com/colelawrence/behavior-state/blob/40001fc/src/react/index.ts#L24)*

___

###  source

• **source**: *Observable‹any›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:17

**`deprecated`** This is an internal implementation detail, do not use.

___

###  thrownError

• **thrownError**: *any*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Subject.d.ts:27

___

###  value

• **value**: *number*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/BehaviorSubject.d.ts:13

___

### `Static` create

▪ **create**: *Function*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Subject.d.ts:32

**`nocollapse`** 

**`deprecated`** use new Subject() instead

___

### `Static` if

▪ **if**: *iif*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:71

**`nocollapse`** 

**`deprecated`** In favor of iif creation function: import { iif } from 'rxjs';

___

### `Static` throw

▪ **throw**: *throwError*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:76

**`nocollapse`** 

**`deprecated`** In favor of throwError creation function: import { throwError } from 'rxjs';

## Methods

###  _subscribe

▸ **_subscribe**(`subscriber`: Subscriber‹number›): *Subscription*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/BehaviorSubject.d.ts:15

**`deprecated`** This is an internal implementation detail, do not use.

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | Subscriber‹number› |

**Returns:** *Subscription*

___

###  _trySubscribe

▸ **_trySubscribe**(`subscriber`: Subscriber‹number›): *TeardownLogic*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Subject.d.ts:39

**`deprecated`** This is an internal implementation detail, do not use.

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | Subscriber‹number› |

**Returns:** *TeardownLogic*

___

###  asObservable

▸ **asObservable**(): *Observable‹number›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Subject.d.ts:48

Creates a new Observable with this Subject as the source. You can do this
to create customize Observer-side logic of the Subject and conceal it from
code that uses the Observable.

**Returns:** *Observable‹number›*

Observable that the Subject casts to

___

###  complete

▸ **complete**(): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Subject.d.ts:36

**Returns:** *void*

___

###  error

▸ **error**(`err`: any): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Subject.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *void*

___

###  forEach

▸ **forEach**(`next`: function, `promiseCtor?`: PromiseConstructorLike): *Promise‹void›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:64

**`method`** forEach

**Parameters:**

▪ **next**: *function*

a handler for each value emitted by the observable

▸ (`value`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

▪`Optional`  **promiseCtor**: *PromiseConstructorLike*

**Returns:** *Promise‹void›*

a promise that either resolves on observable completion or
 rejects with the handled error

___

###  getValue

▸ **getValue**(): *number*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/BehaviorSubject.d.ts:16

**Returns:** *number*

___

###  lift

▸ **lift**<**R**>(`operator`: Operator‹number, R›): *Observable‹R›*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Subject.d.ts:33

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | Operator‹number, R› |

**Returns:** *Observable‹R›*

___

###  next

▸ **next**(`value`: number): *void*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/BehaviorSubject.d.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  pipe

▸ **pipe**(): *Observable‹number›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:77

**Returns:** *Observable‹number›*

▸ **pipe**<**A**>(`op1`: OperatorFunction‹number, A›): *Observable‹A›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:78

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹number, A› |

**Returns:** *Observable‹A›*

▸ **pipe**<**A**, **B**>(`op1`: OperatorFunction‹number, A›, `op2`: OperatorFunction‹A, B›): *Observable‹B›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:79

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹number, A› |
`op2` | OperatorFunction‹A, B› |

**Returns:** *Observable‹B›*

▸ **pipe**<**A**, **B**, **C**>(`op1`: OperatorFunction‹number, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›): *Observable‹C›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:80

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹number, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |

**Returns:** *Observable‹C›*

▸ **pipe**<**A**, **B**, **C**, **D**>(`op1`: OperatorFunction‹number, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›): *Observable‹D›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:81

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹number, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |

**Returns:** *Observable‹D›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**>(`op1`: OperatorFunction‹number, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›): *Observable‹E›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:82

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹number, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |

**Returns:** *Observable‹E›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**>(`op1`: OperatorFunction‹number, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›): *Observable‹F›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:83

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
`op1` | OperatorFunction‹number, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |

**Returns:** *Observable‹F›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`op1`: OperatorFunction‹number, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›): *Observable‹G›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:84

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
`op1` | OperatorFunction‹number, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |

**Returns:** *Observable‹G›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`op1`: OperatorFunction‹number, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›, `op8`: OperatorFunction‹G, H›): *Observable‹H›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:85

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
`op1` | OperatorFunction‹number, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |
`op8` | OperatorFunction‹G, H› |

**Returns:** *Observable‹H›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`op1`: OperatorFunction‹number, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›, `op8`: OperatorFunction‹G, H›, `op9`: OperatorFunction‹H, I›): *Observable‹I›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:86

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
`op1` | OperatorFunction‹number, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |
`op8` | OperatorFunction‹G, H› |
`op9` | OperatorFunction‹H, I› |

**Returns:** *Observable‹I›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`op1`: OperatorFunction‹number, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›, `op8`: OperatorFunction‹G, H›, `op9`: OperatorFunction‹H, I›, ...`operations`: OperatorFunction‹any, any›[]): *Observable‹__type›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:87

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
`op1` | OperatorFunction‹number, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |
`op8` | OperatorFunction‹G, H› |
`op9` | OperatorFunction‹H, I› |
`...operations` | OperatorFunction‹any, any›[] |

**Returns:** *Observable‹__type›*

___

###  setDestination

▸ **setDestination**(`newDestination`: number): *Promise‹boolean›*

*Defined in [spring/BehaviorSpring.ts:72](https://github.com/colelawrence/behavior-state/blob/40001fc/src/spring/BehaviorSpring.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`newDestination` | number |

**Returns:** *Promise‹boolean›*

___

###  setDestinationAndForget

▸ **setDestinationAndForget**(`newDestination`: number): *void*

*Defined in [spring/BehaviorSpring.ts:82](https://github.com/colelawrence/behavior-state/blob/40001fc/src/spring/BehaviorSpring.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`newDestination` | number |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`observer?`: PartialObserver‹number›): *Subscription*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`observer?` | PartialObserver‹number› |

**Returns:** *Subscription*

▸ **subscribe**(`next`: null | undefined, `error`: null | undefined, `complete`: function): *Subscription*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:49

**`deprecated`** Use an observer instead of a complete callback

**Parameters:**

▪ **next**: *null | undefined*

▪ **error**: *null | undefined*

▪ **complete**: *function*

▸ (): *void*

**Returns:** *Subscription*

▸ **subscribe**(`next`: null | undefined, `error`: function, `complete?`: function): *Subscription*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:51

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

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:53

**`deprecated`** Use an observer instead of a complete callback

**Parameters:**

▪ **next**: *function*

▸ (`value`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

▪ **error**: *null | undefined*

▪ **complete**: *function*

▸ (): *void*

**Returns:** *Subscription*

▸ **subscribe**(`next?`: function, `error?`: function, `complete?`: function): *Subscription*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:54

**Parameters:**

▪`Optional`  **next**: *function*

▸ (`value`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

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

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:88

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`this` | Observable‹T› |

**Returns:** *Promise‹T›*

▸ **toPromise**<**T**>(`this`: Observable‹T›, `PromiseCtor`: PromiseConstructor): *Promise‹T›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:89

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

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Observable.d.ts:90

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

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/behavior-state/node_modules/rxjs/internal/Subject.d.ts:37

**Returns:** *void*