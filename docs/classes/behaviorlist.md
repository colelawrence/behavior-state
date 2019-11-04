**[behavior-state](../README.md)**

[Globals](../globals.md) › [BehaviorList](behaviorlist.md)

# Class: BehaviorList <**E**>

Almost indistinguishable from `BehaviorArray`, `BehaviorList`
is not an extension of `Behavior`, and does not allow you to directly
call `.next(value)`. This enables us to provide precise update paths
which can be listened to through `.mapItems(fn)`

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

*Overrides [ObservableList](observablelist.md).[constructor](observablelist.md#protected-constructor)*

*Defined in [BehaviorList.ts:154](https://github.com/colelawrence/behavior-state/blob/40001fc/src/BehaviorList.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`init?` | E[] |

**Returns:** *[BehaviorList](behaviorlist.md)*

## Properties

### `Protected` _order

• **_order**: *[Behavior](behavior.md)‹[Behavior](behavior.md)‹E | ItemPlaceholders›[]›*

*Inherited from [ObservableList](observablelist.md).[_order](observablelist.md#protected-_order)*

*Defined in [BehaviorList.ts:29](https://github.com/colelawrence/behavior-state/blob/40001fc/src/BehaviorList.ts#L29)*

___

###  react

• **react**: *FunctionComponent*

*Inherited from [ObservableList](observablelist.md).[react](observablelist.md#react)*

*Defined in [BehaviorList.ts:17](https://github.com/colelawrence/behavior-state/blob/40001fc/src/BehaviorList.ts#L17)*

## Methods

###  asObservable

▸ **asObservable**(): *Observable‹E[]›*

*Defined in [BehaviorList.ts:176](https://github.com/colelawrence/behavior-state/blob/40001fc/src/BehaviorList.ts#L176)*

**Returns:** *Observable‹E[]›*

___

###  asObservableList

▸ **asObservableList**(): *[ObservableList](observablelist.md)‹E›*

*Defined in [BehaviorList.ts:171](https://github.com/colelawrence/behavior-state/blob/40001fc/src/BehaviorList.ts#L171)*

**Returns:** *[ObservableList](observablelist.md)‹E›*

___

###  mapItems

▸ **mapItems**<**T**>(`mapFn`: function): *Observable‹T[]›*

*Inherited from [ObservableList](observablelist.md)*

*Defined in [BehaviorList.ts:39](https://github.com/colelawrence/behavior-state/blob/40001fc/src/BehaviorList.ts#L39)*

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

*Defined in [BehaviorList.ts:189](https://github.com/colelawrence/behavior-state/blob/40001fc/src/BehaviorList.ts#L189)*

Add item to end of array and emit as next value (push)

**Parameters:**

Name | Type |
------ | ------ |
`item` | E |

**Returns:** *void*

___

###  nextPrependItem

▸ **nextPrependItem**(`item`: E): *void*

*Defined in [BehaviorList.ts:206](https://github.com/colelawrence/behavior-state/blob/40001fc/src/BehaviorList.ts#L206)*

Add to start of array and emit as next value (unshift)

**Parameters:**

Name | Type |
------ | ------ |
`item` | E |

**Returns:** *void*

___

###  nextRemoveItemsWhere

▸ **nextRemoveItemsWhere**(`shouldRemove`: function): *void*

*Defined in [BehaviorList.ts:216](https://github.com/colelawrence/behavior-state/blob/40001fc/src/BehaviorList.ts#L216)*

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

*Defined in [BehaviorList.ts:235](https://github.com/colelawrence/behavior-state/blob/40001fc/src/BehaviorList.ts#L235)*

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

*Defined in [BehaviorList.ts:268](https://github.com/colelawrence/behavior-state/blob/40001fc/src/BehaviorList.ts#L268)*

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

*Defined in [BehaviorList.ts:253](https://github.com/colelawrence/behavior-state/blob/40001fc/src/BehaviorList.ts#L253)*

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