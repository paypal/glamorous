# Typescript Usage

The current bundled typescript definitions are incomplete and based around the needs of the developers who contributed them.

Pull requests to improve them are welcome and appreciated. If you've never contributed to open source before, then you may find [this free video course](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) helpful.

## Complete support

### Dynamic styles

To use dynamic styles with custom props use generics. Example:

```ts
const MyStyledDiv = glamorous.div<{noPadding?: boolean}>(
  {
    margin: 1,
  },
  props => ({
    padding: props.noPadding ? 0 : 4,
  })
)

<MyStyledDiv /> // styles applied: {margin: 1, padding: 4}
<MyStyledDiv noPadding /> // styles applied: {margin: 1, padding: 0}
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

### Built-in DOM component factories

Currently support is limited to `div` and `svg`.

## Unknown Support

### Animations

Possible support via [glamors typings](https://github.com/threepointone/glamor/blob/master/index.d.ts)

## No Support

* built-in GlamorousComponents

## Known Issues

### Generating Definition files

When using glamorous in a library that you are generating definition files for you will need to include the following import and export to get around a typescript issue [Microsoft/TypeScript/issues/5938](https://github.com/Microsoft/TypeScript/issues/5938).

```ts
import glamorous, { ExtraGlamorousProps as Unused } from "glamorous"
export { Unused }
```
