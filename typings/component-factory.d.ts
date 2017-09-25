import {GlamorousComponent} from './glamorous-component'
import {Omit} from './helpers'

import {StyleArgument, StaticStyleArgument} from './style-arguments'

// # built-in DOM - component factories glamorous.div

export interface BuiltInGlamorousComponentFactory<ElementProps, Properties> {
  (...styles: StaticStyleArgument<Properties>[]): GlamorousComponent<
    ElementProps,
    object
  >

  <Props extends {theme: object}>(
    ...styles: StyleArgument<Properties, Props>[]
  ): GlamorousComponent<Omit<Props, 'theme'> & ElementProps, Props>

  <Props>(...styles: StyleArgument<Properties, Props>[]): GlamorousComponent<
    Props & ElementProps,
    Props
  >
}

// # dom tag - component factories glamorous('div')

// ## without propsAreCssOverides

export interface KeyGlamorousComponentFactory<
  ElementProps,
  Properties,
  ExternalProps,
  DefaultProps
> {
  (...styles: StaticStyleArgument<Properties>[]): GlamorousComponent<
    ElementProps & ExternalProps & Partial<DefaultProps>,
    ExternalProps
  >

  <Props extends {theme?: any}>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ElementProps &
      ExternalProps &
      Partial<DefaultProps> &
      Omit<Props, 'theme'> &
      Props,
    ExternalProps
  >

  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ElementProps & ExternalProps & Partial<DefaultProps> & Props,
    ExternalProps
  >
}

// ## with propsAreCssOverides

export interface KeyGlamorousComponentFactoryCssOverides<
  ElementProps,
  Properties,
  ExternalProps,
  DefaultProps
> {
  (...styles: StaticStyleArgument<Properties>[]): GlamorousComponent<
    ElementProps & ExternalProps & Partial<DefaultProps> & Properties,
    ExternalProps
  >

  <Props extends {theme?: any}>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ElementProps &
      ExternalProps &
      Partial<DefaultProps> &
      Omit<Props, 'theme'> &
      Properties,
    ExternalProps
  >

  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ElementProps & ExternalProps & Partial<DefaultProps> & Props & Properties,
    ExternalProps
  >
}

// # react component - component factories glamorous(Component)

// ## without propsAreCssOverides

export interface GlamorousComponentFactory<
  ExternalProps,
  Properties,
  DefaultProps
> {
  (...styles: StaticStyleArgument<Properties>[]): GlamorousComponent<
    ExternalProps & Partial<DefaultProps>,
    object
  >

  <Props extends {theme: any}>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ExternalProps & Partial<DefaultProps> & Omit<Props, 'theme'>,
    Props
  >

  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<ExternalProps & Partial<DefaultProps> & Props, Props>
}

// ## with propsAreCssOverides

export interface GlamorousComponentFactoryCssOverides<
  ExternalProps,
  Properties,
  DefaultProps
> {
  (...styles: StaticStyleArgument<Properties>[]): GlamorousComponent<
    ExternalProps & Partial<DefaultProps> & Properties,
    object
  >

  <Props extends {theme: any}>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ExternalProps & Partial<DefaultProps> & Properties & Omit<Props, 'theme'>,
    Props
  >

  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ExternalProps & Partial<DefaultProps> & Properties & Props,
    Props
  >
}
