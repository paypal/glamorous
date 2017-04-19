import shouldForwardProperty from './should-forward-property'

export default function splitProps(
  {
    css: cssOverrides = {},
    // these are plucked off
    className, // because they
    innerRef, // should never
    // be forwarded
    ...rest
  },
  {propsAreCssOverrides, rootEl, forwardProps},
) {
  const returnValue = {toForward: {}, cssOverrides: {}}
  if (!propsAreCssOverrides) {
    returnValue.cssOverrides = cssOverrides
    if (typeof rootEl !== 'string') {
      // if it's not a string, then we can forward everything
      // (because it's a component)
      returnValue.toForward = rest
      return returnValue
    }
  }
  return Object.keys(rest).reduce((split, propName) => {
    if (
      forwardProps.indexOf(propName) !== -1 ||
      shouldForwardProperty(rootEl, propName)
    ) {
      split.toForward[propName] = rest[propName]
    } else if (propsAreCssOverrides) {
      split.cssOverrides[propName] = rest[propName]
    }
    return split
  }, returnValue)
}
