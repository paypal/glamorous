import {ExtraGlamorousProps} from './glamorous-component'
import {CSSProperties} from './css-properties'

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
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLAnchorElement>
  >
  Abbr: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Address: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Area: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLAreaElement>
  >
  Article: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Aside: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Audio: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLAudioElement>
  >
  B: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Base: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLBaseElement>
  >
  Bdi: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Bdo: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Big: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Blockquote: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLQuoteElement>
  >
  Body: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLBodyElement>
  >
  Br: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLBRElement>
  >
  Button: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLButtonElement>
  >
  Canvas: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLCanvasElement>
  >
  Caption: React.StatelessComponent<
    CSSProperties &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableCaptionElement>
  >
  Cite: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Code: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Col: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLTableColElement>
  >
  Colgroup: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLTableColElement>
  >
  Data: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLDataElement>
  >
  Datalist: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLDataListElement>
  >
  Dd: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Del: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLModElement>
  >
  // TypeScript doesn't have HTMLDetailsElement
  Details: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Dfn: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  // TypeScript doesn't have HTMLDialogElement
  Dialog: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Div: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLDivElement>
  >
  Dl: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLDListElement>
  >
  Dt: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Em: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Embed: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLEmbedElement>
  >
  Fieldset: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLFieldSetElement>
  >
  Figcaption: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Figure: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Footer: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Form: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLFormElement>
  >
  H1: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLHeadingElement>
  >
  H2: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLHeadingElement>
  >
  H3: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLHeadingElement>
  >
  H4: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLHeadingElement>
  >
  H5: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLHeadingElement>
  >
  H6: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLHeadingElement>
  >
  Head: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLHeadElement>
  >
  Header: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Hgroup: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Hr: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLHRElement>
  >
  Html: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLHtmlElement>
  >
  I: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Iframe: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLIFrameElement>
  >
  Img: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLImageElement>
  >
  Input: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLInputElement>
  >
  Ins: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLModElement>
  >
  Kbd: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  // TypeScript doesn't have HTMLKeygenElement
  Keygen: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Label: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLLabelElement>
  >
  Legend: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLLegendElement>
  >
  Li: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLLIElement>
  >
  Link: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLLinkElement>
  >
  Main: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Map: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLMapElement>
  >
  Mark: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Menu: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLMenuElement>
  >
  // TypeScript doesn't have HTMLMenuItemElement
  Menuitem: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Meta: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLMetaElement>
  >
  Meter: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLMeterElement>
  >
  Nav: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Noscript: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Object: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLObjectElement>
  >
  Ol: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLOListElement>
  >
  Optgroup: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLOptGroupElement>
  >
  Option: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLOptionElement>
  >
  Output: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLOutputElement>
  >
  P: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLParagraphElement>
  >
  Param: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLParamElement>
  >
  Picture: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLPictureElement>
  >
  Pre: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLPreElement>
  >
  Progress: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLProgressElement>
  >
  Q: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLQuoteElement>
  >
  Rp: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Rt: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Ruby: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  S: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Samp: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Script: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLScriptElement>
  >
  Section: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Select: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLSelectElement>
  >
  Small: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Source: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLSourceElement>
  >
  Span: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLSpanElement>
  >
  Strong: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Style: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLStyleElement>
  >
  Sub: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Summary: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Sup: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Table: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLTableElement>
  >
  Tbody: React.StatelessComponent<
    CSSProperties &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableSectionElement>
  >
  Td: React.StatelessComponent<
    CSSProperties &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableDataCellElement>
  >
  Textarea: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLTextAreaElement>
  >
  Tfoot: React.StatelessComponent<
    CSSProperties &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableSectionElement>
  >
  Th: React.StatelessComponent<
    CSSProperties &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableHeaderCellElement>
  >
  Thead: React.StatelessComponent<
    CSSProperties &
      ExtraGlamorousProps &
      React.HTMLProps<HTMLTableSectionElement>
  >
  Time: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLTimeElement>
  >
  Title: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLTitleElement>
  >
  Tr: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLTableRowElement>
  >
  Track: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLTrackElement>
  >
  U: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Ul: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLUListElement>
  >
  Var: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
  Video: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLVideoElement>
  >
  Wbr: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.HTMLProps<HTMLElement>
  >
}

export interface SVGComponent {
  Circle: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGCircleElement>
  >
  ClipPath: React.StatelessComponent<
    CSSProperties &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGClipPathElement>
  >
  Defs: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGDefsElement>
  >
  Ellipse: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGEllipseElement>
  >
  G: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGGElement>
  >
  Image: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGImageElement>
  >
  Line: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGLineElement>
  >
  LinearGradient: React.StatelessComponent<
    CSSProperties &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGLinearGradientElement>
  >
  Mask: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGMaskElement>
  >
  Path: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGPathElement>
  >
  Pattern: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGPatternElement>
  >
  Polygon: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGPolygonElement>
  >
  Polyline: React.StatelessComponent<
    CSSProperties &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGPolylineElement>
  >
  RadialGradient: React.StatelessComponent<
    CSSProperties &
      ExtraGlamorousProps &
      React.SVGAttributes<SVGRadialGradientElement>
  >
  Rect: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGRectElement>
  >
  Stop: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGStopElement>
  >
  Svg: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGSVGElement>
  >
  Text: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGTextElement>
  >
  Tspan: React.StatelessComponent<
    CSSProperties & ExtraGlamorousProps & React.SVGAttributes<SVGTSpanElement>
  >
}
