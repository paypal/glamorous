// Type definitions for Glamorous v3.2.0
// Project: https://github.com/paypal/glamorous
// Definitions by: Kok Sam <https://github.com/sammkj>

import * as React from 'react'
import {
  HTMLComponentFactory,
  HTMLKey,
  SVGComponentFactory,
  SVGKey,
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

  BuiltInGlamorousComponentFactory,
  KeyGlamorousComponentFactory,
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

  BuiltInGlamorousComponentFactory,
  KeyGlamorousComponentFactory,
  GlamorousComponentFactory,

  HTMLComponentFactory,
  HTMLKey,
  SVGComponentFactory,
  SVGKey,
}

export interface GlamorousOptions<Props, Context> {
  displayName: string
  rootEl: string | Element
  forwardProps: String[]
  shouldClassNameUpdate:
    (props: Props, prevProps: Props, context: Context, prevContext: Context) => boolean
}

export type Component<T> = React.ComponentClass<T> | React.StatelessComponent<T>


type OmitInternals<
  Props extends { className?: string, theme?: object }
> = Omit<Props, "className" | "theme">

type GlamorousProps = { className?: string, theme?: object }

export interface GlamorousInterface extends HTMLComponentFactory, SVGComponentFactory {
  // This overload is needed due to a union return of CSSProperties | SVGProperties
  // resulting in a loss of typesafety on function arguments
  <ExternalProps, Context = object>(
    component: Component<ExternalProps & GlamorousProps>,
    options?: Partial<GlamorousOptions<ExternalProps, Context>>,
  ): GlamorousComponentFactory<ExternalProps, CSSProperties>

  <ExternalProps, Context = object>(
    component: Component<ExternalProps & GlamorousProps>,
    options?: Partial<GlamorousOptions<ExternalProps, Context>>,
  ): GlamorousComponentFactory<ExternalProps, SVGProperties>

  <ExternalProps, Context = object>(
    component: HTMLKey,
    options?: Partial<GlamorousOptions<ExternalProps, Context>>,
  ): KeyGlamorousComponentFactory<HTMLComponentFactory[HTMLKey], CSSProperties, ExternalProps>

  <ExternalProps, Context = object>(
    component: SVGKey,
    options?: Partial<GlamorousOptions<ExternalProps, Context>>,
  ): KeyGlamorousComponentFactory<SVGComponentFactory[SVGKey], SVGProperties, ExternalProps>

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
