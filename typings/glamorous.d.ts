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
} from './styled-function'

export { StyledFunction }

export interface GlamorousOptions {
  displayName: string
  rootEl: string | Element
  forwardProps: String[]
}

export interface GlamorousInterface extends HTMLGlamorousInterface, SVGGlamorousInterface {
  <P>(
    component: GlamorousComponent<P>,
    options?: GlamorousOptions
  ): StyledFunction<P, React.CSSProperties | React.SVGAttributes<any>>

  Div: React.StatelessComponent<React.CSSProperties>
  Svg: React.StatelessComponent<React.SVGAttributes<any>>
}

interface ThemeProps {
  theme: object
}

export class ThemeProvider extends React.Component<ThemeProps, any> { }

declare const glamorous: GlamorousInterface

export default glamorous
