import { CSSProperties } from './css-properties'

/**
* `glamorousComponentFactory` returns a ComponentClass
*
* @see {@link https://github.com/paypal/glamorous/blob/master/src/create-glamorous.js#L28-L131}
*/

export interface ExtraGlamorousProps {
  innerRef?: (instance: any) => void;
  css?: CSSProperties;
}

export type GlamorousComponent<ElementProps> = React.ComponentClass<
  ElementProps & ExtraGlamorousProps
>