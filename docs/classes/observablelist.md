**[behavior-state](../README.md)**

[Globals](../globals.md) › [ObservableList](observablelist.md)

# Class: ObservableList <**E**>

## Type parameters

▪ **E**

## Hierarchy

* **ObservableList**

  * [BehaviorList](behaviorlist.md)

## Implements

* IObservableList‹E›

## Index

### Constructors

* [constructor](observablelist.md#constructor)

### Properties

* [_order](observablelist.md#protected-_order)
* [react](observablelist.md#react)

### Methods

* [mapItems](observablelist.md#mapitems)

## Constructors

###  constructor

\+ **new ObservableList**(`init?`: E[]): *[ObservableList](observablelist.md)*

*Defined in [BehaviorList.ts:22](https://github.com/colelawrence/behavior-state/blob/b7cfacc/src/BehaviorList.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`init?` | E[] |

**Returns:** *[ObservableList](observablelist.md)*

## Properties

### `Protected` _order

• **_order**: *[BehaviorArray](behaviorarray.md)‹[Behavior](behavior.md)‹E››*

*Defined in [BehaviorList.ts:22](https://github.com/colelawrence/behavior-state/blob/b7cfacc/src/BehaviorList.ts#L22)*

___

###  react

• **react**: *FunctionComponent‹object›*

*Defined in [BehaviorList.ts:15](https://github.com/colelawrence/behavior-state/blob/b7cfacc/src/BehaviorList.ts#L15)*

## Methods

###  mapItems

▸ **mapItems**<**T**>(`mapFn`: function): *Observable‹T[]›*

*Defined in [BehaviorList.ts:31](https://github.com/colelawrence/behavior-state/blob/b7cfacc/src/BehaviorList.ts#L31)*

I get the sense that this can be heavily optimized

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