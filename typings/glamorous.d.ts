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


export declare function withTheme<P>(component: Component<P & ThemeProps>): GlamorousComponent<P>


export declare function withTheme
  <P>(
    component:
      | React.ComponentClass<P>
      | React.StatelessComponent<P>): GlamorousComponent<P>

declare const glamorous: GlamorousInterface

export default glamorous
