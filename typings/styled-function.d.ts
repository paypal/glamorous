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
export type DynamicStyledFunction<Properties, CustomProps> = (
  props: CustomProps,
  theme?: object
) => Partial<Properties>

type Styles<Properties, CustomProps> = Array<DynamicStyledFunction<Properties, CustomProps> | StaticStyles<Properties>>

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
  innerRef?: (instance: any) => void
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>;
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: StaticStyles<Properties>,
    style2: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: StaticStyles<Properties>,
    style2: DynamicStyledFunction<Properties, CustomProps>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: StaticStyles<Properties>,
    style2: DynamicStyledFunction<Properties, CustomProps>,
    style3: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: StaticStyles<Properties>,
    style2: DynamicStyledFunction<Properties, CustomProps>,
    style3: DynamicStyledFunction<Properties, CustomProps>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: StaticStyles<Properties>,
    style2: StaticStyles<Properties>,
    style3: DynamicStyledFunction<Properties, CustomProps>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: StaticStyles<Properties>,
    style2: StaticStyles<Properties>,
    style3: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: DynamicStyledFunction<Properties, CustomProps>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: DynamicStyledFunction<Properties, CustomProps>,
    style2: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: DynamicStyledFunction<Properties, CustomProps>,
    style2: DynamicStyledFunction<Properties, CustomProps>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: DynamicStyledFunction<Properties, CustomProps>,
    style2: StaticStyles<Properties>,
    style3: DynamicStyledFunction<Properties, CustomProps>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: DynamicStyledFunction<Properties, CustomProps>,
    style2: StaticStyles<Properties>,
    style3: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: DynamicStyledFunction<Properties, CustomProps>,
    style2: DynamicStyledFunction<Properties, CustomProps>,
    style3: StaticStyles<Properties>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>
}

export interface StyledFunction<Props, Properties> {
  <CustomProps>(
    style1: DynamicStyledFunction<Properties, CustomProps>,
    style2: DynamicStyledFunction<Properties, CustomProps>,
    style3: DynamicStyledFunction<Properties, CustomProps>,
    ...styles: Styles<Properties, CustomProps>
  ): GlamorousComponent<Props & CustomProps>
}

export type HtmlStyledFunction<Element, Properties> = StyledFunction<React.HTMLProps<Element>, Properties>

export type SvgStyledFunction<Element extends SVGElement, Properties> = StyledFunction<React.SVGAttributes<Element>, Properties>
