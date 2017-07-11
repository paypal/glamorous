// @flow
import type {Theme} from '../theme-provider'
import type {CSSProperties} from './CSSProperties'

type StyleFunction = (
  {[key: string]: any}, // props
  Theme, // theme
  ?{[key: string]: any}, // context
) => string | CSSProperties;

// TODO: Is null okay here?
export type Style =
  | StyleFunction
  | string
  | CSSProperties
  | Array<Style>
  | null;
