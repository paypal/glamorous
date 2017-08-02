# Typescript Usage

The current bundled typescript definitions are incomplete and based around the needs of the developers who contributed them.

Pull requests to improve them are welcome and appreciated. If you've never contributed to open source before, then you may find [this free video course](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) helpful.

## Complete support

### glamorousComponentFactory

The typings for
* creating your own glamorous component factories
* using built-in glamorous component factories
are complete.
* using `shouldClassNameUpdate`

```tsx
// Creating your own
glamorous(Component)(/* styleArgument */)
glamorous('div')(/* styleArgument */)

// Using built-in
glamorous.div<Props>(/* styleArgument */)

// Using shouldClassNameUpdate
glamorous(Component, {
  shouldClassNameUpdate: (props, prevProps, context, prevContext) => props !== prevProps
})(/* styleArgument */)

// Using shouldClassNameUpdate with Context
glamorous<Props, Context>(Component, {
  shouldClassNameUpdate: (props, prevProps, context, prevContext) => context !== prevContext
})(/* styleArgument */)

// Using withProps
glamorous(Component, {
  withProps: {primaryColor: 'red'}
})((props) => ({/* props = { primaryColor: string } */})

const WithPropsComponent = glamorous(Component)(/* styleArgument */).withProps(withProps: {primaryColor: 'red'})
...
<WithPropsComponent primaryColor='' /> // primaryColor is an optional prop of string type based on the above
```

#### glamorousComponentFactory arguments

By providing the typings for Props and Theme to Glamorous when setting up your component factory they will be typed on the props argument for function arguments automatically.

```tsx
interface Props {
  noPadding?: boolean,
  theme: { color: string }
}

const MyStyledDiv = glamorous.div<Props>(
  {
    margin: 1,
  },
  ({noPadding, theme}) => ({
    padding: noPadding ? 0 : 4,
    color: theme.color,
  })
)

<MyStyledDiv /> // styles applied: {margin: 1, padding: 4}
<ThemeProvider theme={{color: 'red'}}>
  <MyStyledDiv noPadding /> // styles applied: {margin: 1, padding: 0, color: red}
</ThemeProvider>
```

## Incomplete support

### CSS property safety

* pseudo-class
* pseudo-element
* Relational CSS Selectors
* Media Queries

All of these work, however you only get typesafety and intellisense on simple css key props (see the [css typings](https://github.com/paypal/glamorous/blob/master/typings/css-properties.d.ts)).

In the future this may become possible with [Microsoft/TypeScript#6579](https://github.com/Microsoft/TypeScript/issues/6579)

Alternatively support for full typesafety would be possible using patterns along the lines of http://typestyle.io/.

### Built-in Glamorous Components

Currently support is limited to `Div` and `Svg`.

## Unknown Support

### Animations

Possible support via [glamors typings](https://github.com/threepointone/glamor/blob/master/index.d.ts)

## Known Issues

### Generating Definition files

When using glamorous in a library that you are generating definition files for you will need to include the following import and export to get around a typescript issue [Microsoft/TypeScript/issues/5938](https://github.com/Microsoft/TypeScript/issues/5938).

```tsx
import glamorous, { ExtraGlamorousProps, WithComponent  } from "glamorous"
export { ExtraGlamorousProps, WithComponent }
```
