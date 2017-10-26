/* eslint no-unused-vars:0 */
import createGlamorous from './create-glamorous'

function splitProps(
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
  {forwardProps},
) {
  // forward innerRef if user wishes to do so
  if (innerRef !== undefined && forwardProps.indexOf('innerRef') !== -1) {
    rest.innerRef = innerRef
  }
  return {toForward: rest, cssProp}
}

const glamorous = createGlamorous(splitProps)

export default glamorous
