/* eslint no-unused-vars:0 */
import createGlamorous from './create-glamorous'

function splitProps({
  css: cssOverrides = {},
  // these are plucked off
  theme, // because they
  className, // should never
  innerRef, // be forwarded
  glam, // to the lower
  // component ever
  ...rest
}) {
  return {toForward: rest, cssOverrides}
}

const glamorous = createGlamorous(splitProps)

export default glamorous
