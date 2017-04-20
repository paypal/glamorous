import { GlamorousComponent } from './glamorous'

export type StaticStyles<Properties> = Partial<Properties>
export type DynamicStyledFunction<Properties> = (
    props?: object,
    theme?: object
  ) => Partial<Properties>;

type Styles<Properties> = Array<DynamicStyledFunction<Properties> | StaticStyles<Properties>>

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


export interface StyledFunction<Props, Properties> {
  (
    style1: StaticStyles<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}

export interface StyledFunction<Props, Properties> {
  (
    style1: StaticStyles<Properties>,
    style2: StaticStyles<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}

export interface StyledFunction<Props, Properties> {
  (
    style1: StaticStyles<Properties>,
    style2: DynamicStyledFunction<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}

export interface StyledFunction<Props, Properties> {
  (
    style1: StaticStyles<Properties>,
    style2: DynamicStyledFunction<Properties>,
    style3: StaticStyles<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}

export interface StyledFunction<Props, Properties> {
  (
    style1: StaticStyles<Properties>,
    style2: DynamicStyledFunction<Properties>,
    style3: DynamicStyledFunction<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}

export interface StyledFunction<Props, Properties> {
  (
    style1: StaticStyles<Properties>,
    style2: StaticStyles<Properties>,
    style3: DynamicStyledFunction<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}

export interface StyledFunction<Props, Properties> {
  (
    style1: StaticStyles<Properties>,
    style2: StaticStyles<Properties>,
    style3: StaticStyles<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}

export interface StyledFunction<Props, Properties> {
  (
    style1: DynamicStyledFunction<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}

export interface StyledFunction<Props, Properties> {
  (
    style1: DynamicStyledFunction<Properties>,
    style2: StaticStyles<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}

export interface StyledFunction<Props, Properties> {
  (
    style1: DynamicStyledFunction<Properties>,
    style2: DynamicStyledFunction<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}

export interface StyledFunction<Props, Properties> {
  (
    style1: DynamicStyledFunction<Properties>,
    style2: StaticStyles<Properties>,
    style3: DynamicStyledFunction<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}

export interface StyledFunction<Props, Properties> {
  (
    style1: DynamicStyledFunction<Properties>,
    style2: StaticStyles<Properties>,
    style3: StaticStyles<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}

export interface StyledFunction<Props, Properties> {
  (
    style1: DynamicStyledFunction<Properties>,
    style2: DynamicStyledFunction<Properties>,
    style3: StaticStyles<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}

export interface StyledFunction<Props, Properties> {
  (
    style1: DynamicStyledFunction<Properties>,
    style2: DynamicStyledFunction<Properties>,
    style3: DynamicStyledFunction<Properties>,
    ...styles: Styles<Properties>
  ): GlamorousComponent<Props>;
}
