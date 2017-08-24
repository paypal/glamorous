import { ExtraGlamorousProps } from './glamorous-component';
import { CSSProperties } from './css-properties';
import { Overwrite } from './helpers';

type HTMLComponentProp<T extends HTMLElement> = Overwrite<
  CSSProperties & ExtraGlamorousProps & React.HTMLProps<T>,
  { children: React.ReactChild }
>;

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
  A: React.StatelessComponent<HTMLComponentProp<HTMLAnchorElement>>
  Abbr: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Address: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Area: React.StatelessComponent<HTMLComponentProp<HTMLAreaElement>>
  Article: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Aside: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Audio: React.StatelessComponent<HTMLComponentProp<HTMLAudioElement>>
  B: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Base: React.StatelessComponent<HTMLComponentProp<HTMLBaseElement>>
  Bdi: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Bdo: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Big: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Blockquote: React.StatelessComponent<HTMLComponentProp<HTMLQuoteElement>>
  Body: React.StatelessComponent<HTMLComponentProp<HTMLBodyElement>>
  Br: React.StatelessComponent<HTMLComponentProp<HTMLBRElement>>
  Button: React.StatelessComponent<HTMLComponentProp<HTMLButtonElement>>
  Canvas: React.StatelessComponent<HTMLComponentProp<HTMLCanvasElement>>
  Caption: React.StatelessComponent<HTMLComponentProp<HTMLTableCaptionElement>>
  Cite: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Code: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Col: React.StatelessComponent<HTMLComponentProp<HTMLTableColElement>>
  Colgroup: React.StatelessComponent<HTMLComponentProp<HTMLTableColElement>>
  Data: React.StatelessComponent<HTMLComponentProp<HTMLDataElement>>
  Datalist: React.StatelessComponent<HTMLComponentProp<HTMLDataListElement>>
  Dd: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Del: React.StatelessComponent<HTMLComponentProp<HTMLModElement>>
  // TypeScript doesn't have HTMLDetailsElement
  Details: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Dfn: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  // TypeScript doesn't have HTMLDialogElement
  Dialog: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Div: React.StatelessComponent<HTMLComponentProp<HTMLDivElement>>
  Dl: React.StatelessComponent<HTMLComponentProp<HTMLDListElement>>
  Dt: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Em: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Embed: React.StatelessComponent<HTMLComponentProp<HTMLEmbedElement>>
  Fieldset: React.StatelessComponent<HTMLComponentProp<HTMLFieldSetElement>>
  Figcaption: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Figure: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Footer: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Form: React.StatelessComponent<HTMLComponentProp<HTMLFormElement>>
  H1: React.StatelessComponent<HTMLComponentProp<HTMLHeadingElement>>
  H2: React.StatelessComponent<HTMLComponentProp<HTMLHeadingElement>>
  H3: React.StatelessComponent<HTMLComponentProp<HTMLHeadingElement>>
  H4: React.StatelessComponent<HTMLComponentProp<HTMLHeadingElement>>
  H5: React.StatelessComponent<HTMLComponentProp<HTMLHeadingElement>>
  H6: React.StatelessComponent<HTMLComponentProp<HTMLHeadingElement>>
  Head: React.StatelessComponent<HTMLComponentProp<HTMLHeadElement>>
  Header: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Hgroup: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Hr: React.StatelessComponent<HTMLComponentProp<HTMLHRElement>>
  Html: React.StatelessComponent<HTMLComponentProp<HTMLHtmlElement>>
  I: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Iframe: React.StatelessComponent<HTMLComponentProp<HTMLIFrameElement>>
  Img: React.StatelessComponent<HTMLComponentProp<HTMLImageElement>>
  Input: React.StatelessComponent<HTMLComponentProp<HTMLInputElement>>
  Ins: React.StatelessComponent<HTMLComponentProp<HTMLModElement>>
  Kbd: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  // TypeScript doesn't have HTMLKeygenElement
  Keygen: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Label: React.StatelessComponent<HTMLComponentProp<HTMLLabelElement>>
  Legend: React.StatelessComponent<HTMLComponentProp<HTMLLegendElement>>
  Li: React.StatelessComponent<HTMLComponentProp<HTMLLIElement>>
  Link: React.StatelessComponent<HTMLComponentProp<HTMLLinkElement>>
  Main: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Map: React.StatelessComponent<HTMLComponentProp<HTMLMapElement>>
  Mark: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Menu: React.StatelessComponent<HTMLComponentProp<HTMLMenuElement>>
  // TypeScript doesn't have HTMLMenuItemElement
  Menuitem: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Meta: React.StatelessComponent<HTMLComponentProp<HTMLMetaElement>>
  Meter: React.StatelessComponent<HTMLComponentProp<HTMLMeterElement>>
  Nav: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Noscript: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Object: React.StatelessComponent<HTMLComponentProp<HTMLObjectElement>>
  Ol: React.StatelessComponent<HTMLComponentProp<HTMLOListElement>>
  Optgroup: React.StatelessComponent<HTMLComponentProp<HTMLOptGroupElement>>
  Option: React.StatelessComponent<HTMLComponentProp<HTMLOptionElement>>
  Output: React.StatelessComponent<HTMLComponentProp<HTMLOutputElement>>
  P: React.StatelessComponent<HTMLComponentProp<HTMLParagraphElement>>
  Param: React.StatelessComponent<HTMLComponentProp<HTMLParamElement>>
  Picture: React.StatelessComponent<HTMLComponentProp<HTMLPictureElement>>
  Pre: React.StatelessComponent<HTMLComponentProp<HTMLPreElement>>
  Progress: React.StatelessComponent<HTMLComponentProp<HTMLProgressElement>>
  Q: React.StatelessComponent<HTMLComponentProp<HTMLQuoteElement>>
  Rp: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Rt: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Ruby: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  S: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Samp: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Script: React.StatelessComponent<HTMLComponentProp<HTMLScriptElement>>
  Section: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Select: React.StatelessComponent<HTMLComponentProp<HTMLSelectElement>>
  Small: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Source: React.StatelessComponent<HTMLComponentProp<HTMLSourceElement>>
  Span: React.StatelessComponent<HTMLComponentProp<HTMLSpanElement>>
  Strong: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Style: React.StatelessComponent<HTMLComponentProp<HTMLStyleElement>>
  Sub: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Summary: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
    Sup: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Table: React.StatelessComponent<HTMLComponentProp<HTMLTableElement>>
  Tbody: React.StatelessComponent<HTMLComponentProp<HTMLTableSectionElement>>
  Td: React.StatelessComponent<HTMLComponentProp<HTMLTableDataCellElement>>
  Textarea: React.StatelessComponent<HTMLComponentProp<HTMLTextAreaElement>>
  Tfoot: React.StatelessComponent<HTMLComponentProp<HTMLTableSectionElement>>
  Th: React.StatelessComponent<HTMLComponentProp<HTMLTableHeaderCellElement>>
  Thead: React.StatelessComponent<HTMLComponentProp<HTMLTableSectionElement>>
  Time: React.StatelessComponent<HTMLComponentProp<HTMLTimeElement>>
  Title: React.StatelessComponent<HTMLComponentProp<HTMLTitleElement>>
  Tr: React.StatelessComponent<HTMLComponentProp<HTMLTableRowElement>>
  Track: React.StatelessComponent<HTMLComponentProp<HTMLTrackElement>>
  U: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Ul: React.StatelessComponent<HTMLComponentProp<HTMLUListElement>>
  Var: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
  Video: React.StatelessComponent<HTMLComponentProp<HTMLVideoElement>>
  Wbr: React.StatelessComponent<HTMLComponentProp<HTMLElement>>
}

