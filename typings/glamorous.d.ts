// Type definitions for @plustwo/glamorous v0.1.0
// Project: https://github.com/plustwo/glamorous
// Definitions by: Kok Sam <https://github.com/sammkj>

import * as React from "react";
import {
  HTMLGlamorousInterface,
  SVGGlamorousInterface,
} from "./element-interfaces.d";

type Component<P> = React.ComponentClass<P> | React.StatelessComponent<P>;

export type DynamicStyledFunction = (props?: object, theme?: object) => object;
export type StaticStyles<CSSProperties> = Partial<CSSProperties>;

// TODO: DynamicStyledFunction is not included here because it's
// "blocking" StaticStyles. Users won't have CSS Property suggestions.
export type Styles<CSSProperties> = StaticStyles<CSSProperties>;

export interface StyledFunction<Props, CSSProperties> {
  (...styles: Styles<CSSProperties>[]): React.ComponentClass<Props>;
}

export type HtmlStyledFunction<Element, CSSProperties> = StyledFunction<React.HTMLProps<Element>, CSSProperties>;

export type SvgStyledFunction<Element extends SVGElement, CSSProperties> = StyledFunction<React.SVGAttributes<Element>, CSSProperties>;

export interface GlamorousInterface extends HTMLGlamorousInterface, SVGGlamorousInterface {
  <P>(component: Component<P>): StyledFunction<P, React.CSSProperties | React.SVGAttributes<any>>;

  Div: React.StatelessComponent<React.CSSProperties>;
  Svg: React.StatelessComponent<React.SVGAttributes<any>>;
}

interface ThemeProps {
  theme: object;
}

export class ThemeProvider extends React.Component<ThemeProps, any> { }

declare const glamorous: GlamorousInterface;

// tslint:disable-next-line
export default glamorous;
