import { CSSProperties } from './css-properties'

import { Component } from './glamorous'

import { Omit } from './helpers.d'

/**
* `glamorousComponentFactory` returns a ComponentClass
*
* @see {@link https://github.com/paypal/glamorous/blob/master/src/create-glamorous.js#L28-L131}
*/

export interface ExtraGlamorousProps {
  innerRef?: (instance: any) => void;

  className?: string;
  css?: CSSProperties;
  theme?: object;
}

export interface WithComponent<Element, Props> {
  (
    component: string | Component<Props>
  ): GlamorousComponent<
    Element,
    Props
  >
}

export type GlamorousComponent<ExternalProps, Props> = React.ComponentClass<
  & ExtraGlamorousProps
  & ExternalProps
  // & Props
> & {
  withComponent: WithComponent<
    ExternalProps,
    Props
  >
}