// Type definitions for Glamorous v3.2.0
// Project: https://github.com/paypal/glamorous
// Definitions by: Kok Sam <https://github.com/sammkj>

import * as React from 'react';
import { ComponentClass, CSSProperties, StatelessComponent, SVGAttributes } from 'react'

import { HTMLGlamorousInterface, SVGGlamorousInterface } from './element-interfaces'

export type Component = ComponentClass<{}> | StatelessComponent<{}>;

export interface DynamicStyledFunction {
  (props?: object, theme?: object): object;
}

export interface StyledFunction<Properties> {
  (
    staticStyles: Partial<Properties>,
    dynamicStyles?: DynamicStyledFunction
  ): Component;
}

export interface GlamorousBaseInterface {
  (component: Component): StyledFunction<CSSProperties | SVGAttributes<any>>;
}

export interface GlamorousInterface extends
  GlamorousBaseInterface, HTMLGlamorousInterface, SVGGlamorousInterface {
    Div: StatelessComponent<CSSProperties>
    Svg: StatelessComponent<SVGAttributes<any>>
  }

declare const glamorous: GlamorousInterface;

export default glamorous;
