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

export interface GlamorousInterface extends HTMLGlamorousInterface, SVGGlamorousInterface {
  <P>(
    component:Component<P>,
    options?: GlamorousOptions,
  ): StyledFunction<P, CSSProperties | React.SVGAttributes<any>>

  Div: React.StatelessComponent<CSSProperties & ExtraGlamorousProps>
  Svg: React.StatelessComponent<React.SVGAttributes<any> & ExtraGlamorousProps>
}

interface ThemeProps {
  theme: object
}

export class ThemeProvider extends React.Component<ThemeProps, any> { }

export function withTheme<Theme>(component: Component<{ theme: Theme }>): GlamorousComponent<Theme>
export function withTheme<Theme>(component: 
  | React.ComponentClass<{ theme: Theme }>
  | React.StatelessComponent<{ theme: Theme }>
): GlamorousComponent<Theme>

declare const glamorous: GlamorousInterface

export default glamorous
