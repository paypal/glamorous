import * as CSS from 'csstype'
import {SingleOrArray} from './helpers'

export interface SVGPropertiesCompleteSingle
  extends CSS.SvgProperties<number | string> {}

type SVGPropertiesComplete = SingleOrArray<
  SVGPropertiesCompleteSingle,
  keyof SVGPropertiesCompleteSingle
>

export interface SVGPropertiesLossy {
  [propertyName: string]:
    | string
    | number
    | SVGProperties
    | undefined
    | Array<SVGPropertiesCompleteSingle[keyof SVGPropertiesCompleteSingle]>
    | SVGPropertiesLossy
}

export interface SVGProperties
  extends SVGPropertiesComplete,
    SVGPropertiesLossy {}
