import {ExtraGlamorousProps} from './glamorous-component'
import {
  CSSPropertiesCompleteSingle,
  CSSPropertiesPseudo,
} from './css-properties'
import {SVGPropertiesCompleteSingle} from './svg-properties'

// The file `./named-built-in-glamorous-components.d.ts` is based off this file
// and should get any updates this file does.

/*
 * FIXME:
 * Since TypeScript doesn't have
 * HTMLDetailsElement, HTMLDialogElement,
 * HTMLKeygenElement, HTMLMenuItemElement
 * Those components currently has wrong type.
 * After TypeScript add those types, plz fix this.
 * Reference: https://github.com/Microsoft/TypeScript/issues/17828
 */
export interface HTMLComponent {
  A: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Abbr: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Address: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Area: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Article: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Aside: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Audio: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  B: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Base: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Bdi: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Bdo: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Big: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Blockquote: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Body: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Br: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Button: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Canvas: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Caption: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Cite: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Code: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Col: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Colgroup: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Data: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Datalist: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Dd: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Del: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  // TypeScript doesn't have HTMLDetailsElement
  Details: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Dfn: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  // TypeScript doesn't have HTMLDialogElement
  Dialog: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Div: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Dl: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Dt: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Em: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Embed: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Fieldset: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Figcaption: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Figure: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Footer: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Form: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  H1: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  H2: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  H3: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  H4: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  H5: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  H6: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Head: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Header: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Hgroup: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Hr: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Html: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  I: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Iframe: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Img: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Input: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Ins: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Kbd: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  // TypeScript doesn't have HTMLKeygenElement
  Keygen: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Label: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Legend: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Li: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Link: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Main: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Map: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Mark: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Menu: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  // TypeScript doesn't have HTMLMenuItemElement
  Menuitem: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Meta: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Meter: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Nav: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Noscript: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Object: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Ol: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Optgroup: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Option: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Output: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  P: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Param: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Picture: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Pre: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Progress: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Q: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Rp: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Rt: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Ruby: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  S: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Samp: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Script: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Section: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Select: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Small: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Source: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Span: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Strong: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Style: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Sub: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Summary: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Sup: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Table: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Tbody: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Td: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Textarea: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Tfoot: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Th: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Thead: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Time: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Title: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Tr: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Track: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  U: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Ul: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Var: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Video: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
  Wbr: preact.FunctionalComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      JSX.HTMLAttributes
  >
}

export interface SVGComponent {
  Circle: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  ClipPath: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Defs: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Ellipse: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  G: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Image: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Line: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  LinearGradient: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Mask: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Path: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Pattern: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Polygon: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Polyline: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  RadialGradient: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Rect: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Stop: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Svg: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Text: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
  Tspan: preact.FunctionalComponent<
    SVGPropertiesCompleteSingle & ExtraGlamorousProps & JSX.SVGAttributes
  >
}
