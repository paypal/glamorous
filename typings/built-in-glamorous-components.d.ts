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
  A: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLAnchorElement>
  >
  Abbr: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Address: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Area: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLAreaElement>
  >
  Article: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Aside: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Audio: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLAudioElement>
  >
  B: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Base: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLBaseElement>
  >
  Bdi: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Bdo: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Big: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Blockquote: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLQuoteElement>
  >
  Body: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLBodyElement>
  >
  Br: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLBRElement>
  >
  Button: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLButtonElement>
  >
  Canvas: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLCanvasElement>
  >
  Caption: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableCaptionElement>
  >
  Cite: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Code: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Col: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableColElement>
  >
  Colgroup: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableColElement>
  >
  Data: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLDataElement>
  >
  Datalist: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLDataListElement>
  >
  Dd: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Del: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLModElement>
  >
  // TypeScript doesn't have HTMLDetailsElement
  Details: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Dfn: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  // TypeScript doesn't have HTMLDialogElement
  Dialog: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Div: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLDivElement>
  >
  Dl: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLDListElement>
  >
  Dt: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Em: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Embed: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLEmbedElement>
  >
  Fieldset: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLFieldSetElement>
  >
  Figcaption: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Figure: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Footer: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Form: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLFormElement>
  >
  H1: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLHeadingElement>
  >
  H2: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLHeadingElement>
  >
  H3: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLHeadingElement>
  >
  H4: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLHeadingElement>
  >
  H5: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLHeadingElement>
  >
  H6: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLHeadingElement>
  >
  Head: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLHeadElement>
  >
  Header: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Hgroup: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Hr: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLHRElement>
  >
  Html: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLHtmlElement>
  >
  I: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Iframe: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLIFrameElement>
  >
  Img: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLImageElement>
  >
  Input: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLInputElement>
  >
  Ins: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLModElement>
  >
  Kbd: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  // TypeScript doesn't have HTMLKeygenElement
  Keygen: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Label: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLLabelElement>
  >
  Legend: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLLegendElement>
  >
  Li: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLLIElement>
  >
  Link: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLLinkElement>
  >
  Main: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Map: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLMapElement>
  >
  Mark: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Menu: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLMenuElement>
  >
  // TypeScript doesn't have HTMLMenuItemElement
  Menuitem: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Meta: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLMetaElement>
  >
  Meter: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLMeterElement>
  >
  Nav: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Noscript: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Object: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLObjectElement>
  >
  Ol: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLOListElement>
  >
  Optgroup: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLOptGroupElement>
  >
  Option: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLOptionElement>
  >
  Output: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLOutputElement>
  >
  P: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLParagraphElement>
  >
  Param: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLParamElement>
  >
  Picture: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLPictureElement>
  >
  Pre: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLPreElement>
  >
  Progress: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLProgressElement>
  >
  Q: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLQuoteElement>
  >
  Rp: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Rt: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Ruby: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  S: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Samp: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Script: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLScriptElement>
  >
  Section: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Select: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLSelectElement>
  >
  Small: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Source: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLSourceElement>
  >
  Span: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLSpanElement>
  >
  Strong: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Style: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLStyleElement>
  >
  Sub: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Summary: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Sup: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Table: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableElement>
  >
  Tbody: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableSectionElement>
  >
  Td: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableDataCellElement>
  >
  Textarea: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTextAreaElement>
  >
  Tfoot: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableSectionElement>
  >
  Th: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableHeaderCellElement>
  >
  Thead: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableSectionElement>
  >
  Time: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTimeElement>
  >
  Title: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTitleElement>
  >
  Tr: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableRowElement>
  >
  Track: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTrackElement>
  >
  U: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Ul: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLUListElement>
  >
  Var: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
  Video: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLVideoElement>
  >
  Wbr: React.StatelessComponent<
    CSSPropertiesCompleteSingle &
      CSSPropertiesPseudo &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLElement>
  >
}

export interface SVGComponent {
  Circle: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGCircleElement>
  >
  ClipPath: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGClipPathElement>
  >
  Defs: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGDefsElement>
  >
  Ellipse: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGEllipseElement>
  >
  G: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGGElement>
  >
  Image: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGImageElement>
  >
  Line: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGLineElement>
  >
  LinearGradient: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGLinearGradientElement>
  >
  Mask: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGMaskElement>
  >
  Path: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGPathElement>
  >
  Pattern: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGPatternElement>
  >
  Polygon: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGPolygonElement>
  >
  Polyline: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGPolylineElement>
  >
  RadialGradient: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGRadialGradientElement>
  >
  Rect: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGRectElement>
  >
  Stop: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGStopElement>
  >
  Svg: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGSVGElement>
  >
  Text: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGTextElement>
  >
  Tspan: React.StatelessComponent<
    SVGPropertiesCompleteSingle &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGTSpanElement>
  >
}
