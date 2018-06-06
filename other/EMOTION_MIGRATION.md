# Migrating

This is for those migrating to [emotion](https://emotion.sh) from glamorous.

## Installing

```
yarn add emotion

# React
yarn add react-emotion

# Preact
yarn add preact-emotion

# if you want to use the babel plugin (it's recommended but not required)
yarn add babel-plugin-emotion

# if you use ThemeProvider
yarn add emotion-theming
```
### Babel
babel-plugin-emotion is optional but recommended because it enables the element shorthand(`styled.div` instead of `styled('div')`), the css prop, performance optimizations and developer experience improvements like labels.

If you want to use babel-plugin-emotion, you will need to make some adjustments to your `.babelrc`, the recommended config is shown below.
```json
{
  "env": {
    "production": {
      "plugins": [["emotion", { "hoist": true }]]
    },
    "development": {
      "plugins": [
        ["emotion", { "sourceMap": true, "autoLabel": true }]
      ]
    }
  }
}
```

If you need more details see [Install Emotion](https://emotion.sh/docs/install)

## Imports

If you are in react `import glamorous from 'glamorous'` becomes `import styled from 'react-emotion'`

If you use `<ThemeProvider>`, `import { ThemeProvider } from "glamorous"` becomes `import { ThemeProvider } from "emotion-theming"` which is a seperate package [emotion-theming](https://github.com/emotion-js/emotion/tree/master/packages/emotion-theming)

If you're using css.keyframes(glamor) you can adjust them to use `import { keyframes } from "react-emotion"`

### Object Syntax

If you are using babel-plugin-emotion, you only need to replace `glamorous` with `styled` like this

```jsx
export const StyledElement = glamorous.div({ ...styles })
// ↓ ↓ ↓ ↓ ↓ ↓
export const StyledElement = styled.div({ ...styles })
```

If you aren't using babel-plugin-emotion, you need to use the function call syntax instead like this

```jsx
const SomeComponent = glamorous.div({ ...styles })
// ↓ ↓ ↓ ↓ ↓ ↓
const SomeComponent = styled('div')({ ...styles })
```


Find and replace `glamorous.` ftw.

babel-plugin-emotion is required for the css prop. If you use the css prop and use babel-plugin-emotion (e.g. `css={{ backgroundColor: "purple" }}`) you should be good.. but you will need to replace any glamorous objects like `import { Div, Span, Img } from 'glamorous'` with good ol' divs and elements. Also `<glamorous.Div>` needs to become `<div>` etc.

### The `content` CSS property

One thing to watch out for is that Emotion doesn't add quotes to values of the `content` css property so you have to add quotes around them yourself.
```jsx
const SomeComponent = glamorous.div({ content: '' })
// ↓ ↓ ↓ ↓ ↓ ↓
const SomeComponent = styled.div({ content: '""' })
```
Emotion logs warnings to the console in development when you forget to add quotes so if you have no warnings, you're fine!


### `withProps`

The emotion library doesn't support `withProps` directly itself, but you can use [`withProps` from `recompose`](https://github.com/emotion-js/emotion/blob/master/docs/with-props.md) instead. For basic usages of `withProps`, you can also use [React's `defaultProps`](https://reactjs.org/docs/react-component.html#defaultprops) like this.
```jsx
import styled from 'react-emotion'

const SomeComponent = styled.div({ ...styles })

SomeComponent.defaultProps = {
  someProp: 'a default value'
}

```

### Simulation of Pseudo Selectors

Emotion doesn't support simulation of pseudo selectors. Glamor creates additional styles for `[data-simulate-*]` selectors in dev mode. Remove any `[data-simulate-*]` selectors that you still have in your styles and any calls to `glamor.simulate`.

### Prop Filtering

Emotion's prop filtering only looks at attributes that are valid for all DOM elements, whereas Glamorous uses the tag to determine which attributes are valid. 

## Possible Gotchas

This list is not comprehensive please feel free to make adjustments or additions.

## Thanks!

Glamorous is great, emotion is great.. Happy migrating!
