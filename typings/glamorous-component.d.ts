import { CSSProperties } from './css-properties'

import { Component } from './glamorous'

import { Omit } from './helpers'

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

export interface WithComponent<ExternalProps, Props> {
  withComponent: (
    component: string | Component<Props>
  ) => GlamorousComponent<
    ExternalProps,
    Props
  >
}

export interface WithProps<ExternalProps, Props> {
  withProps: <DefaultProps extends object>(
    props: DefaultProps
  ) => GlamorousComponent<
    ExternalProps & Partial<DefaultProps>,
    Props
  >
}

export type GlamorousComponent<ExternalProps, Props> =
  & React.ComponentClass<ExtraGlamorousProps & ExternalProps>
  & WithComponent<ExternalProps, Props>
  & WithProps<ExternalProps, Props>
