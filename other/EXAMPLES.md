# Examples

There aren't any examples yet! Want to add one? See `CONTRIBUTING.md`

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
