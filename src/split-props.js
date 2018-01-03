import shouldForwardProperty from './should-forward-property'

// eslint-disable-next-line complexity
export default function splitProps(
  {
    css: cssProp,
    innerRef,
    // these are plucked off
    theme, // because they
    className, // should never
    glam, // be forwarded
    // to the lower
    // component ever
    ...rest
  },
  {propsAreCssOverrides, rootEl, filterProps, forwardProps},
) {
  // forward innerRef if user wishes to do so
  if (innerRef !== undefined && forwardProps.indexOf('innerRef') !== -1) {
    rest.innerRef = innerRef
  }
  const returnValue = {toForward: {}, cssProp, cssOverrides: {}}
  if (!propsAreCssOverrides) {
    if (typeof rootEl !== 'string' && filterProps.length === 0) {
      // if it's not a string and filterProps is empty,
      // then we can forward everything (because it's a component)
      returnValue.toForward = rest
      return returnValue
    }
  }
  return Object.keys(rest).reduce((split, propName) => {
    if (filterProps.indexOf(propName) !== -1) {
      return split
    } else if (
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

/* eslint no-unused-vars:0 */
