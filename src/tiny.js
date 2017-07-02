// @flow
/* eslint no-unused-vars:0 */
import createGlamorous from './create-glamorous'
import type {SplittableProps, SplitPropsResult} from './split-props'

function splitProps(
  {
    css: cssProp,
    // these are plucked off
    theme, // because they
    className, // should never
    innerRef, // be forwarded
    glam, // to the lower
    // component ever
    ...rest
  }: SplittableProps,
  ignored: any,
): SplitPropsResult {
  return {
    toForward: rest,
    cssProp,
    cssOverrides: {},
  }
}

const glamorous = createGlamorous(splitProps)

export default glamorous
