import { GlamorousComponent } from './glamorous-component'
/**
 * StyleObject is an objects of Style Properties.
 *
 * @see {@link https://github.com/paypal/glamorous/blob/master/src/create-glamorous.js#L28-L131}
 */
export type StyleObject<Styles> = Partial<Styles>

/**
 * StyleFunction generates styles based on props
 * and themes.
 *
 * @see {@link https://github.com/paypal/glamorous/blob/master/src/create-glamorous.js#L28-L131}
 */
export type StyleFunction<Styles, Props, Theme> = (
  props: Props,
  theme?: Theme
) => Partial<Styles>

export type StyleArguments<Styles, Props, Theme> = Array<
  | StyleFunction<Styles, Props, Theme>
  | StyleObject<Styles>
>

// TODO: Using a union for a parameter kills autocomplete so we
// use overloading to give autocomplete on the first two styles
// and retain typesafety on additional styles
// o = StyleObject, f = StyleFunction
// o
// o,o
// o,f
// o,f,o
// o,f,f
// o,o,f
// o,o,o
// f
// f,o
// f,f
// f,o,f
// f,o,o
// f,f,o
// f,f,f

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = {}>(
    style1: StyleObject<Styles>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>;
}

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = {}>(
    style1: StyleObject<Styles>,
    style2: StyleObject<Styles>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>
}

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = {}>(
    style1: StyleObject<Styles>,
    style2: StyleFunction<Styles, Props, Theme>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>
}

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = {}>(
    style1: StyleObject<Styles>,
    style2: StyleFunction<Styles, Props, Theme>,
    style3: StyleObject<Styles>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>
}

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = {}>(
    style1: StyleObject<Styles>,
    style2: StyleFunction<Styles, Props, Theme>,
    style3: StyleFunction<Styles, Props, Theme>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>
}

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = {}>(
    style1: StyleObject<Styles>,
    style2: StyleObject<Styles>,
    style3: StyleFunction<Styles, Props, Theme>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>
}

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = {}>(
    style1: StyleObject<Styles>,
    style2: StyleObject<Styles>,
    style3: StyleObject<Styles>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>
}

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = {}>(
    style1: StyleFunction<Styles, Props, Theme>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>
}

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = object>(
    style1: StyleFunction<Styles, Props, Theme>,
    style2: StyleObject<Styles>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>
}

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = {}>(
    style1: StyleFunction<Styles, Props, Theme>,
    style2: StyleFunction<Styles, Props, Theme>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>
}

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = {}>(
    style1: StyleFunction<Styles, Props, Theme>,
    style2: StyleObject<Styles>,
    style3: StyleFunction<Styles, Props, Theme>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>
}

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = {}>(
    style1: StyleFunction<Styles, Props, Theme>,
    style2: StyleObject<Styles>,
    style3: StyleObject<Styles>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>
}

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = {}>(
    style1: StyleFunction<Styles, Props, Theme>,
    style2: StyleFunction<Styles, Props, Theme>,
    style3: StyleObject<Styles>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>
}

export interface GlamorousComponentFactory<Element, Styles> {
  <Props, Theme = {}>(
    style1: StyleFunction<Styles, Props, Theme>,
    style2: StyleFunction<Styles, Props, Theme>,
    style3: StyleFunction<Styles, Props, Theme>,
    ...styles: StyleArguments<Styles, Props, Theme>
  ): GlamorousComponent<Element & Props>
}