**[behavior-state](../README.md)**

[Globals](../globals.md) › [Observer](observer.md)

# Class: Observer <**T, T, SS**>

Observer builds itself based on the latest value emitted by an Observable.
Observer builds itself based on the latest value emitted by an Observable.

Example:

```jsx
   <Observer
     of={state.$places}
     next={places => (
       places.map(place =>
         <li>
           <a href={place.href}>{place.name}</a>
         </li>
       )
     )}
   />
```

You might also want to build something before the {@link rxjs#Observable | Observable} has a value and after it completes:

```jsx
   <Observer
     of={stagedFile.$uploadProgress)}
     init={() => <LoadingSpinner/>}
     next={percentComplete => <ProgressBar progress={percentComplete * 0.01}/>}
     complete={() => <Okay/>}
   />
```

Example:

```jsx
   <Observer
     of={state.$places}
     next={places => (
       places.map(place =>
         <li>
           <a href={place.href}>{place.name}</a>
         </li>
       )
     )}
   />
```

You might also want to build something before the {@link rxjs#Observable | Observable} has a value and after it completes:

```jsx
   <Observer
     of={stagedFile.$uploadProgress)}
     init={() => <LoadingSpinner/>}
     next={percentComplete => <ProgressBar progress={percentComplete * 0.01}/>}
     complete={() => <Okay/>}
   />
```

## Type parameters

▪ **T**

▪ **T**

▪ **SS**

## Hierarchy

* Component‹[ObserverProps](../globals.md#observerprops)‹T›, ObserverState‹T››

* Component‹[ObserverProps](../globals.md#observerprops)‹T›, ObserverState‹T››

  * **Observer**

## Index

### Constructors

* [constructor](observer.md#constructor)

### Properties

* [base](observer.md#optional-base)
* [context](observer.md#context)
* [props](observer.md#props)
* [refs](observer.md#refs)
* [state](observer.md#state)
* [contextType](observer.md#static-optional-contexttype)
* [displayName](observer.md#static-optional-displayname)

### Methods

* [UNSAFE_componentWillMount](observer.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](observer.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](observer.md#optional-unsafe_componentwillupdate)
* [componentDidCatch](observer.md#optional-componentdidcatch)
* [componentDidMount](observer.md#componentdidmount)
* [componentDidUpdate](observer.md#optional-componentdidupdate)
* [componentWillMount](observer.md#optional-componentwillmount)
* [componentWillReceiveProps](observer.md#optional-componentwillreceiveprops)
* [componentWillUnmount](observer.md#componentwillunmount)
* [componentWillUpdate](observer.md#optional-componentwillupdate)
* [forceUpdate](observer.md#forceupdate)
* [getChildContext](observer.md#optional-getchildcontext)
* [getSnapshotBeforeUpdate](observer.md#optional-getsnapshotbeforeupdate)
* [render](observer.md#render)
* [setState](observer.md#setstate)
* [shouldComponentUpdate](observer.md#optional-shouldcomponentupdate)
* [getDerivedStateFromError](observer.md#static-optional-getderivedstatefromerror)
* [getDerivedStateFromProps](observer.md#static-optional-getderivedstatefromprops)

### Object literals

* [defaultProps](observer.md#static-defaultprops)

## Constructors

###  constructor

\+ **new Observer**(`props`: [ObserverProps](../globals.md#observerprops)‹T›): *[Observer](observer.md)*

*Overrides void*

*Defined in [preact/Observer.ts:65](https://github.com/colelawrence/bloc-utils/blob/6b24481/src/preact/Observer.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ObserverProps](../globals.md#observerprops)‹T› |

**Returns:** *[Observer](observer.md)*

## Properties

### `Optional` base

• **base**? : *Element | Text*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:119

___

###  context

• **context**: *any*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:118

___

###  props

• **props**: *RenderableProps‹[ObserverProps](../globals.md#observerprops)‹T››*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:117

___

###  refs

• **refs**: *object*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/@types/react/index.d.ts:459

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

* \[ **key**: *string*\]: ReactInstance

___

###  state

• **state**: *Readonly‹ObserverState‹T››*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:116

___

### `Static` `Optional` contextType

▪ **contextType**? : *Context‹any›*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:105

___

### `Static` `Optional` displayName

▪ **displayName**? : *string*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:103

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/@types/react/index.d.ts:641

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹[ObserverProps](../globals.md#observerprops)‹T››, `nextContext`: any): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/@types/react/index.d.ts:673

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[ObserverProps](../globals.md#observerprops)‹T›› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹[ObserverProps](../globals.md#observerprops)‹T››, `nextState`: Readonly‹ObserverState‹T››, `nextContext`: any): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/@types/react/index.d.ts:701

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[ObserverProps](../globals.md#observerprops)‹T›› |
`nextState` | Readonly‹ObserverState‹T›› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: any, `errorInfo`: any): *void*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:97

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`errorInfo` | any |

**Returns:** *void*

___

###  componentDidMount

▸ **componentDidMount**(): *void*

*Overrides void*

*Defined in [preact/Observer.ts:75](https://github.com/colelawrence/bloc-utils/blob/6b24481/src/preact/Observer.ts#L75)*

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`previousProps`: Readonly‹[ObserverProps](../globals.md#observerprops)‹T››, `previousState`: Readonly‹ObserverState‹T››, `snapshot`: any): *void*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:96

**Parameters:**

Name | Type |
------ | ------ |
`previousProps` | Readonly‹[ObserverProps](../globals.md#observerprops)‹T›› |
`previousState` | Readonly‹ObserverState‹T›› |
`snapshot` | any |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:88

**Returns:** *void*

___

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹[ObserverProps](../globals.md#observerprops)‹T››, `nextContext`: any): *void*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:92

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[ObserverProps](../globals.md#observerprops)‹T›› |
`nextContext` | any |

**Returns:** *void*

___

###  componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Overrides void*

*Defined in [preact/Observer.ts:84](https://github.com/colelawrence/bloc-utils/blob/6b24481/src/preact/Observer.ts#L84)*

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹[ObserverProps](../globals.md#observerprops)‹T››, `nextState`: Readonly‹ObserverState‹T››, `nextContext`: any): *void*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:94

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[ObserverProps](../globals.md#observerprops)‹T›› |
`nextState` | Readonly‹ObserverState‹T›› |
`nextContext` | any |

**Returns:** *void*

___

###  forceUpdate

▸ **forceUpdate**(`callback?`: function): *void*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:129

**Parameters:**

▪`Optional`  **callback**: *function*

▸ (): *void*

**Returns:** *void*

___

### `Optional` getChildContext

▸ **getChildContext**(): *object*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:91

**Returns:** *object*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`oldProps`: Readonly‹[ObserverProps](../globals.md#observerprops)‹T››, `oldState`: Readonly‹ObserverState‹T››): *any*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:95

**Parameters:**

Name | Type |
------ | ------ |
`oldProps` | Readonly‹[ObserverProps](../globals.md#observerprops)‹T›› |
`oldState` | Readonly‹ObserverState‹T›› |

**Returns:** *any*

___

###  render

▸ **render**(): *Element*

*Overrides void*

*Defined in [preact/Observer.ts:88](https://github.com/colelawrence/bloc-utils/blob/6b24481/src/preact/Observer.ts#L88)*

**Returns:** *Element*

___

###  setState

▸ **setState**<**K**>(`state`: function | object | object, `callback?`: function): *void*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:124

**Type parameters:**

▪ **K**: *keyof ObserverState<T>*

**Parameters:**

▪ **state**: *function | object | object*

▪`Optional`  **callback**: *function*

▸ (): *void*

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹[ObserverProps](../globals.md#observerprops)‹T››, `nextState`: Readonly‹ObserverState‹T››, `nextContext`: any): *boolean*

*Inherited from void*

*Overrides void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:93

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[ObserverProps](../globals.md#observerprops)‹T›› |
`nextState` | Readonly‹ObserverState‹T›› |
`nextContext` | any |

**Returns:** *boolean*

___

### `Static` `Optional` getDerivedStateFromError

▸ **getDerivedStateFromError**(`error`: any): *object | null*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:114

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *object | null*

___

### `Static` `Optional` getDerivedStateFromProps

▸ **getDerivedStateFromProps**(`props`: Readonly‹object›, `state`: Readonly‹object›): *object | null*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/packages/bloc-utils/node_modules/preact/src/index.d.ts:113

**Parameters:**

Name | Type |
------ | ------ |
`props` | Readonly‹object› |
`state` | Readonly‹object› |

**Returns:** *object | null*

## Object literals

### `Static` defaultProps

### ▪ **defaultProps**: *object*

*Overrides void*

*Defined in [preact/Observer.ts:62](https://github.com/colelawrence/bloc-utils/blob/6b24481/src/preact/Observer.ts#L62)*

*Defined in [react/Observer.ts:62](https://github.com/colelawrence/bloc-utils/blob/6b24481/src/react/Observer.ts#L62)*

###  complete

• **complete**: *NONE* =  NONE

*Defined in [preact/Observer.ts:64](https://github.com/colelawrence/bloc-utils/blob/6b24481/src/preact/Observer.ts#L64)*

*Defined in [react/Observer.ts:64](https://github.com/colelawrence/bloc-utils/blob/6b24481/src/react/Observer.ts#L64)*

###  init

• **init**: *NONE* =  NONE

*Defined in [preact/Observer.ts:63](https://github.com/colelawrence/bloc-utils/blob/6b24481/src/preact/Observer.ts#L63)*

*Defined in [react/Observer.ts:63](https://github.com/colelawrence/bloc-utils/blob/6b24481/src/react/Observer.ts#L63)*