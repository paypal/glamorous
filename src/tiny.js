// @flow
/* eslint no-unused-vars:0 */
import createGlamorous from './create-glamorous'
import type {SplittableProps} from './split-props'

function splitProps({
  css: cssProp,
  // these are plucked off
  theme, // because they
  className, // should never
  innerRef, // be forwarded
  glam, // to the lower
  // component ever
  ...rest
}: SplittableProps) {
  return {toForward: rest, cssProp}
}

const glamorous = createGlamorous(splitProps)

export default glamorous
