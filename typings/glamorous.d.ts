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
  WithProps,
} from './glamorous-component'
import {
  StyleFunction,
  StyleArray,
  StyleArgument,

  BuiltInGlamorousComponentFactory,
  KeyGlamorousComponentFactory,
  GlamorousComponentFactory,
} from './component-factory'
import { CSSProperties, CSSPropertiesPseudo, CSSPropertiesLossy } from './css-properties'
import { SVGProperties, SVGPropertiesLossy } from './svg-properties'

import { Omit } from './helpers'

export {
  CSSProperties,
  CSSPropertiesPseudo,
  CSSPropertiesLossy,
  SVGProperties,
  SVGPropertiesLossy,

  GlamorousComponent,
  ExtraGlamorousProps,
  WithComponent,
  WithProps,

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

export interface GlamorousOptions<Props, Context, DefaultProps> {
  displayName: string
  rootEl: string | Element
  forwardProps: String[]
  shouldClassNameUpdate:
    (props: Props, prevProps: Props, context: Context, prevContext: Context) => boolean
  withProps: DefaultProps
}

export type Component<T> = React.ComponentClass<T> | React.StatelessComponent<T>


type OmitInternals<
  Props extends { className?: string, theme?: object }
> = Omit<Props, "className" | "theme">

type GlamorousProps = { className?: string, theme?: object }

export interface GlamorousInterface extends HTMLComponentFactory, SVGComponentFactory {
  // This overload is needed due to a union return of CSSProperties | SVGProperties
  // resulting in a loss of typesafety on function arguments
  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Component<ExternalProps & GlamorousProps>,
    options?: Partial<GlamorousOptions<ExternalProps, Context, DefaultProps>>,
  ): GlamorousComponentFactory<ExternalProps, CSSProperties, DefaultProps>

  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Component<ExternalProps & GlamorousProps>,
    options?: Partial<GlamorousOptions<ExternalProps, Context, DefaultProps>>,
  ): GlamorousComponentFactory<ExternalProps, SVGProperties, DefaultProps>

  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: HTMLKey,
    options?: Partial<GlamorousOptions<ExternalProps, Context, DefaultProps>>,
  ): KeyGlamorousComponentFactory<
    HTMLComponentFactory[HTMLKey], CSSProperties, ExternalProps, DefaultProps
  >

  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: SVGKey,
    options?: Partial<GlamorousOptions<ExternalProps, Context, DefaultProps>>,
  ): KeyGlamorousComponentFactory<
    SVGComponentFactory[SVGKey], SVGProperties, ExternalProps, DefaultProps
  >

  Div: React.StatelessComponent<CSSProperties & ExtraGlamorousProps>
  Svg: React.StatelessComponent<SVGProperties & ExtraGlamorousProps>
}

interface ThemeProps {
  theme: object
}

export class ThemeProvider extends React.Component<ThemeProps, any> { }

export function withTheme<Props extends { theme: any }>(
  component: React.ComponentClass<Props>
): React.ComponentClass<
  Omit<Props, "theme">
>

export function withTheme<Props extends { theme: any }>(
  component: React.StatelessComponent<Props>
): React.StatelessComponent<
  Omit<Props, "theme">
>

declare const glamorous: GlamorousInterface

export default glamorous
