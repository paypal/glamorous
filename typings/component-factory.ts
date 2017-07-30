import { GlamorousComponent } from './glamorous-component'
import { Omit } from './helpers'
/**
 * StyleObject is an objects of Style Properties.
 *
 * @see {@link https://github.com/paypal/glamorous/blob/master/src/create-glamorous.js#L28-L131}
 */

export interface StyleFunction<Properties, Props> {
  (props: Props):
    | Partial<Properties>
    | string
    | Array<
      | Partial<Properties>
      | string
      | StyleFunction<Properties, Props>
    >
}

export type StyleArray<Properties, Props> = Array<
  | Partial<Properties>
  | string
  | StyleFunction<Properties, Props>
>

export type StyleArgument<Properties, Props> =
  | Partial<Properties>
  | string
  | StyleFunction<Properties, Props>
  | StyleArray<Properties, Props>

// glamorous.div: without Theme
export interface BuiltInGlamorousComponentFactory<ElementProps, Properties> {
  <Props>(
    ...styles: StyleArgument<Properties, Props>[]
  ): GlamorousComponent<
    ElementProps & Props,
    Props
  >;
}

// glamorous.div: with Theme
export interface BuiltInGlamorousComponentFactory<ElementProps, Properties> {
  <Props extends { theme: any }>(
    ...styles: StyleArgument<Properties, Props>[]
  ): GlamorousComponent<
    ElementProps & Omit<Props, 'theme'>,
    Props
  >;
}

// glamorous('div'): without Theme
export interface KeyGlamorousComponentFactory<ElementProps, Properties, ExternalProps, DefaultProps> {
  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ElementProps & ExternalProps & Partial<DefaultProps> & Props,
    ExternalProps
  >;
}


// glamorous('div'): with Theme
export interface KeyGlamorousComponentFactory<ElementProps, Properties, ExternalProps, DefaultProps> {
  <Props extends { theme?: any }>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ElementProps & ExternalProps & Partial<DefaultProps> & Omit<Props, 'theme'>,
    ExternalProps
  >;
}

// glamorous(Component): without Theme
export interface GlamorousComponentFactory<ExternalProps, Properties, DefaultProps> {
  <Props>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ExternalProps & Partial<DefaultProps>,
    Props
  >;
}

// glamorous(Component): with Theme
export interface GlamorousComponentFactory<ExternalProps, Properties, DefaultProps> {
  <Props extends { theme: any }>(
    ...styles: StyleArgument<Properties, Props & ExternalProps & DefaultProps>[]
  ): GlamorousComponent<
    ExternalProps & Partial<DefaultProps> & Omit<Props, 'theme'>,
    Props
  >;
}
