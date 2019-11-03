**[behavior-state](../README.md)**

[Globals](../globals.md) › [BehaviorList](behaviorlist.md)

# Class: BehaviorList <**E**>

Almost indistinguishable from BehaviorArray, BehaviorList
does not extend Behavior, and does not allow you to directly
call .next(value), because it is designed for performant
transforms using .mapItems(fn)

**`class`** BehaviorList<E>

## Type parameters

▪ **E**

## Hierarchy

* [ObservableList](observablelist.md)‹E›

  * **BehaviorList**

## Implements

* IObservableList‹E›

## Index

### Constructors

* [constructor](behaviorlist.md#constructor)

### Properties

* [_order](behaviorlist.md#protected-_order)
* [react](behaviorlist.md#react)

### Methods

* [asObservable](behaviorlist.md#asobservable)
* [asObservableList](behaviorlist.md#asobservablelist)
* [mapItems](behaviorlist.md#mapitems)
* [nextAppendItem](behaviorlist.md#nextappenditem)
* [nextPrependItem](behaviorlist.md#nextprependitem)
* [nextRemoveItemsWhere](behaviorlist.md#nextremoveitemswhere)
* [nextRetainItemsWhere](behaviorlist.md#nextretainitemswhere)
* [nextUpdateItems](behaviorlist.md#nextupdateitems)
* [nextUpdateItemsWhere](behaviorlist.md#nextupdateitemswhere)

## Constructors

###  constructor

\+ **new BehaviorList**(`init?`: E[]): *[BehaviorList](behaviorlist.md)*

*Inherited from [ObservableList](observablelist.md).[constructor](observablelist.md#constructor)*

*Defined in [BehaviorList.ts:21](https://github.com/colelawrence/behavior-state/blob/8388a6c/src/BehaviorList.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`init?` | E[] |

**Returns:** *[BehaviorList](behaviorlist.md)*

## Properties

### `Protected` _order

• **_order**: *[BehaviorArray](behaviorarray.md)‹[Behavior](behavior.md)‹E››*

*Inherited from [ObservableList](observablelist.md).[_order](observablelist.md#protected-_order)*

*Defined in [BehaviorList.ts:21](https://github.com/colelawrence/behavior-state/blob/8388a6c/src/BehaviorList.ts#L21)*

___

###  react

• **react**: *FunctionComponent‹object›*

*Inherited from [ObservableList](observablelist.md).[react](observablelist.md#react)*

*Defined in [BehaviorList.ts:13](https://github.com/colelawrence/behavior-state/blob/8388a6c/src/BehaviorList.ts#L13)*

## Methods

###  asObservable

▸ **asObservable**(): *Observable‹E[]›*

*Defined in [BehaviorList.ts:56](https://github.com/colelawrence/behavior-state/blob/8388a6c/src/BehaviorList.ts#L56)*

**Returns:** *Observable‹E[]›*

___

###  asObservableList

▸ **asObservableList**(): *[ObservableList](observablelist.md)‹E›*

*Defined in [BehaviorList.ts:51](https://github.com/colelawrence/behavior-state/blob/8388a6c/src/BehaviorList.ts#L51)*

**Returns:** *[ObservableList](observablelist.md)‹E›*

___

###  mapItems

▸ **mapItems**<**T**>(`mapFn`: function): *Observable‹T[]›*

*Inherited from [ObservableList](observablelist.md)*

*Defined in [BehaviorList.ts:30](https://github.com/colelawrence/behavior-state/blob/8388a6c/src/BehaviorList.ts#L30)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **mapFn**: *function*

▸ (`itemObservable`: Observable‹E›): *Observable‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`itemObservable` | Observable‹E› |

**Returns:** *Observable‹T[]›*

___

###  nextAppendItem

▸ **nextAppendItem**(`item`: E): *void*

*Defined in [BehaviorList.ts:61](https://github.com/colelawrence/behavior-state/blob/8388a6c/src/BehaviorList.ts#L61)*

add to end of array and emit as next value (push)

**Parameters:**

Name | Type |
------ | ------ |
`item` | E |

**Returns:** *void*

___

###  nextPrependItem

▸ **nextPrependItem**(`item`: E): *void*

*Defined in [BehaviorList.ts:66](https://github.com/colelawrence/behavior-state/blob/8388a6c/src/BehaviorList.ts#L66)*

add to start of array and emit as next value (unshift)

**Parameters:**

Name | Type |
------ | ------ |
`item` | E |

**Returns:** *void*

___

###  nextRemoveItemsWhere

▸ **nextRemoveItemsWhere**(`shouldRemove`: function): *void*

*Defined in [BehaviorList.ts:74](https://github.com/colelawrence/behavior-state/blob/8388a6c/src/BehaviorList.ts#L74)*

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

###  nextRetainItemsWhere

▸ **nextRetainItemsWhere**(`shouldKeep`: function): *void*

*Defined in [BehaviorList.ts:84](https://github.com/colelawrence/behavior-state/blob/8388a6c/src/BehaviorList.ts#L84)*

Emits next value with items matching the given predicate retained.

**Parameters:**

▪ **shouldKeep**: *function*

return true for values that you want to keep in the next emitted array

▸ (`item`: E): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`item` | E |

**Returns:** *void*

___

###  nextUpdateItems

▸ **nextUpdateItems**(`update`: function): *void*

*Defined in [BehaviorList.ts:107](https://github.com/colelawrence/behavior-state/blob/8388a6c/src/BehaviorList.ts#L107)*

**Parameters:**

▪ **update**: *function*

each item

▸ (`item`: E): *E*

**Parameters:**

Name | Type |
------ | ------ |
`item` | E |

**Returns:** *void*

___

###  nextUpdateItemsWhere

▸ **nextUpdateItemsWhere**(`shouldUpdate`: function, `update`: function): *void*

*Defined in [BehaviorList.ts:93](https://github.com/colelawrence/behavior-state/blob/8388a6c/src/BehaviorList.ts#L93)*

**Parameters:**

▪ **shouldUpdate**: *function*

return true for values that you want to update using @param update in the next emitted array

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