<h1 align="center">
  <img src="https://github.com/paypal/glamorous/raw/master/other/logo/full.png" alt="glamorous" title="glamorous" width="200">
  <br>
  glamorous 💄
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">Maintainable CSS with React</p>

> Read [the intro blogpost][intro-blogpost]

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npm-stat]
[![MIT License][license-badge]][LICENSE]

[![All Contributors](https://img.shields.io/badge/all_contributors-44-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Chat][chat-badge]][chat]
[![Code of Conduct][coc-badge]][coc]
[![Roadmap][roadmap-badge]][roadmap]
[![Examples][examples-badge]][examples]

[![gzip size][gzip-badge]][unpkg-dist]
[![size][size-badge]][unpkg-dist]
[![module formats: umd, cjs, and es][module-formats-badge]][unpkg-dist]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [The problem](#the-problem)
- [This solution](#this-solution)
- [Installation](#installation)
  - [React Native](#react-native)
  - [Typescript](#typescript)
- [Video Intro :tv:](#video-intro-tv)
- [Terms and concepts](#terms-and-concepts)
  - [glamorous](#glamorous)
  - [glamorous API](#glamorous-api)
  - [Theming](#theming)
  - [Config](#config)
  - [Context](#context)
  - [Size](#size)
  - [Server Side Rendering (SSR)](#server-side-rendering-ssr)
  - [Example Style Objects](#example-style-objects)
- [Related projects](#related-projects)
- [Users](#users)
- [Inspiration](#inspiration)
- [Other Solutions](#other-solutions)
- [Support](#support)
- [Got Questions?](#got-questions)
- [Swag 👕](#swag-)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## The problem

You like CSS in JS, but you don't like having to create entire component
functions just for styling purposes. You don't want to give a name to something
that's purely style-related. And it's just kind of annoying to do the
style-creating, `className` assigning, and props-forwarding song and dance.

For example, this is what you have to do with raw `glamor` (or `aphrodite` or
similar for that matter):

```jsx
const styles = glamor.css({
  fontSize: 20,
  textAlign: 'center',
})
function MyStyledDiv({className = '', ...rest}) {
  return (
    <div
      className={`${styles} ${className}`}
      {...rest}
    />
  )
}
```

## This solution

With `glamorous`, that example above looks as simple as this:

```javascript
const MyStyledDiv = glamorous.div({
  fontSize: 20,
  textAlign: 'center',
})
```

In fact, it's even better, because there are a bunch of features that make
composing these components together really nice!

Oh, and what if you didn't care to give `MyStyledDiv` a name? If you just want
a div that's styled using glamor? You can do that too:

```jsx
const { Div } = glamorous

function App() {
  return (
    <Div
      fontSize={20}
      textAlign="center"
    >
      Hello world!
    </Div>
  )
}
```

> Try this out in your browser [here](https://codesandbox.io/s/mDLZ1oKn)!

So that's the basics of this solution... Let's get to the details!

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install --save glamorous
```

This also depends on `react` and `glamor` so you'll need those in your project
as well (if you don't already have them):

```
npm install --save react glamor
```

> NOTE: If you're using React v15.5 or greater, you'll also need to have
> `prop-types` installed: `npm install --save prop-types`

You can then use one of the module formats:

- `main`: `dist/glamorous.cjs.js` - exports itself as a CommonJS module
- `global`: `dist/glamorous.umd.js` and `dist/glamorous.umd.min.js` - exports
  itself as a [umd][umd] module which is consumable in several environments, the
  most notable as a global.
- `jsnext:main` and `module`: `dist/glamorous.es.js` - exports itself using the
  ES modules specification, you'll need to configure webpack to make use of this
  file do this using the [resolve.mainFields][mainFields] property.

The most common use-case is consuming this module via CommonJS:

```javascript
const glamorous = require('glamorous')
const {ThemeProvider} = glamorous
// etc.
```

If you're transpiling (and/or using the `jsnext:main`):

```javascript
import glamorous, {ThemeProvider} from 'glamorous'

// you can also import specific Glamorous Components (see section below on "Built-in" components)
import {Div, H2} from 'glamorous'

// tags with the same name as built-in JavaScript objects are importable with a Tag suffix
// and tag names that contain dashes are transformed to CamelCase
import {MapTag, ColorProfile} from 'glamorous'
```

If you want to use the global:

```html
<!-- Load dependencies -->
<script src="https://unpkg.com/react/dist/react.js"></script>
<script src="https://unpkg.com/prop-types/prop-types.js"></script>
<script src="https://unpkg.com/glamor/umd/index.js"></script>
<!-- load library -->
<script src="https://unpkg.com/glamorous/dist/glamorous.umd.js"></script>
<script>
// Use window.glamorous here...
const glamorous = window.glamorous
const {ThemeProvider} = glamorous
</script>
```

### React Native

`glamorous` offers a version for React Native projects called `glamorous-native`.

```js
npm install glamorous-native --save
```

You can learn more at the [glamorous-native project][glamorous-native].

### Typescript

`glamorous` includes typescript definition files.

For usage notes and known issues see [other/TYPESCRIPT_USAGE.md][typescript-usage].

## Video Intro :tv:

<a href="https://youtu.be/lmrQTpJ_3PM" title="glamorous walkthrough">
  <img src="https://github.com/paypal/glamorous/raw/master/other/glamorous-walkthrough.png" alt="Video Screenshot" title="Video Screenshot" width="700" />
</a>

## Terms and concepts

### glamorous

The `glamorous` function is the main (only) export. It allows you to create
glamorous components that render the styles to the component you give it. This
is done by forwarding a `className` prop to the component you tell it to render.
But before we get into how you wrap custom components, let's talk about the
built-in DOM components.

#### built-in DOM component factories

For every DOM element, there is an associated `glamorous` component factory
attached to the `glamorous` function. As above, you can access these factories
like so: `glamorous.div`, `glamorous.a`, `glamorous.article`, etc.

```jsx
const MyStyledSection = glamorous.section({ margin: 1 })

<MyStyledSection>content</MyStyledSection>
// rendered output: <section class="<glamor-generated-class>">content</section>
// styles applied: {margin: 1}
```

#### glamorousComponentFactory

Whether you create one yourself or use one of the built-in ones mentioned above,
each `glamorousComponentFactory` allows you to invoke it with styles and it
returns you a new component which will have those styles applied when it's
rendered. This is accomplished by generating a `className` for the styles you
give and forwarding that `className` onto the rendered element. So if you're
wrapping a component you intend to style, you'll need to make sure you accept
the `className` as a prop and apply it to where you want the styles applied in
your custom component (normally the root element).

```jsx
const UnstyledComp = ({ className, children }) => <div className={`${className} other-class`}>{children}</div>
const MyStyledComp = glamorous(UnstyledComp)({ margin: 1 })

<MyStyledComp>content</MyStyledComp>
// rendered output: <div class="<glamor-generated-class> other-class">content</div>
// styles applied: 
// <glamor-generated-class> {
//  margin: 1px;
// }
```

##### ...styles

The `glamorousComponentFactory` accepts any number of style object arguments.
These can be style objects or functions which are invoked with `props` on every
render and return style objects. To learn more about what these style objects
can look like, please take a look at the [`glamor`][glamor] documentation.

```jsx
const MyStyledDiv = glamorous.div(
  {
    margin: 1,
  },
  (props) => ({
    padding: props.noPadding ? 0 : 4,
  })
)

<MyStyledDiv /> // styles applied: { margin: 1px; padding: 4px; }
<MyStyledDiv noPadding /> // styles applied: { margin: 1px; padding: 0; }
```

> Tip: glamorous simply takes these style objects and forwards them to `glamor`.
> `glamor` will then merge those together in a way you would expect. One neat
> thing you can do is specify an array of style objects and `glamor` will treat
> that exactly the same. It's really expressive! See the [examples][examples]
> for an example of how this works.

You can also specify other classes you'd like applied to the component as well.
If these classes are generated by glamor, then their styles will be merged with
the glamor style's, otherwise the class name will simply be forwarded. For
example:

```jsx
const className1 = glamor.css({paddingTop: 1, paddingRight: 1}).toString()
const styles2 = {paddingRight: 2, paddingBottom: 2}
const className3 = glamor.css({paddingBottom: 3, paddingLeft: 3}).toString()
const styles4 = {paddingLeft: 4}
const styles5 = props => (props.active ? 'active' : 'not-active')
const MyStyledDiv = glamorous.div(
  className1,
  styles2,
  className3,
  styles4,
  styles5,
  'extra-thing',
)
<MyStyledDiv /> // styles applied: { padding-top: 1px; padding-right: 2px; padding-bottom: 3px; padding-left: 4px } + 'not-active' and anything coming from `extra-thing`.
```

#### GlamorousComponent

The `GlamorousComponent` is what is returned from the `glamorousComponentFactory`.
Its job is to get all the styles together, get a `className` (from [`glamor`][glamor])
and forward that on to your component.

##### supported props

By default `GlamorousComponent` supports three props: `className`, `css` and `theme`
which are used to override the styles of the component in different scenarios. For a
more detailed explanation see [Overriding component styles](#overriding-component-styles) and [Theming](#theming) sections below.

##### `innerRef`

This is a function and if provided, will be called with the inner element's
reference.

```jsx
const MyDiv = glamorous.div({ padding: 20 })

// You can get a reference to the inner element with the `innerRef` prop
class MyComponent extends React.Component {
  render () {
    return (
      <MyDiv innerRef={c => this._divRef = c} />
    )
  }
}
```

##### other props

Only props that are safe to forward to the specific `element` (ie. that will
ultimately be rendered) will be forwarded. So this is totally legit:

```jsx
<MyStyledDiv size="big" />
```

A use case for doing something like this would be for dynamic styles:

```javascript
const staticStyles = {color: 'green'}
const dynamicStyles = props => ({fontSize: props.size === 'big' ? 32 : 24})
const MyDynamicallyStyledDiv = glamorous.div(staticStyles, dynamicStyles)
```

> The exception to this prop forwarding is the pre-created `GlamorousComponent`s
> (see below).

#### built-in GlamorousComponents

Often you want to style something without actually giving it a name (because
naming things is hard). So glamorous also exposes a pre-created
`GlamorousComponent` for each DOM node type which makes this reasonable to do:

```jsx
const { Div, Span, A, Img } = glamorous

function MyUserInterface({name, tagline, imageUrl, homepage, size}) {
  const nameSize = size
  const taglineSize = size * 0.5
  return (
    <Div display="flex" flexDirection="column" justifyContent="center">
      <A href={homepage} textDecoration="underline" color="#336479">
        <Img borderRadius="50%" height={180} src={imageUrl} />
        <Div fontSize={nameSize} fontWeight="bold">{name}</Div>
      </A>
      <Span fontSize={taglineSize} color="#767676">
        {tagline}
      </Span>
    </Div>
  )
}
```

> Try this out in your browser [here](https://codesandbox.io/s/wmRo8OKDm)!

Having to name all of that stuff could be tedious, so having these pre-built
components is handy. The other handy bit here is that the props _are_ the styles
for these components. Notice that glamorous can distinguish between props that
are for styling and those that are have semantic meaning (like with the `Img`
and `A` components which make use of `src` and `href` props).

The `css` prop can be used to provide styles as an object.

```jsx harmony
import glamorous, {withTheme} from 'glamorous'
const { Div, Span } = glamorous

const predefinedStyle = {
  color: '#767676',
  fontSize: 18,
}

const MyUserInterface = withTheme(function ({tagline, theme}) {
  return (
    <Div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.mq.tablet]: {
          flexDirection: 'row'
        }
      }}
     >
      <Span css={predefinedStyle}>
        {tagline}
      </Span>
    </Div>
  )
})
```

One other tip... This totally works:

```jsx
<glamorous.Div color="blue">
  JSX is pretty wild!
</glamorous.Div>
```

#### Overriding component styles

The most common scenario for using props is to override the style of an
existing component (generated by `glamorous` or not). That can be achieved
by using the props `className`, `css` and `theme` or simply component
composition with the `glamorous()` function.

If you're interested in knowing more about using the `theme` prop, see the
[Theming](#theming) section instead for a more detailed explanation. In this
section we'll explain how to use `className`, `css` and composition to override
the styles of a component.

Let's see how that can be done in the examples below.

> Try this out in your browser [here](https://codesandbox.io/s/Kro5369wG)!

We'll use this as our `GlamorousComponent`:

```javascript
const MyStyledDiv = glamorous.div({margin: 1, fontSize: 1, padding: 1})
```

##### using `className`

For each `className` you provide, the `GlamorousComponent` will check to see
whether it is a [`glamor`][glamor] generated `className` (can be from raw glamor
or from `glamorous`, doesn't matter). If it is, it will get the original styles
that were used to generate that `className` and merge those with the styles for
the element that's rendered in a way that the provided `className`'s styles win
in the event of a conflict.

If the `className` is not generated by `glamor`, then it will simply be
forwarded along with the `GlamorousComponent`-generated `className`.

```jsx
const myCustomGlamorStyles = glamor.css({fontSize: 2})
<MyStyledDiv className={`${myCustomGlamorStyles} custom-class`} />
// styles applied:
// {margin: 1, fontSize: 2, padding: 1}
// as well as any styles custom-class applies
```

##### using `css`

This can be the same type as any of the styles provided
(as in `glamorous.div(...styles)`). If specified, it will be merged with this
component's styles and take highest priority over the component's predefined
styles.

```jsx
const myCustomGlamorStyles = glamor.css({fontSize: 2, padding: 2})
<MyStyledDiv
  className={`${myCustomGlamorStyles} custom-class`}
  css={{padding: 3}}
/>
// styles applied:
// { margin: 1px; fontSize: 2px; padding: 3px }
// as well as any styles custom-class applies
```

##### using `glamorous()` composition

If we just want to extend the styles of an existing component it can be done
by using the `glamorous()` function.

```jsx
const MyComposedStyledDiv = glamorous(MyStyledDiv)({fontSize: 4, padding: 4})
<MyComposedStyledDiv />
// styles applied:
// { margin: 1px; fontSize: 4px; padding: 4px; }
```

In fact, the built-in DOM component factories provided are just an abstraction
of this function, so `glamorous.div` could be written as `glamorous('div')` instead.

### glamorous API

The `glamorous` function allows you to create your own
`glamorousComponentFactory` (see [above](#glamorouscomponentfactory)) for any
component you have. For [example](https://codesandbox.io/s/g5kDAyB9):

```jsx
const MyComponent = props => <div {...props} />
const myGlamorousComponentFactory = glamorous(MyComponent)
const MyGlamorousComponent = myGlamorousComponentFactory({/* styles */})

<MyGlamorousComponent id="i-am-forwarded-to-the-div" />
```

You can also provide a few options to help glamorous know how to handle your
component:

#### displayName

The `displayName` of a React component is used by React in the
[React DevTools][react-devtools] and is really handy for debugging React
applications. Glamorous will do its best to give a good `displayName` for your
component, but, for the example above, the best it can do is:
`glamorous(MyComponent)`. If you want to specify a `displayName`, you can do
so with this property. For [example](https://codesandbox.io/s/P3Lyw5j2):

```jsx
const MyComponent = props => <div {...props} />
const myGlamorousComponentFactory = glamorous(
  MyComponent,
  {displayName: 'MyGlamorousComponent'}
)
```

> Note: the `displayName` can also included in the className that your
> components are given which makes the development experience a bit nicer.
> To enable this see the section about `config`.
> This will likely be enabled by default in the next major change.

And now all components created by the `myGlamorousComponentFactory` will have
the `displayName` of `MyGlamorousComponent`.

There is also a [babel plugin][babel-displayname] that can monkey-patch the `displayName` onto
the components that you create from your component factory.


#### rootEl

React has an [Unknown Prop Warning][unknown-prop-warning] that it logs when you
pass spurious props to DOM elements: (i.e. `<div big={true} />`). Because you
can style your components using props, glamorous needs to filter out the props
you pass so it doesn't forward these on to the underlying DOM element. However,
if you create your own factory using a custom component, glamorous will just
forward all the props (because the component may actually need them and
glamorous has no way of knowing). But in some cases, the component may be
spreading all of the props onto the root element that it renders. For these
cases, you can tell glamorous which element is being rendered and glamorous will
apply the same logic for which props to forward that it does for the built-in
factories. For [example](https://codesandbox.io/s/P18oV4kD2):

```jsx
const MyComponent = props => <div {...props} />
const myGlamorousComponentFactory = glamorous(
  MyComponent,
  {rootEl: 'div'}
)

const MyGlamorousComponent = myGlamorousComponentFactory(props => ({
  fontSize: props.big ? 36 : 24,
}))

<MyGlamorousComponent big={true} id="room423" />
// this will render:
// <div id="room423" />
// with {fontSize: 36}
// `big` is not forwarded to MyComponent because the `rootEl` is a `div` and `big`
// is not a valid attribute for a `div` however `id` will be forwarded because
// `id` is a valid prop
```

#### forwardProps

There are some cases where you're making a `glamorousComponentFactory` out of
a custom component that spreads _some_ of the properties across an underlying
DOM element, but not all of them. In this case you should use `rootEl` to
forward only the right props to be spread on the DOM element, but you can also
use `forwardProps` to specify extra props that should be forwarded. For
[example](https://codesandbox.io/s/GZEo8jOyy):

```jsx
const MyComponent = ({shouldRender, ...rest}) => (
  shouldRender ? <div {...rest} /> : null
)
const MyStyledComponent = glamorous(MyComponent, {
  forwardProps: ['shouldRender'],
  rootEl: 'div',
})(props => ({
  fontSize: props.big ? 36 : 24,
}))
<MyStyledComponent shouldRender={true} big={false} id="hello" />
// this will render:
// <div id="hello" />
// with {fontSize: 24}
// `shouldRender` will be forwarded to `MyComponent` because it is included in
// `forwardProps`. `big` will not be forwarded to `MyComponent` because `rootEl`
// is a `div` and that's not a valid prop for a `div`, but it will be used in
// the styles object function that determines the `fontSize`. Finally `id` will
// be forwarded to `MyComponent` because it is a valid prop for a `div`.
```

#### withComponent

In some cases you might want to just copy the styles of an already created
glamorous component with a different tag altogether, `withComponent` function
comes in handy then. For example:

```jsx
const Button = glamorous.button({
  display: 'inline-block',
  color: 'red',
  fontSize: '16px',
  margin: '16px',
  padding: '8px 16px',
  border: '1px solid red',
  borderRadius: '4px',
});

// We're replacing the <button> tag with an <a> tag, but reuse all the same styles
const Link = Button.withComponent('a')

<Button>Normal Button</Button>
<Link>Normal Link</Link>
// this will render:
// <button>Normal Button</button>
// <a>Normal Link</a>
// both with the same styles
```

> Note: to override styles, you can do the same thing you do with a regular
> component (`css` prop, wrap it in `glamorous()`, or regular `className` prop).

### Theming

`glamorous` fully supports theming using a special `<ThemeProvider>` component.

It provides the `theme` to all glamorous components down the tree.

> Try this out in your browser [here](https://codesandbox.io/s/o2yq9MkQk)!

```jsx
import glamorous, {ThemeProvider} from 'glamorous'

// our main theme object
const theme = {
  main: {color: 'red'}
}

// our secondary theme object
const secondaryTheme = {
  main: {color: 'blue'}
}

// a themed <Title> component
const Title = glamorous.h1({
  fontSize: '10px'
}, ({theme}) => ({
  color: theme.main.color
}))

// use <ThemeProvider> to pass theme down the tree
<ThemeProvider theme={theme}>
  <Title>Hello!</Title>
</ThemeProvider>

// it is possible to nest themes
// inner themes will be merged with outers
<ThemeProvider theme={theme}>
  <div>
    <Title>Hello!</Title>
    <ThemeProvider theme={secondaryTheme}>
      {/* this will be blue */}
      <Title>Hello from here!</Title>
    </ThemeProvider>
  </div>
</ThemeProvider>

// to override a theme, just pass a theme prop to a glamorous component
// the component will ignore any surrounding theme, applying the one passed directly via props
<ThemeProvider theme={theme}>
  {/* this will be yellow */}
  <Title theme={{main: {color: 'yellow'}}}>Hello!</Title>
</ThemeProvider>
```

`glamorous` also exports a `withTheme` higher order component (HOC) so you can access your theme in any component!
> Try this out in your browser [here](https://codesandbox.io/s/qYmJjE4jy)!

```jsx
import glamorous, {ThemeProvider,  withTheme} from 'glamorous'

// our main theme object
const theme = {
  main: {color: 'red'}
}

// a themed <Title> component
const Title = glamorous.h1({
  fontSize: '10px'
}, ({theme}) => ({
  color: theme.main.color
}))

// normal component that takes a theme prop
const SubTitle = ({children, theme: {color}}) => (
  <h3 style={{color}}>{children}</h3>
)

// extended component with theme prop
const ThemedSubTitle = withTheme(SubTitle)

<ThemeProvider theme={theme}>
  <Title>Hello!</Title>
  <ThemedSubTitle>from withTheme!</ThemedSubTitle>
</ThemeProvider>
```

Or if you prefer decorator syntax:

```jsx
import React, {Component} from 'react'
import glamorous, {ThemeProvider,  withTheme} from 'glamorous'

// our main theme object
const theme = {
  main: {color: 'red'}
}

// a themed <Title> component
const Title = glamorous.h1({
  fontSize: '10px'
}, ({theme}) => ({
  color: theme.main.color
}))

// extended component with theme prop
@withTheme
class SubTitle extends Component {
  render() {
    const {children, theme: {main: {color}}} = this.props
    return <h3 style={{color}}>{children}</h3>
  }
}

<ThemeProvider theme={theme}>
  <Title>Hello!</Title>
  <SubTitle>from withTheme!</SubTitle>
</ThemeProvider>
```
> `withTheme` expects a `ThemeProvider` further up the render tree and will warn in `development` if one is not found!

### Config

You can configure glamorous globally with the `config` object which you can
access via `glamorous.config`.

#### useDisplayNameInClassName

Defaults to `false` (will default to `true` in a future major release).
This should _only_ be used for debugging purposes. It is strongly discouraged
from referencing this className in your CSS due to the level of indirection that
will add (making it easier for you to break something when refactoring in the
future).

Example:

```jsx
import glamorous from 'glamorous'
glamorous.config.useDisplayNameInClassName = true

const MyComponent = props => <div {...props} />
const myGlamorousComponentFactory = glamorous(
  MyComponent,
  {displayName: 'MyGlamorousComponent'}
)

const MyGlamorousComponent = myGlamorousComponentFactory()
<MyGlamorousComponent />
// renders <div class="css-nil MyGlamorousComponent" />
```

If you don't want to provide the `displayName` for all of your components, then
you can use [this babel-plugin][babel-displayname]. Otherwise, the className
will be simply: `glamorous(MyComponent)`

### Context

[context](https://facebook.github.io/react/docs/context.html) is an unstable
API and it's not recommended to use it directly. However, if you need to use it
for some reason, here's an example of how you could do that:

```jsx
// NOTE!! In the next major version of glamorous, the API will be: (props, context)
// this is because it maps more directly to the React function component API
// and the `theme` is already available on the `props`
const dynamicStyles = (props, theme, context) => ({
  color: context.isLoggedIn ? 'green' : 'red'
})
const MyDiv = glamorous.div(dynamicStyles)
MyDiv.contextTypes = {
  isLoggedIn: PropTypes.string,
}

class Parent extends React.Component {
  getChildContext() {
    return {
      isLoggedIn: true,
    }
  }
  render() {
    return <MyDiv />
  }
}

Parent.childContextTypes = {
  isLoggedIn: PropTypes.string,
}

<Parent />
// renders <div />
// with {color: 'green'}
```

### Size

If your use case is really size constrained, then you might consider using the "tiny" version of glamorous for your application.
It's is a miniature version of `glamorous` with a few limitations:

1. No built-in component factories (`glamorous.article({/* styles */})`)
   So you have to create your own (`glamorous('article')({/* styles */})`)
2. No built-in glamorous components (`glamorous.Span`)
3. No props filtering for dynamic styles, instead, you place them on a special
   `glam` prop (see the example below).
4. If you need `ThemeProvider` or `withTheme`, you must import those manually.
   They are not exported as part of `glamorous/tiny` like they are with `glamorous`.

Here's an example of what you're able to do with it.

```jsx
import React from 'react'
import glamorous from 'glamorous/dist/glamorous.es.tiny'

const Comp = glamorous('div')({
  color: 'red'
}, (props) => ({
  fontSize: props.glam.big ? 20 : 12
}))
function Root() {
  return (
    <Comp
      glam={{big: true}}
      thisWillBeForwardedAndReactWillWarn
    >
      ciao
    </Comp>
  )
}

export default Root
```

It's recommended to use either [`babel-plugin-module-resolver`][babel-plugin-module-resolver]
or the [`resolve.alias`][resolve-alias] config with webpack so you don't have
to import from that full path. You have the following options available for this
import:

1. `glamorous/dist/glamorous.es.tiny.js` - use if you're using Webpack@>=2 or Rollup
2. `glamorous/dist/glamorous.cjs.tiny` - use if you're not transpiling ESModules
3. `glamorous/dist/glamorous.umd.tiny.js` - use if you're including it as a script tag. (There's also a `.min.js` version).

The current size of `glamorous/dist/glamorous.umd.tiny.min.js` is: [![tiny size][tiny-size-badge]][unpkg-dist]
[![tiny gzip size][tiny-gzip-badge]][unpkg-dist]

> IMPORTANT NOTE ABOUT SIZE: Because `glamorous` depends on `glamor`, you should consider the full size you'll be adding
> to your application if you don't already have `glamor`.
> The current size of `glamor/umd/index.min.js` is: [![glamor size][glamor-size-badge]][unpkg-glamor]
> [![glamor gzip size][glamor-gzip-badge]][unpkg-glamor]


### Server Side Rendering (SSR)

Because both `glamor` and `react` support SSR, `glamorous` does too! I actually
do this on [my personal site](https://github.com/kentcdodds/kentcdodds.com)
which is generated at build-time on the server. Learn about rendering
[`react` on the server][react-ssr] and [`glamor` too][glamor-ssr].

### Example Style Objects

Style objects can affect pseudo-classes and pseudo-elements, complex CSS
selectors, introduce keyframe animations, and use media queries:

<details>
<summary>pseudo-class</summary>

```javascript
const MyLink = glamorous.a({
  ':hover': {
    color: 'red'
  }
})

// Use in a render function
<MyLink href="https://github.com">GitHub</MyLink>
```
</details>

<details>
<summary>pseudo-element</summary>

```jsx
const MyListItem = glamorous.li({
  listStyleType: 'none',
  position: 'relative',
  '&::before': {
    content: `'#'`, // be sure the quotes are included in the passed string
    display: 'block',
    position: 'absolute',
    left: '-20px',
    width: '20px',
    height: '20px'
  }
})
// Use in a render function
<ul>
  <MyListItem>Item 1</MyListItem>
  <MyListItem>Item 2</MyListItem>
  <MyListItem>Item 3</MyListItem>
</ul>
```
</details>

<details>
<summary>Relational CSS Selectors</summary>

```jsx
const MyDiv = glamorous.div({
  display: 'block',
  '& div': { color: 'red' }, // child selector
  '& div:first-of-type': { textDecoration: 'underline' }, // psuedo-selector
  '& > p': { color: 'blue' } // direct descendent
})

// Use in a render function
<MyDiv>
  <div><p>Red Underlined Paragraph</p></div>
  <div>Red Paragraph</div>
  <p>Blue Paragraph</p>
</MyDiv>
```
</details>

<details>
<summary>Animations</summary>

> Try this in [your browser](https://codesandbox.io/s/31VMyP7XO)

```jsx
// import css from glamor
import { css } from 'glamor'

// Define the animation styles
const animationStyles = props => {
  const bounce = css.keyframes({
    '0%': { transform: `scale(1.01)` },
    '100%': { transform: `scale(0.99)` }
  })
  return {animation: `${bounce} 0.2s infinite ease-in-out alternate`}
}

// Define the element
const AnimatedDiv = glamorous.div(animationStyles)

// Use in a render function
<AnimatedDiv>
  Bounce.
</AnimatedDiv>
```
</details>

<details>
<summary>Media Queries</summary>

```jsx
const MyResponsiveDiv = glamorous.div({
  width: '100%',
  padding: 20,
  '@media(min-width: 400px)': {
    width: '85%',
    padding: 0
  }
})
// Use in a render function
<MyResponsiveDiv>
  Responsive Content
</MyResponsiveDiv>
```
</details>

## Related projects

- [babel-plugin-glamorous-displayname][babel-displayname]: Automatically adds a `displayName` to your glamorous components for a better debugging experience.

## Users

Who uses `glamorous`? See [other/USERS.md](https://github.com/paypal/glamorous/blob/master/other/USERS.md) and add yourself if you use `glamorous`!

## Inspiration

This package was inspired by the work from people's work on the following
projects:

- [styled-components](https://github.com/styled-components/styled-components)
- [jsxstyle](https://github.com/smyte/jsxstyle)

The biggest inspiration for building this is because I love the API offered by
`styled-components`, but I wanted:

1. Not to ship a CSS parser to the browser (because it's huge and less
  performant).
2. Support for RTL (via something like [rtl-css-js][rtl-css-js])
3. Support for using _real_ JavaScript objects rather than a CSS string (better
  tooling support, ESLint, etc.)

> You can get around the parser issue if you use a certain babel plugin, but
> then you can't do any dynamic construction of your CSS string (like
> [this][styled-components-util]) which is a bummer for custom utilities.

## Other Solutions

There are actually quite a few solutions to the general problem of styling in
React. This isn't the place for a full-on comparison of features, but I'm
unaware of any which supports _all_ of the features which this library supports.

## Support

If you need help, please fork [this CodeSandbox][help-sandbox] and bring it up in
[the chat][chat]

## Got Questions?

Check out the [FAQ](docs/FAQ.md).

## Swag 👕

A community member created this awesome t-shirt, and they're now available on
Amazon! For every shirt purchased, GSM Studio will donate $1 to
[Girls Who Code][gwc] to support the next generation of programmers. The shirts
come in various colors and sizes. In addition you can check out other clever
t-shirts by [GSM Studio](http://amzn.to/2rxvB1T).

<a href="https://www.amazon.com/dp/B0714JQW67" title="glamorous swag">
  <img src="https://images-na.ssl-images-amazon.com/images/I/71DiEnq5YgL._UX679_.jpg" alt="Glamorous Logo T-Shirt" title="Glamorous Logo T-Shirt" width="200" />
</a>

<a href="https://www.amazon.com/dp/B072LV68S2" title="glamorous swag">
  <img src="https://images-na.ssl-images-amazon.com/images/I/71EL4mHhCtL._UX679_.jpg" alt="Glamorous T-Shirt" title="Glamorous T-Shirt" width="200" />
</a>

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub>Kent C. Dodds</sub>](https://kentcdodds.com)<br />[💻](https://github.com/paypal/glamorous/commits?author=kentcdodds "Code") [📖](https://github.com/paypal/glamorous/commits?author=kentcdodds "Documentation") [🚇](#infra-kentcdodds "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/paypal/glamorous/commits?author=kentcdodds "Tests") [👀](#review-kentcdodds "Reviewed Pull Requests") | [<img src="https://avatars0.githubusercontent.com/u/587016?v=3" width="100px;"/><br /><sub>Ives van Hoorne</sub>](http://ivesvh.com)<br />[💡](#example-CompuIves "Examples") | [<img src="https://avatars3.githubusercontent.com/u/4614574?v=3" width="100px;"/><br /><sub>Gerardo Nardelli</sub>](https://gnardelli.com)<br />[📖](https://github.com/paypal/glamorous/commits?author=patitonar "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/14236753?v=3" width="100px;"/><br /><sub>Chandan Rai</sub>](https://github.com/crowchirp)<br />[📖](https://github.com/paypal/glamorous/commits?author=crowchirp "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/16726210?v=3" width="100px;"/><br /><sub>BinHong Lee</sub>](https://binhonglee.github.io)<br />[📖](https://github.com/paypal/glamorous/commits?author=binhonglee "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/737065?v=3" width="100px;"/><br /><sub>Paul Molluzzo</sub>](https://paul.molluzzo.com)<br />[📖](https://github.com/paypal/glamorous/commits?author=paulmolluzzo "Documentation") [💡](#example-paulmolluzzo "Examples") | [<img src="https://avatars0.githubusercontent.com/u/450559?v=3" width="100px;"/><br /><sub>Sriram Thiagarajan</sub>](http://tsriram.in)<br />[💻](https://github.com/paypal/glamorous/commits?author=tsriram "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/417268?v=3" width="100px;"/><br /><sub>Pavithra Kodmad</sub>](https://github.com/pksjce)<br />[💡](#example-pksjce "Examples") | [<img src="https://avatars0.githubusercontent.com/u/82070?v=3" width="100px;"/><br /><sub>Alessandro Arnodo</sub>](http://alessandro.arnodo.net)<br />[💻](https://github.com/paypal/glamorous/commits?author=vesparny "Code") [📖](https://github.com/paypal/glamorous/commits?author=vesparny "Documentation") [⚠️](https://github.com/paypal/glamorous/commits?author=vesparny "Tests") | [<img src="https://avatars1.githubusercontent.com/u/105127?v=3" width="100px;"/><br /><sub>Jason Miller</sub>](https://jasonformat.com)<br />[👀](#review-developit "Reviewed Pull Requests") | [<img src="https://avatars0.githubusercontent.com/u/1295580?v=3" width="100px;"/><br /><sub>Kyle Welch</sub>](http://www.krwelch.com)<br />[👀](#review-kwelch "Reviewed Pull Requests") [💡](#example-kwelch "Examples") | [<img src="https://avatars0.githubusercontent.com/u/1634922?v=3" width="100px;"/><br /><sub>Javi Velasco</sub>](http://javivelasco.com)<br />[👀](#review-javivelasco "Reviewed Pull Requests") | [<img src="https://avatars1.githubusercontent.com/u/6886061?v=3" width="100px;"/><br /><sub>Brandon Dail</sub>](https://twitter.com/aweary)<br />[👀](#review-aweary "Reviewed Pull Requests") | [<img src="https://avatars2.githubusercontent.com/u/1714673?v=3" width="100px;"/><br /><sub>Jason Brown</sub>](http://browniefed.com)<br />[👀](#review-browniefed "Reviewed Pull Requests") |
| [<img src="https://avatars3.githubusercontent.com/u/25375401?v=3" width="100px;"/><br /><sub>jackyho112</sub>](https://github.com/jackyho112)<br />[💻](https://github.com/paypal/glamorous/commits?author=jackyho112 "Code") [⚠️](https://github.com/paypal/glamorous/commits?author=jackyho112 "Tests") | [<img src="https://avatars0.githubusercontent.com/u/3629876?v=3" width="100px;"/><br /><sub>Kurtis Kemple</sub>](https://twitter.com/kurtiskemple)<br />[💻](https://github.com/paypal/glamorous/commits?author=kkemple "Code") [⚠️](https://github.com/paypal/glamorous/commits?author=kkemple "Tests") [📖](https://github.com/paypal/glamorous/commits?author=kkemple "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/38172?v=3" width="100px;"/><br /><sub>Bernardo Raposo</sub>](http://bernardoraposo.com)<br />[📖](https://github.com/paypal/glamorous/commits?author=braposo "Documentation") [💡](#example-braposo "Examples") | [<img src="https://avatars2.githubusercontent.com/u/6325382?v=3" width="100px;"/><br /><sub>Ryan Delaney</sub>](http://rdel.io)<br />[💻](https://github.com/paypal/glamorous/commits?author=rrdelaney "Code") | [<img src="https://avatars2.githubusercontent.com/u/14035529?v=3" width="100px;"/><br /><sub>Anthony Ng</sub>](http://anthonyng.me)<br />[📖](https://github.com/paypal/glamorous/commits?author=newyork-anthonyng "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/37633?v=3" width="100px;"/><br /><sub>Matthew Crutchfield</sub>](http://cnn.com)<br />[💡](#example-mtcrutch "Examples") | [<img src="https://avatars1.githubusercontent.com/u/662750?v=3" width="100px;"/><br /><sub>Kye Hohenberger</sub>](https://github.com/tkh44)<br />[💻](https://github.com/paypal/glamorous/commits?author=tkh44 "Code") [⚠️](https://github.com/paypal/glamorous/commits?author=tkh44 "Tests") [📖](https://github.com/paypal/glamorous/commits?author=tkh44 "Documentation") |
| [<img src="https://avatars3.githubusercontent.com/u/16327281?v=3" width="100px;"/><br /><sub>Bernard Lin</sub>](https://github.com/bernard-lin)<br />[📖](https://github.com/paypal/glamorous/commits?author=bernard-lin "Documentation") [🔌](#plugin-bernard-lin "Plugin/utility libraries") | [<img src="https://avatars2.githubusercontent.com/u/11799597?v=3" width="100px;"/><br /><sub>Miguel Correa</sub>](http://miguelc1221.github.io/)<br />[💻](https://github.com/paypal/glamorous/commits?author=miguelc1221 "Code") | [<img src="https://avatars2.githubusercontent.com/u/769339?v=3" width="100px;"/><br /><sub>Brian Hough</sub>](http://rallypoint.gg)<br />[💡](#example-bhough "Examples") | [<img src="https://avatars3.githubusercontent.com/u/4950425?v=3" width="100px;"/><br /><sub>Erik Cupal</sub>](https://github.com/ErikCupal)<br />[💻](https://github.com/paypal/glamorous/commits?author=ErikCupal "Code") | [<img src="https://avatars1.githubusercontent.com/u/9153498?v=3" width="100px;"/><br /><sub>Kok J Sam</sub>](https://github.com/sammkj)<br />[💻](https://github.com/paypal/glamorous/commits?author=sammkj "Code") | [<img src="https://avatars2.githubusercontent.com/u/14885189?v=3" width="100px;"/><br /><sub>Oleg Proskurin</sub>](http://twitter.com/#!/usulpro)<br />[📖](https://github.com/paypal/glamorous/commits?author=UsulPro "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/848525?v=3" width="100px;"/><br /><sub>Luke John</sub>](https://github.com/luke-john)<br />[💻](https://github.com/paypal/glamorous/commits?author=luke-john "Code") |
| [<img src="https://avatars2.githubusercontent.com/u/4118089?v=3" width="100px;"/><br /><sub>FredericH</sub>](http://fr.linkedin.com/in/fredericheem)<br />[💡](#example-FredericHeem "Examples") | [<img src="https://avatars3.githubusercontent.com/u/656630?v=3" width="100px;"/><br /><sub>Atticus White</sub>](https://atticuswhite.com)<br />[📖](https://github.com/paypal/glamorous/commits?author=ajwhite "Documentation") [🔌](#plugin-ajwhite "Plugin/utility libraries") | [<img src="https://avatars0.githubusercontent.com/u/13483453?v=3" width="100px;"/><br /><sub>marzelin</sub>](https://github.com/marzelin)<br />[💻](https://github.com/paypal/glamorous/commits?author=marzelin "Code") | [<img src="https://avatars2.githubusercontent.com/u/4074973?v=3" width="100px;"/><br /><sub>iwantmyname</sub>](https://iwantmyname.com/)<br />[🚇](#infra-iwantmyname "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars1.githubusercontent.com/u/11809142?v=3" width="100px;"/><br /><sub>Ethan Godt</sub>](http://ethangodt.com)<br /> | [<img src="https://avatars3.githubusercontent.com/u/2175447?v=3" width="100px;"/><br /><sub>Zill Ding</sub>](https://github.com/zillding)<br />[💻](https://github.com/paypal/glamorous/commits?author=zillding "Code") | [<img src="https://avatars3.githubusercontent.com/u/411643?v=3" width="100px;"/><br /><sub>Dan Bradley</sub>](https://github.com/debradley)<br />[💻](https://github.com/paypal/glamorous/commits?author=debradley "Code") |
| [<img src="https://avatars3.githubusercontent.com/u/22868432?v=3" width="100px;"/><br /><sub>Lufty Wiranda</sub>](http://instagram.com/luftywiranda13)<br />[💻](https://github.com/paypal/glamorous/commits?author=luftywiranda13 "Code") | [<img src="https://avatars3.githubusercontent.com/u/3208863?v=3" width="100px;"/><br /><sub>Ansuman Shah</sub>](https://github.com/ansumanshah)<br />[💻](https://github.com/paypal/glamorous/commits?author=ansumanshah "Code") [📖](https://github.com/paypal/glamorous/commits?author=ansumanshah "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/11598?v=3" width="100px;"/><br /><sub>Travis LaDuke</sub>](http://-)<br />[💡](#example-laduke "Examples") | [<img src="https://avatars2.githubusercontent.com/u/11290953?v=3" width="100px;"/><br /><sub>Aydın Çağrı Dumlu</sub>](https://github.com/acgrdumlu)<br />[🐛](https://github.com/paypal/glamorous/issues?q=author%3Aacgrdumlu "Bug reports") [💻](https://github.com/paypal/glamorous/commits?author=acgrdumlu "Code") | [<img src="https://avatars2.githubusercontent.com/u/1383861?v=3" width="100px;"/><br /><sub>Maja Wichrowska</sub>](https://github.com/majapw)<br />[🐛](https://github.com/paypal/glamorous/issues?q=author%3Amajapw "Bug reports") | [<img src="https://avatars3.githubusercontent.com/u/6845263?v=3" width="100px;"/><br /><sub>Tom Liu</sub>](https://github.com/gt3240)<br />[📖](https://github.com/paypal/glamorous/commits?author=gt3240 "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/1863771?v=3" width="100px;"/><br /><sub>Siddharth Kshetrapal</sub>](https://github.com/siddharthkp)<br />[⚠️](https://github.com/paypal/glamorous/commits?author=siddharthkp "Tests") [🔧](#tool-siddharthkp "Tools") |
| [<img src="https://avatars2.githubusercontent.com/u/5257243?v=3" width="100px;"/><br /><sub>WillowHQ</sub>](https://github.com/WillowHQ)<br />[📖](https://github.com/paypal/glamorous/commits?author=WillowHQ "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/12202757?v=4" width="100px;"/><br /><sub>Mohammad Rajabifard</sub>](https://tarino.ir)<br />[🐛](https://github.com/paypal/glamorous/issues?q=author%3Amorajabi "Bug reports") [📖](https://github.com/paypal/glamorous/commits?author=morajabi "Documentation") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/paypal/glamorous.svg?style=flat-square
[build]: https://travis-ci.org/paypal/glamorous
[coverage-badge]: https://img.shields.io/codecov/c/github/paypal/glamorous.svg?style=flat-square
[coverage]: https://codecov.io/github/paypal/glamorous
[version-badge]: https://img.shields.io/npm/v/glamorous.svg?style=flat-square
[package]: https://www.npmjs.com/package/glamorous
[downloads-badge]: https://img.shields.io/npm/dm/glamorous.svg?style=flat-square
[npm-stat]: http://npm-stat.com/charts.html?package=glamorous&from=2017-04-01
[license-badge]: https://img.shields.io/npm/l/glamorous.svg?style=flat-square
[license]: https://github.com/paypal/glamorous/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[chat]: https://gitter.im/paypal/glamorous
[chat-badge]: https://img.shields.io/gitter/room/paypal/glamorous.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/paypal/glamorous/blob/master/other/CODE_OF_CONDUCT.md
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square
[roadmap]: https://github.com/paypal/glamorous/blob/master/other/ROADMAP.md
[examples-badge]: https://img.shields.io/badge/%F0%9F%92%A1-examples-8C8E93.svg?style=flat-square
[examples]: https://github.com/paypal/glamorous/blob/master/examples
[github-watch-badge]: https://img.shields.io/github/watchers/paypal/glamorous.svg?style=social
[github-watch]: https://github.com/paypal/glamorous/watchers
[github-star-badge]: https://img.shields.io/github/stars/paypal/glamorous.svg?style=social
[github-star]: https://github.com/paypal/glamorous/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20glamorous!%20https://github.com/paypal/glamorous%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/paypal/glamorous.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[glamor]: https://github.com/threepointone/glamor
[rtl-css-js]: https://github.com/kentcdodds/rtl-css-js
[gzip-badge]: http://img.badgesize.io/https://unpkg.com/glamorous/dist/glamorous.umd.min.js?compression=gzip&label=gzip%20size&style=flat-square
[size-badge]: http://img.badgesize.io/https://unpkg.com/glamorous/dist/glamorous.umd.min.js?label=size&style=flat-square
[tiny-gzip-badge]: http://img.badgesize.io/https://unpkg.com/glamorous/dist/glamorous.umd.tiny.min.js?compression=gzip&label=gzip%20size&style=flat-square
[tiny-size-badge]: http://img.badgesize.io/https://unpkg.com/glamorous/dist/glamorous.umd.tiny.min.js?label=size&style=flat-square
[unpkg-dist]: https://unpkg.com/glamorous/dist/
[glamor-gzip-badge]: http://img.badgesize.io/https://unpkg.com/glamor/umd/index.min.js?compression=gzip&label=gzip%20size&style=flat-square
[glamor-size-badge]: http://img.badgesize.io/https://unpkg.com/glamor/umd/index.min.js?label=size&style=flat-square
[unpkg-glamor]: https://unpkg.com/glamor/umd/
[module-formats-badge]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20es-green.svg?style=flat-square
[mainFields]: https://webpack.js.org/configuration/resolve/#resolve-mainfields
[umd]: https://github.com/umdjs/umd
[styled-components-util]: https://codepen.io/kentcdodds/pen/MpxMge
[intro-blogpost]: https://medium.com/p/fb3c9f4ed20e
[react-ssr]: https://facebook.github.io/react/docs/react-dom-server.html
[glamor-ssr]: https://github.com/threepointone/glamor/blob/5e7d988211330b8e2fca5bb8da78e35051444efd/docs/server.md
[help-sandbox]: http://kcd.im/glamorous-help
[react-devtools]: https://github.com/facebook/react-devtools
[babel-plugin]: https://github.com/paypal/glamorous/issues/29
[unknown-prop-warning]: https://facebook.github.io/react/warnings/unknown-prop.html
[babel-plugin-module-resolver]: https://github.com/tleunen/babel-plugin-module-resolver
[resolve-alias]: https://webpack.js.org/configuration/resolve/#resolve-alias
[glamorous-native]: https://github.com/robinpowered/glamorous-native
[typescript-usage]: https://github.com/paypal/glamorous/blob/master/other/TYPESCRIPT_USAGE.md
[gwc]: https://girlswhocode.com/
[babel-displayname]: https://www.npmjs.com/package/babel-plugin-glamorous-displayname
