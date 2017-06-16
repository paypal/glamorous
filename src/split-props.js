// @flow
import type {Component} from 'react'
import shouldForwardProperty from './should-forward-property'
import type {
  FunctionalComponent,
  ComponentClass,
  RefCallback,
} from './types/React'
import type {CSSProperties} from './types/CSSProperties'
import type {Theme} from './theme-provider'

export type SplittableProps = {
  css: CSSProperties,
  theme: Theme,
  className: string,
  // TODO: Use rootEl to give a more specific typing for this innerRef's
  // instance type
  innerRef: RefCallback<Component<*, *, *> | HTMLElement>,
  glam: {[key: string]: any},
};

type SplitPropsOptions = {
  propsAreCssOverrides: boolean,
  rootEl: string | FunctionalComponent | ComponentClass,
  forwardProps: Array<string>,
};

type SplitPropsResult = {
  toForward: {[key: string]: any},
  cssProp: CSSProperties,
  cssOverrides: CSSProperties,
};

export default function splitProps(
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
  {propsAreCssOverrides, rootEl, forwardProps}: SplitPropsOptions,
): SplitPropsResult {
  const returnValue = {toForward: {}, cssProp, cssOverrides: {}}
  if (!propsAreCssOverrides) {
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
