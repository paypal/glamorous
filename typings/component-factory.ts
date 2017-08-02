import { GlamorousComponent } from './glamorous-component'
import { Omit } from './helpers'

import { StyleArgument } from './style-arguments'

// # built-in DOM - component factories glamorous.div

// * without Theme
export interface BuiltInGlamorousComponentFactory<ElementProps, Properties> {
  <Props>(
    ...styles: StyleArgument<Properties, Props>[]
  ): GlamorousComponent<
    ElementProps & Props,
    Props
  >;
}

// * with Theme
export interface BuiltInGlamorousComponentFactory<ElementProps, Properties> {
  <Props extends { theme: any }>(
    ...styles: StyleArgument<Properties, Props>[]
  ): GlamorousComponent<
    ElementProps & Omit<Props, 'theme'>,
    Props
  >;
}

// # dom tag - component factories glamorous('div')

// ## without propsAreCssOverides

// * without Theme
export interface KeyGlamorousComponentFactory<ElementProps, Properties, ExternalProps, DefaultProps> {
  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ElementProps & ExternalProps & Partial<DefaultProps> & Props,
    ExternalProps
  >;
}


// * with Theme
export interface KeyGlamorousComponentFactory<ElementProps, Properties, ExternalProps, DefaultProps> {
  <Props extends { theme?: any }>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ElementProps & ExternalProps & Partial<DefaultProps> & Omit<Props, 'theme'> & Props,
    ExternalProps
  >;
}

// ## with propsAreCssOverides

// * without Theme
export interface KeyGlamorousComponentFactoryCssOverides<ElementProps, Properties, ExternalProps, DefaultProps> {
  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ElementProps & ExternalProps & Partial<DefaultProps> & Props & Properties,
    ExternalProps
  >;
}

// * with Theme
export interface KeyGlamorousComponentFactoryCssOverides<ElementProps, Properties, ExternalProps, DefaultProps> {
  <Props extends { theme?: any }>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ElementProps & ExternalProps & Partial<DefaultProps> & Omit<Props, 'theme'> & Properties,
    ExternalProps
  >;
}

// # react component - component factories glamorous(Component)

// ## without propsAreCssOverides

// * without Theme
export interface GlamorousComponentFactory<ExternalProps, Properties, DefaultProps> {
  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ExternalProps & Partial<DefaultProps> & Props,
    Props
  >;
}

// * with Theme
export interface GlamorousComponentFactory<ExternalProps, Properties, DefaultProps> {
  <Props extends { theme: any }>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ExternalProps & Partial<DefaultProps> & Omit<Props, 'theme'>,
    Props
  >;
}

// ## with propsAreCssOverides

// * without Theme
export interface GlamorousComponentFactoryCssOverides<ExternalProps, Properties, DefaultProps> {
  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ExternalProps & Partial<DefaultProps> & Properties & Props,
    Props
  >
}

// * with Theme
export interface GlamorousComponentFactoryCssOverides<ExternalProps, Properties, DefaultProps> {
  <Props extends { theme: any }>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ExternalProps & Partial<DefaultProps> & Properties & Omit<Props, 'theme'>,
    Props
  >
}
