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
