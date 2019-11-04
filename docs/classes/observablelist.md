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

* [constructor](observablelist.md#protected-constructor)

### Properties

* [_order](observablelist.md#protected-_order)
* [react](observablelist.md#react)

### Methods

* [mapItems](observablelist.md#mapitems)

## Constructors

### `Protected` constructor

\+ **new ObservableList**(`_order`: [Behavior](behavior.md)‹[Behavior](behavior.md)‹E | ItemPlaceholders›[]›): *[ObservableList](observablelist.md)*

*Defined in [BehaviorList.ts:17](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/BehaviorList.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`_order` | [Behavior](behavior.md)‹[Behavior](behavior.md)‹E \| ItemPlaceholders›[]› |

**Returns:** *[ObservableList](observablelist.md)*

## Properties

### `Protected` _order

• **_order**: *[Behavior](behavior.md)‹[Behavior](behavior.md)‹E | ItemPlaceholders›[]›*

*Defined in [BehaviorList.ts:29](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/BehaviorList.ts#L29)*

___

###  react

• **react**: *FunctionComponent*

*Defined in [BehaviorList.ts:17](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/BehaviorList.ts#L17)*

## Methods

###  mapItems

▸ **mapItems**<**T**>(`mapFn`: function): *Observable‹T[]›*

*Defined in [BehaviorList.ts:39](https://github.com/colelawrence/behavior-state/blob/3ac5a6a/src/BehaviorList.ts#L39)*

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