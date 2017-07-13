import { CSSProperties } from './css-properties'

/**
 * `glamorousComponentFactory` returns a ComponentClass
 *
 * @see {@link https://github.com/paypal/glamorous/blob/master/src/create-glamorous.js#L28-L131}
 */

export type GlamorousComponent<P> = React.ComponentClass<P & ExtraGlamorousProps>

/**
 * StaticStyles are objects of CSS Properties.
 *
 * @see {@link https://github.com/paypal/glamorous/blob/master/src/create-glamorous.js#L28-L131}
 */
export type StaticStyles<Properties> = Partial<Properties>

/**
 * DynamicStyledFunction generates styles based on props
 * and themes.
 *
 * @see {@link https://github.com/paypal/glamorous/blob/master/src/create-glamorous.js#L28-L131}
 */
export type DynamicStyledFunction<Properties, CustomProps, ThemeProps> = (
  props: CustomProps,
  theme?: ThemeProps
) => Partial<Properties>

type Styles<Properties, CustomProps, ThemeProps> = Array<DynamicStyledFunction<Properties, CustomProps, ThemeProps> | StaticStyles<Properties>>

// TODO: Using a union for a parameter kills autocomplete so we
// use overloading to give autocomplete on the first two styles
// and retain typesafety on additional styles
// s = StaticStyles, d = DynamicStyledFunction
// s
// s,s
// s,d
// s,d,s
// s,d,d
// s,s,d
// s,s,s
// d
// d,s
// d,d
// d,s,d
// d,s,s
// d,d,s
// d,d,d

export interface ExtraGlamorousProps {
  innerRef?: (instance: any) => void;
  css?: CSSProperties;
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>;
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: StaticStyles<Properties>,
    style2: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: StaticStyles<Properties>,
    style2: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: StaticStyles<Properties>,
    style2: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    style3: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: StaticStyles<Properties>,
    style2: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    style3: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: StaticStyles<Properties>,
    style2: StaticStyles<Properties>,
    style3: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: StaticStyles<Properties>,
    style2: StaticStyles<Properties>,
    style3: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    style2: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    style2: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    style2: StaticStyles<Properties>,
    style3: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    style2: StaticStyles<Properties>,
    style3: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    style2: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    style3: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps, ThemeProps = {}>(
    style1: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    style2: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    style3: DynamicStyledFunction<Properties, CustomProps, ThemeProps>,
    ...styles: Styles<Properties, CustomProps, ThemeProps>
  ): GlamorousComponent<Props & CustomProps>
}

export type HtmlStyledFunction<Element, Properties> = StyledFunction<React.HTMLProps<Element>, Properties>

export type SvgStyledFunction<Element extends SVGElement, Properties> = StyledFunction<React.SVGAttributes<Element>, Properties>
