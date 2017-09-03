import { GlamorousComponent } from './glamorous-component'
import { Omit } from './helpers'

import { StyleArgument, StaticStyleArgument } from './style-arguments'

// # built-in DOM - component factories glamorous.div

export interface BuiltInGlamorousComponentFactory<ElementProps, Properties> {
  (
    ...styles: StaticStyleArgument<Properties>[]
  ): GlamorousComponent<
    ElementProps,
    object
  >;

  <Props extends { theme: object }>(
    ...styles: StyleArgument<Properties, Props>[]
  ): GlamorousComponent<
    Omit<Props, 'theme'> & ElementProps,
    Props
  >;

  <Props>(
    ...styles: StyleArgument<Properties, Props>[]
  ): GlamorousComponent<
    Props & ElementProps,
    Props
  >;
}

// # dom tag - component factories glamorous('div')

// ## without propsAreCssOverides

export interface KeyGlamorousComponentFactory<ElementProps, Properties, ExternalProps, DefaultProps> {
  (
    ...styles: StaticStyleArgument<Properties>[]
  ): GlamorousComponent<
    ExternalProps & Partial<DefaultProps> & ElementProps,
    ExternalProps
  >;

  <Props extends { theme?: any }>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    Omit<Props, 'theme'> & ExternalProps & Partial<DefaultProps> & ElementProps,
    ExternalProps
  >;

  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    Props & ExternalProps & Partial<DefaultProps> & ElementProps,
    ExternalProps
  >;
}

// ## with propsAreCssOverides

export interface KeyGlamorousComponentFactoryCssOverides<ElementProps, Properties, ExternalProps, DefaultProps> {
  (
    ...styles: StaticStyleArgument<Properties>[]
  ): GlamorousComponent<
    ExternalProps & Partial<DefaultProps> & Properties & ElementProps,
    ExternalProps
  >;

  <Props extends { theme?: any }>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    Omit<Props, 'theme'> & ExternalProps & Partial<DefaultProps> & Properties & ElementProps,
    ExternalProps
  >;

  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    Props & ExternalProps & Partial<DefaultProps> & Properties & ElementProps,
    ExternalProps
  >;
}

// # react component - component factories glamorous(Component)

// ## without propsAreCssOverides

export interface GlamorousComponentFactory<ExternalProps, Properties, DefaultProps> {
  (
    ...styles: StaticStyleArgument<Properties>[]
  ): GlamorousComponent<
    ExternalProps & Partial<DefaultProps>,
    object
  >;

  <Props extends { theme: any }>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    Omit<Props, 'theme'> & ExternalProps & Partial<DefaultProps>,
    Props
  >;
 
  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    Props & ExternalProps & Partial<DefaultProps>,
    Props
  >;
}

// ## with propsAreCssOverides

export interface GlamorousComponentFactoryCssOverides<ExternalProps, Properties, DefaultProps> {
  (
    ...styles: StaticStyleArgument<Properties>[]
  ): GlamorousComponent<
    ExternalProps & Partial<DefaultProps> & Properties,
    object
  >

  <Props extends { theme: any }>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    Omit<Props, 'theme'> & ExternalProps & Partial<DefaultProps> & Properties,
    Props
  >

  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    Props & ExternalProps & Partial<DefaultProps> & Properties,
    Props
  >
}
