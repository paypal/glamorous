// Type definitions for Glamorous v3.2.0
// Project: https://github.com/paypal/glamorous
// Definitions by: Kok Sam <https://github.com/sammkj>

import * as React from 'react'
import {
  HTMLComponentFactory,
  SVGComponentFactory,
} from './built-in-component-factories'
import {
  GlamorousComponent,
  ExtraGlamorousProps,
  WithComponent,
} from './glamorous-component'
import {
  StyleFunction,
  StyleArray,
  StyleArgument,
  GlamorousComponentFactory,
} from './component-factory'
import { CSSProperties } from './css-properties'
import { SVGProperties } from './svg-properties'

import { Omit } from './helpers'

export {
  CSSProperties,
  SVGProperties,

  GlamorousComponent,
  ExtraGlamorousProps,
  WithComponent,

  StyleFunction,
  StyleArray,
  StyleArgument,

  GlamorousComponentFactory,
  HTMLComponentFactory,
  SVGComponentFactory,
}

export interface GlamorousOptions {
  displayName: string
  rootEl: string | Element
  forwardProps: String[]
}

export type Component<T> = React.ComponentClass<T> | React.StatelessComponent<T>


type OmitInternals<
  Props extends { className?: string, theme?: object }
> = Omit<Props, "className" | "theme">

export interface GlamorousInterface extends HTMLComponentFactory, SVGComponentFactory {
  // This overload is needed due to a union return of CSSProperties | SVGProperties
  // resulting in a loss of typesafety on function arguments
  <Props extends { className?: string, theme?: object }>(
    component: Component<Props>,
    options?: Partial<GlamorousOptions>,
  ): GlamorousComponentFactory<OmitInternals<Props>, CSSProperties>
  <Props extends { className?: string, theme?: object }>(
    component: Component<Props>,
    options?: Partial<GlamorousOptions>,
  ): GlamorousComponentFactory<OmitInternals<Props>, SVGProperties>

  Div: React.StatelessComponent<CSSProperties & ExtraGlamorousProps>
  Svg: React.StatelessComponent<SVGProperties & ExtraGlamorousProps>
}

interface ThemeProps {
  theme: object
}

export class ThemeProvider extends React.Component<ThemeProps, any> { }

type OmitTheme<
  Props extends { theme: Theme },
  Theme
> = Omit<Props, "theme">

export function withTheme<Props extends { theme: Theme }, Theme = {}>(
  component: React.ComponentClass<Props>
): React.ComponentClass<
  OmitTheme<Props, Theme>
>

export function withTheme<Props extends { theme: Theme }, Theme = {}>(
  component: React.StatelessComponent<Props>
): React.StatelessComponent<
  OmitTheme<Props, Theme>
>

declare const glamorous: GlamorousInterface

export default glamorous
