**[bloc-utils](../README.md)**

[Globals](../globals.md) › [Observer](observer.md)

# Class: Observer <**T, SS**>

Observer builds itself based on the latest value emitted by an Observable.

Example:

```jsx
   <Observer
     of={bloc.$places}
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

▪ **SS**

## Hierarchy

* Component‹[ObserverProps](../globals.md#observerprops)‹T›, ObserverState‹T››

  * **Observer**

## Index

### Constructors

* [constructor](observer.md#constructor)

### Properties

* [context](observer.md#context)
* [props](observer.md#props)
* [refs](observer.md#refs)
* [state](observer.md#state)
* [contextType](observer.md#static-optional-contexttype)

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
* [getSnapshotBeforeUpdate](observer.md#optional-getsnapshotbeforeupdate)
* [render](observer.md#render)
* [setState](observer.md#setstate)
* [shouldComponentUpdate](observer.md#optional-shouldcomponentupdate)

### Object literals

* [defaultProps](observer.md#static-defaultprops)

## Constructors

###  constructor

\+ **new Observer**(`props`: [ObserverProps](../globals.md#observerprops)‹T›): *[Observer](observer.md)*

*Overrides void*

Defined in react/Observer.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ObserverProps](../globals.md#observerprops)‹T› |

**Returns:** *[Observer](observer.md)*

## Properties

###  context

• **context**: *any*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:425

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.

```ts
static contextType = MyContext
context!: React.ContextType<typeof MyContext>
```

**`deprecated`** if used without a type annotation, or without static contextType

**`see`** https://reactjs.org/docs/legacy-context.html

___

###  props

• **props**: *Readonly‹[ObserverProps](../globals.md#observerprops)‹T›› & Readonly‹object›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:450

___

###  refs

• **refs**: *object*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:456

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

* \[ **key**: *string*\]: ReactInstance

___

###  state

• **state**: *Readonly‹ObserverState‹T››*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:451

___

### `Static` `Optional` contextType

▪ **contextType**? : *Context‹any›*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:410

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:638

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

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:670

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

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:698

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

▸ **componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:567

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

___

###  componentDidMount

▸ **componentDidMount**(): *void*

*Overrides void*

Defined in react/Observer.ts:75

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹[ObserverProps](../globals.md#observerprops)‹T››, `prevState`: Readonly‹ObserverState‹T››, `snapshot?`: SS): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:609

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹[ObserverProps](../globals.md#observerprops)‹T›› |
`prevState` | Readonly‹ObserverState‹T›› |
`snapshot?` | SS |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:624

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹[ObserverProps](../globals.md#observerprops)‹T››, `nextContext`: any): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:653

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

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

Defined in react/Observer.ts:84

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹[ObserverProps](../globals.md#observerprops)‹T››, `nextState`: Readonly‹ObserverState‹T››, `nextContext`: any): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:683

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

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

###  forceUpdate

▸ **forceUpdate**(`callBack?`: function): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:442

**Parameters:**

▪`Optional`  **callBack**: *function*

▸ (): *void*

**Returns:** *void*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹[ObserverProps](../globals.md#observerprops)‹T››, `prevState`: Readonly‹ObserverState‹T››): *SS | null*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:603

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹[ObserverProps](../globals.md#observerprops)‹T›› |
`prevState` | Readonly‹ObserverState‹T›› |

**Returns:** *SS | null*

___

###  render

▸ **render**(): *string | number | false | true | __type | ReactElement‹any, string | function | object› | ReactNodeArray | ReactPortal*

*Overrides void*

Defined in react/Observer.ts:88

**Returns:** *string | number | false | true | __type | ReactElement‹any, string | function | object› | ReactNodeArray | ReactPortal*

___

###  setState

▸ **setState**<**K**>(`state`: function | S | object, `callback?`: function): *void*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:437

**Type parameters:**

▪ **K**: *keyof ObserverState<T>*

**Parameters:**

▪ **state**: *function | S | object*

▪`Optional`  **callback**: *function*

▸ (): *void*

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹[ObserverProps](../globals.md#observerprops)‹T››, `nextState`: Readonly‹ObserverState‹T››, `nextContext`: any): *boolean*

*Inherited from void*

Defined in /Users/cole/Desktop/refactorordie.com/storybook/node_modules/@types/react/index.d.ts:557

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[ObserverProps](../globals.md#observerprops)‹T›› |
`nextState` | Readonly‹ObserverState‹T›› |
`nextContext` | any |

**Returns:** *boolean*

## Object literals

### `Static` defaultProps

### ▪ **defaultProps**: *object*

Defined in react/Observer.ts:62

###  complete

• **complete**: *NONE* =  NONE

Defined in react/Observer.ts:64

###  init

• **init**: *NONE* =  NONE

Defined in react/Observer.ts:63