type SVGComponentProp<T extends SVGElement> = Overwrite<
  CSSProperties & ExtraGlamorousProps & React.SVGAttributes<T>,
  { children: React.ReactChild }
>;

export interface SVGComponent {
  Circle: React.StatelessComponent<SVGComponentProp<SVGCircleElement>>;
  ClipPath: React.StatelessComponent<SVGComponentProp<SVGClipPathElement>>;
  Defs: React.StatelessComponent<SVGComponentProp<SVGDefsElement>>;
  Ellipse: React.StatelessComponent<SVGComponentProp<SVGEllipseElement>>;
  G: React.StatelessComponent<SVGComponentProp<SVGGElement>>;
  Image: React.StatelessComponent<SVGComponentProp<SVGImageElement>>;
  Line: React.StatelessComponent<SVGComponentProp<SVGLineElement>>;
  LinearGradient: React.StatelessComponent<SVGComponentProp<SVGLinearGradientElement>>;
  Mask: React.StatelessComponent<SVGComponentProp<SVGMaskElement>>;
  Path: React.StatelessComponent<SVGComponentProp<SVGPathElement>>;
  Pattern: React.StatelessComponent<SVGComponentProp<SVGPatternElement>>;
  Polygon: React.StatelessComponent<SVGComponentProp<SVGPolygonElement>>;
  Polyline: React.StatelessComponent<SVGComponentProp<SVGPolylineElement>>;
  RadialGradient: React.StatelessComponent<SVGComponentProp<SVGRadialGradientElement>>;
  Rect: React.StatelessComponent<SVGComponentProp<SVGRectElement>>;
  Stop: React.StatelessComponent<SVGComponentProp<SVGStopElement>>;
  Svg: React.StatelessComponent<SVGComponentProp<SVGSVGElement>>;
  Text: React.StatelessComponent<SVGComponentProp<SVGTextElement>>;
  Tspan: React.StatelessComponent<SVGComponentProp<SVGTSpanElement>>;
}
