import * as CSS from 'csstype'
import {SingleOrArray} from './helpers'

export interface CSSPropertiesCompleteSingle
  extends CSS.Properties<number | string> {}

export type CSSPropertiesPseudo = {[K in CSS.Pseudos]?: CSSProperties}

type CSSPropertiesComplete = SingleOrArray<
  CSSPropertiesCompleteSingle,
  keyof CSSPropertiesCompleteSingle
>

export interface CSSPropertiesLossy {
  [propertyName: string]:
    | string
    | number
    | CSSPropertiesComplete
    | undefined
    | Array<CSSPropertiesComplete[keyof CSSPropertiesComplete]>
    | CSSPropertiesLossy
}

export interface CSSProperties
  extends CSSPropertiesComplete,
    CSSPropertiesPseudo,
    CSSPropertiesLossy {}

export type CSSPropertiesRecursive =
  | CSSProperties
  | CSSPropertiesArray
  | CSSFunction

// TODO: This could be made generic. Issue PR if you're so inclined!
export interface CSSFunction {
  (props: {}): CSSPropertiesRecursive
}

export interface CSSPropertiesArray extends Array<CSSPropertiesRecursive> {}
