# Examples

### [Simple Example](https://github.com/MicheleBertoli/css-in-js/blob/master/glamorous/button.js)
This example includes both the object literal styles and prop based styles.
Additionally, shows how to to psuedo selectors and a media query.

## Dynamic + Static Styles

One of the nice bits of glamorous is that it allows you to make a clear
separation between your dynamic and static styles by forcing you to choose
between an object literal and a function. Here's an example of having both
dynamic and static styles:

```javascript
const MyLink = glamorous.a(
  {
    color: 'blue',
    textDecoration: 'none',
  },
  ({size = 'small'}) => ({
    fontSize: size === 'big' ? 24 : 16,
  })
)
```

You can see a live preview of this example here: https://codesandbox.io/s/mZkpo0lKA

## @supports + CSS Grid

Want to use CSS Grid, but worried about browser support? Because `glamor`
supports the `@supports` statement, you can use that with `glamorous` easily.

Play with it [here](https://codesandbox.io/s/2k8yll8qj):

```javascript
const MyGrid = glamorous.div({
  margin: 'auto',
  backgroundColor: '#fff',
  color: '#444',
  // You can use @supports with glamor!
  // So you can use @supports with glamorous as well!
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 10,
    gridTemplateAreas: `
      "....... header header"
      "sidebar content content"
      "footer  footer  footer"
    `,
  },
})
```

## Ampersands & CSS Combinators

You can use an ampersand (`&`) as a reference to the generated selector. This approach can be useful for CSS combinators: adjacent sibling selectors (`+`), general sibling selectors (`~`) and child selectors (`>`).

Play with it [here](https://codesandbox.io/s/W7j7BAQ9x):

```javascript
const Item = glamorous.div({
  'background-color': 'red',
  '& + &': {
    'margin-top': '10px',
    'background-color': 'orange'
  },
  '&:first-of-type + &': {
    'background-color': 'yellow'
  },
  '& ~ &': {
    'background-color': 'green'
  },
  '& > &': {
    'background-color': 'blue'
  }
})
```

## with Next.js

Here's a [deployed example](https://with-glamorous-zrqwerosse.now.sh/) of using
`glamorous` with `Next.js`. See the code [here][next].

[next]: https://github.com/zeit/next.js/tree/master/examples/with-glamorous

## with create-react-app

[Here](https://github.com/patitonar/create-react-app-glamorous) is an example  of using
`glamorous` with `create-react-app`.

## with ✨ polished

`glamorous` works with `✨ polished` mixins, helpers, and shorthands:

```jsx
const MyStyledParagraph = glamorous.p({
  fontSize: 20,
  color: lighten(0.5, '#000'),
})
```

You can also use [object spread properties](https://github.com/tc39/proposal-object-rest-spread) to apply more complex `✨ polished` mixins directly onto `glamorous` components:

```jsx
function GlamorousLogo() {
  return (
    <glamorous.Div
      width={400}
      height={400}
      border="2px solid"
      borderColor={mix(0.5, '#fff', '#000')}
      {...borderRadius('top', '5px')}
    >
    </glamorous.Div>
  );
}
```

You can play more with `✨ polished` and `glamorous` [here](https://codesandbox.io/s/9Qo9kMgRZ).

## Providing props to underlying components

When you wrap a component with `glamorous`, you may want to have pre-defined props
that your component will pass by default. You may be tempted to make a new component
that forwards props to that component with some defaults, but don't do that!
[Just use `defaultProps`](https://codesandbox.io/s/82vZm5q2o)!

```jsx
const MyComponent = ({ shouldRender, ...rest }) => (
  shouldRender ? <div {...rest} /> : null
)
const MyGlamorousComponent = glamorous(MyComponent)(({ color, big }) => ({
  color,
  fontSize: big ? 46 : 30,
}))
MyGlamorousComponent.defaultProps = {
  shouldRender: true,
  color: '#F27777',
  big: true,
}
```

## colour-contrast

A brilliant app called [colour-contrast](https://colour-contrast.github.io/) ([source](https://github.com/colour-contrast/colour-contrast.github.io))
that uses [`styled-components`](https://github.com/styled-components/styled-components) was created by [James Gee](https://twitter.com/Geeman201).
[I](https://twitter.com/kentcdodds) forked it and made a version that uses `glamorous`. [colour-contrast.netlify.com](https://colour-contrast.netlify.com/) ([source](https://github.com/kentcdodds/colour-contrast.github.io))

Fun stuff!
