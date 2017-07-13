// Type definitions for Glamorous v3.2.0
// Project: https://github.com/paypal/glamorous
// Definitions by: Kok Sam <https://github.com/sammkj>

import * as React from 'react'
import {
  HTMLGlamorousInterface,
  SVGGlamorousInterface,
} from './element-interfaces'
import {
  StyledFunction,
  GlamorousComponent,
  ExtraGlamorousProps,
} from './styled-function'
import { CSSProperties } from './css-properties'

export {
  CSSProperties,
  ExtraGlamorousProps,
  GlamorousComponent,
  HTMLGlamorousInterface,
  StyledFunction,
  SVGGlamorousInterface,
}

export interface GlamorousOptions {
  displayName: string
  rootEl: string | Element
  forwardProps: String[]
}

export type Component<T> = React.ComponentClass<T> | React.StatelessComponent<T>

export interface Config {
  useDisplayNameInClassName: boolean
}

export interface GlamorousInterface extends HTMLGlamorousInterface, SVGGlamorousInterface {
  <P>(
    component:Component<P>,
    options?: GlamorousOptions,
  ): StyledFunction<P, CSSProperties | React.SVGAttributes<any>>

  Div: React.StatelessComponent<CSSProperties & ExtraGlamorousProps>
  Svg: React.StatelessComponent<React.SVGAttributes<any> & ExtraGlamorousProps>

  config: Config
}

interface ThemeProps {
  theme: object
}

export class ThemeProvider extends React.Component<ThemeProps, any> { }

export function withTheme<ExternalProps, Theme>(
  component: React.ComponentClass<ExternalProps & { theme: Theme }>
): React.ComponentClass<ExternalProps>

export function withTheme<ExternalProps, Theme>(
  component: React.StatelessComponent<ExternalProps & { theme: Theme }>
): React.StatelessComponent<ExternalProps>

declare const glamorous: GlamorousInterface

export default glamorous
