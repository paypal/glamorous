import { GlamorousComponent } from './glamorous-component'
/**
 * StyleObject is an objects of Style Properties.
 *
 * @see {@link https://github.com/paypal/glamorous/blob/master/src/create-glamorous.js#L28-L131}
 */

export interface StyleFunction<Properties, Props, Theme> {
  (
    props: Props,
    theme: Theme,
  ):
    | Partial<Properties>
    | string
    | Array<
      | Partial<Properties>
      | string
      | StyleFunction<Properties, Props, Theme>
    >
}

export type StyleArray<Properties, Props, Theme> = Array<
  | Partial<Properties>
  | string
  | StyleFunction<Properties, Props, Theme>
>

export type StyleArgument<Properties, Props, Theme> =
  | Partial<Properties>
  | string
  | StyleFunction<Properties, Props, Theme>
  | StyleArray<Properties, Props, Theme>

export interface GlamorousComponentFactory<Element, Properties> {
  <Props, Theme = object>(
    ...styles: StyleArgument<Properties, Props, Theme>[]
  ): GlamorousComponent<
    Element,
    Props
  >;
}