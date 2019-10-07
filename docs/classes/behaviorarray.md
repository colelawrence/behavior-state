**[behavior-state](../README.md)**

[Globals](../globals.md) › [BehaviorArray](behaviorarray.md)

# Class: BehaviorArray <**E**>

An extension of BehaviorSubject that requires an initial value and emits its current
value whenever it is subscribed to.

**`class`** BehaviorArray<E>

## Type parameters

▪ **E**

## Hierarchy

  * [Behavior](behavior.md)‹E[]›

  * **BehaviorArray**

## Implements

* Subscribable‹E[]›
* SubscriptionLike

## Index

### Constructors

* [constructor](behaviorarray.md#constructor)

### Properties

* [_isScalar](behaviorarray.md#_isscalar)
* [closed](behaviorarray.md#closed)
* [hasError](behaviorarray.md#haserror)
* [isStopped](behaviorarray.md#isstopped)
* [observers](behaviorarray.md#observers)
* [operator](behaviorarray.md#operator)
* [react](behaviorarray.md#react)
* [source](behaviorarray.md#source)
* [thrownError](behaviorarray.md#thrownerror)
* [value](behaviorarray.md#value)
* [create](behaviorarray.md#static-create)
* [if](behaviorarray.md#static-if)
* [throw](behaviorarray.md#static-throw)

### Methods

* [_subscribe](behaviorarray.md#_subscribe)
* [_trySubscribe](behaviorarray.md#_trysubscribe)
* [asObservable](behaviorarray.md#asobservable)
* [complete](behaviorarray.md#complete)
* [error](behaviorarray.md#error)
* [forEach](behaviorarray.md#foreach)
* [getValue](behaviorarray.md#getvalue)
* [lift](behaviorarray.md#lift)
* [next](behaviorarray.md#next)
* [nextPushItem](behaviorarray.md#nextpushitem)
* [nextRemoveItemsWhere](behaviorarray.md#nextremoveitemswhere)
* [nextUnshiftItem](behaviorarray.md#nextunshiftitem)
* [nextUpdateItemsWhere](behaviorarray.md#nextupdateitemswhere)
* [pipe](behaviorarray.md#pipe)
* [retain](behaviorarray.md#retain)
* [subscribe](behaviorarray.md#subscribe)
* [toPromise](behaviorarray.md#topromise)
* [unsubscribe](behaviorarray.md#unsubscribe)

## Constructors

###  constructor

\+ **new BehaviorArray**(`_value`: E[]): *[BehaviorArray](behaviorarray.md)*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/BehaviorSubject.d.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`_value` | E[] |

**Returns:** *[BehaviorArray](behaviorarray.md)*

## Properties

###  _isScalar

• **_isScalar**: *boolean*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:15

Internal implementation detail, do not use directly.

___

###  closed

• **closed**: *boolean*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Subject.d.ts:24

___

###  hasError

• **hasError**: *boolean*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Subject.d.ts:26

___

###  isStopped

• **isStopped**: *boolean*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Subject.d.ts:25

___

###  observers

• **observers**: *Observer‹E[]›[]*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Subject.d.ts:23

___

###  operator

• **operator**: *Operator‹any, E[]›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:19

**`deprecated`** This is an internal implementation detail, do not use.

___

###  react

• **react**: *React.FC‹[ObserverProps](../globals.md#observerprops)‹E[]››*

*Inherited from void*

*Defined in [react/index.ts:21](https://github.com/colelawrence/bloc-utils/blob/a80a209/src/react/index.ts#L21)*

___

###  source

• **source**: *Observable‹any›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:17

**`deprecated`** This is an internal implementation detail, do not use.

___

###  thrownError

• **thrownError**: *any*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Subject.d.ts:27

___

###  value

• **value**: *E[]*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/BehaviorSubject.d.ts:13

___

### `Static` create

▪ **create**: *Function*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Subject.d.ts:32

**`nocollapse`** 

**`deprecated`** use new Subject() instead

___

### `Static` if

▪ **if**: *iif*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:71

**`nocollapse`** 

**`deprecated`** In favor of iif creation function: import { iif } from 'rxjs';

___

### `Static` throw

▪ **throw**: *throwError*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:76

**`nocollapse`** 

**`deprecated`** In favor of throwError creation function: import { throwError } from 'rxjs';

## Methods

###  _subscribe

▸ **_subscribe**(`subscriber`: Subscriber‹E[]›): *Subscription*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/BehaviorSubject.d.ts:15

**`deprecated`** This is an internal implementation detail, do not use.

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | Subscriber‹E[]› |

**Returns:** *Subscription*

___

###  _trySubscribe

▸ **_trySubscribe**(`subscriber`: Subscriber‹E[]›): *TeardownLogic*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Subject.d.ts:39

**`deprecated`** This is an internal implementation detail, do not use.

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | Subscriber‹E[]› |

**Returns:** *TeardownLogic*

___

###  asObservable

▸ **asObservable**(): *Observable‹E[]›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Subject.d.ts:48

Creates a new Observable with this Subject as the source. You can do this
to create customize Observer-side logic of the Subject and conceal it from
code that uses the Observable.

**Returns:** *Observable‹E[]›*

Observable that the Subject casts to

___

###  complete

▸ **complete**(): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Subject.d.ts:36

**Returns:** *void*

___

###  error

▸ **error**(`err`: any): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Subject.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *void*

___

###  forEach

▸ **forEach**(`next`: function, `promiseCtor?`: PromiseConstructorLike): *Promise‹void›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:64

**`method`** forEach

**Parameters:**

▪ **next**: *function*

a handler for each value emitted by the observable

▸ (`value`: E[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | E[] |

▪`Optional`  **promiseCtor**: *PromiseConstructorLike*

**Returns:** *Promise‹void›*

a promise that either resolves on observable completion or
 rejects with the handled error

___

###  getValue

▸ **getValue**(): *E[]*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/BehaviorSubject.d.ts:16

**Returns:** *E[]*

___

###  lift

▸ **lift**<**R**>(`operator`: Operator‹E[], R›): *Observable‹R›*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Subject.d.ts:33

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | Operator‹E[], R› |

**Returns:** *Observable‹R›*

___

###  next

▸ **next**(`value`: E[]): *void*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/BehaviorSubject.d.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`value` | E[] |

**Returns:** *void*

___

###  nextPushItem

▸ **nextPushItem**(`item`: E): *void*

*Defined in [BehaviorArray.ts:11](https://github.com/colelawrence/bloc-utils/blob/a80a209/src/BehaviorArray.ts#L11)*

add to end of array and emit as next value

**Parameters:**

Name | Type |
------ | ------ |
`item` | E |

**Returns:** *void*

___

###  nextRemoveItemsWhere

▸ **nextRemoveItemsWhere**(`shouldRemove`: function): *void*

*Defined in [BehaviorArray.ts:24](https://github.com/colelawrence/bloc-utils/blob/a80a209/src/BehaviorArray.ts#L24)*

Emits next value with items matching the given predicate removed.

**Parameters:**

▪ **shouldRemove**: *function*

return true for values that need to be removed

▸ (`item`: E): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`item` | E |

**Returns:** *void*

___

###  nextUnshiftItem

▸ **nextUnshiftItem**(`item`: E): *void*

*Defined in [BehaviorArray.ts:16](https://github.com/colelawrence/bloc-utils/blob/a80a209/src/BehaviorArray.ts#L16)*

add to start of array and emit as next value

**Parameters:**

Name | Type |
------ | ------ |
`item` | E |

**Returns:** *void*

___

###  nextUpdateItemsWhere

▸ **nextUpdateItemsWhere**(`shouldUpdate`: function, `update`: function): *void*

*Defined in [BehaviorArray.ts:31](https://github.com/colelawrence/bloc-utils/blob/a80a209/src/BehaviorArray.ts#L31)*

**Parameters:**

▪ **shouldUpdate**: *function*

return true for values that you want to update using @param update

▸ (`item`: E): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`item` | E |

▪ **update**: *function*

▸ (`item`: E): *E*

**Parameters:**

Name | Type |
------ | ------ |
`item` | E |

**Returns:** *void*

___

###  pipe

▸ **pipe**(): *Observable‹E[]›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:77

**Returns:** *Observable‹E[]›*

▸ **pipe**<**A**>(`op1`: OperatorFunction‹E[], A›): *Observable‹A›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:78

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹E[], A› |

**Returns:** *Observable‹A›*

▸ **pipe**<**A**, **B**>(`op1`: OperatorFunction‹E[], A›, `op2`: OperatorFunction‹A, B›): *Observable‹B›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:79

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹E[], A› |
`op2` | OperatorFunction‹A, B› |

**Returns:** *Observable‹B›*

▸ **pipe**<**A**, **B**, **C**>(`op1`: OperatorFunction‹E[], A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›): *Observable‹C›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:80

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹E[], A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |

**Returns:** *Observable‹C›*

▸ **pipe**<**A**, **B**, **C**, **D**>(`op1`: OperatorFunction‹E[], A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›): *Observable‹D›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:81

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹E[], A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |

**Returns:** *Observable‹D›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**>(`op1`: OperatorFunction‹E[], A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›): *Observable‹E›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:82

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹E[], A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |

**Returns:** *Observable‹E›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**>(`op1`: OperatorFunction‹E[], A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›): *Observable‹F›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:83

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
`op1` | OperatorFunction‹E[], A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |

**Returns:** *Observable‹F›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`op1`: OperatorFunction‹E[], A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›): *Observable‹G›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:84

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
`op1` | OperatorFunction‹E[], A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |

**Returns:** *Observable‹G›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`op1`: OperatorFunction‹E[], A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›, `op8`: OperatorFunction‹G, H›): *Observable‹H›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:85

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
`op1` | OperatorFunction‹E[], A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |
`op8` | OperatorFunction‹G, H› |

**Returns:** *Observable‹H›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`op1`: OperatorFunction‹E[], A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›, `op8`: OperatorFunction‹G, H›, `op9`: OperatorFunction‹H, I›): *Observable‹I›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:86

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
`op1` | OperatorFunction‹E[], A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |
`op8` | OperatorFunction‹G, H› |
`op9` | OperatorFunction‹H, I› |

**Returns:** *Observable‹I›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`op1`: OperatorFunction‹E[], A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›, `op8`: OperatorFunction‹G, H›, `op9`: OperatorFunction‹H, I›, ...`operations`: OperatorFunction‹any, any›[]): *Observable‹__type›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:87

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
`op1` | OperatorFunction‹E[], A› |
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

###  retain

▸ **retain**(`shouldKeep`: function): *void*

*Defined in [BehaviorArray.ts:50](https://github.com/colelawrence/bloc-utils/blob/a80a209/src/BehaviorArray.ts#L50)*

Emits next value with items matching the given predicate retained.

**Parameters:**

▪ **shouldKeep**: *function*

return true for values that you want to keep in the array

▸ (`item`: E): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`item` | E |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`observer?`: PartialObserver‹E[]›): *Subscription*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`observer?` | PartialObserver‹E[]› |

**Returns:** *Subscription*

▸ **subscribe**(`next`: null | undefined, `error`: null | undefined, `complete`: function): *Subscription*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:49

**`deprecated`** Use an observer instead of a complete callback

**Parameters:**

▪ **next**: *null | undefined*

▪ **error**: *null | undefined*

▪ **complete**: *function*

▸ (): *void*

**Returns:** *Subscription*

▸ **subscribe**(`next`: null | undefined, `error`: function, `complete?`: function): *Subscription*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:51

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

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:53

**`deprecated`** Use an observer instead of a complete callback

**Parameters:**

▪ **next**: *function*

▸ (`value`: E[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | E[] |

▪ **error**: *null | undefined*

▪ **complete**: *function*

▸ (): *void*

**Returns:** *Subscription*

▸ **subscribe**(`next?`: function, `error?`: function, `complete?`: function): *Subscription*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:54

**Parameters:**

▪`Optional`  **next**: *function*

▸ (`value`: E[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | E[] |

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

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:88

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`this` | Observable‹T› |

**Returns:** *Promise‹T›*

▸ **toPromise**<**T**>(`this`: Observable‹T›, `PromiseCtor`: PromiseConstructor): *Promise‹T›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:89

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

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Observable.d.ts:90

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

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/rxjs/internal/Subject.d.ts:37

**Returns:** *void*