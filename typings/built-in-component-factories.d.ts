import { SVGProperties } from './svg-properties'
import { CSSProperties } from './css-properties'
import {
  BuiltInGlamorousComponentFactory,
} from './component-factory'

export type HTMLGlamorousComponentFactory<
  HTMLElement,
  Properties
> = BuiltInGlamorousComponentFactory<React.HTMLProps<HTMLElement>, Properties>

export type SVGGlamorousComponentFactory<
  SVGElement,
  Attributes
> = BuiltInGlamorousComponentFactory<React.SVGAttributes<SVGElement>, Attributes>

export interface HTMLComponentFactory {
  a: HTMLGlamorousComponentFactory<HTMLAnchorElement, CSSProperties>
  abbr: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  address: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  area: HTMLGlamorousComponentFactory<HTMLAreaElement, CSSProperties>
  article: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  aside: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  audio: HTMLGlamorousComponentFactory<HTMLAudioElement, CSSProperties>
  b: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  base: HTMLGlamorousComponentFactory<HTMLBaseElement, CSSProperties>
  bdi: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  bdo: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  big: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  blockquote: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  body: HTMLGlamorousComponentFactory<HTMLBodyElement, CSSProperties>
  br: HTMLGlamorousComponentFactory<HTMLBRElement, CSSProperties>
  button: HTMLGlamorousComponentFactory<HTMLButtonElement, CSSProperties>
  canvas: HTMLGlamorousComponentFactory<HTMLCanvasElement, CSSProperties>
  caption: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  cite: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  code: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  col: HTMLGlamorousComponentFactory<HTMLTableColElement, CSSProperties>
  colgroup: HTMLGlamorousComponentFactory<HTMLTableColElement, CSSProperties>
  data: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  datalist: HTMLGlamorousComponentFactory<HTMLDataListElement, CSSProperties>
  dd: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  del: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  details: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  dfn: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  dialog: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  div: HTMLGlamorousComponentFactory<HTMLDivElement, CSSProperties>
  dl: HTMLGlamorousComponentFactory<HTMLDListElement, CSSProperties>
  dt: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  em: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  embed: HTMLGlamorousComponentFactory<HTMLEmbedElement, CSSProperties>
  fieldset: HTMLGlamorousComponentFactory<HTMLFieldSetElement, CSSProperties>
  figcaption: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  figure: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  footer: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  form: HTMLGlamorousComponentFactory<HTMLFormElement, CSSProperties>
  h1: HTMLGlamorousComponentFactory<HTMLHeadingElement, CSSProperties>
  h2: HTMLGlamorousComponentFactory<HTMLHeadingElement, CSSProperties>
  h3: HTMLGlamorousComponentFactory<HTMLHeadingElement, CSSProperties>
  h4: HTMLGlamorousComponentFactory<HTMLHeadingElement, CSSProperties>
  h5: HTMLGlamorousComponentFactory<HTMLHeadingElement, CSSProperties>
  h6: HTMLGlamorousComponentFactory<HTMLHeadingElement, CSSProperties>
  head: HTMLGlamorousComponentFactory<HTMLHeadElement, CSSProperties>
  header: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  hgroup: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  hr: HTMLGlamorousComponentFactory<HTMLHRElement, CSSProperties>
  html: HTMLGlamorousComponentFactory<HTMLHtmlElement, CSSProperties>
  i: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  iframe: HTMLGlamorousComponentFactory<HTMLIFrameElement, CSSProperties>
  img: HTMLGlamorousComponentFactory<HTMLImageElement, CSSProperties>
  input: HTMLGlamorousComponentFactory<HTMLInputElement, CSSProperties>
  ins: HTMLGlamorousComponentFactory<HTMLModElement, CSSProperties>
  kbd: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  keygen: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  label: HTMLGlamorousComponentFactory<HTMLLabelElement, CSSProperties>
  legend: HTMLGlamorousComponentFactory<HTMLLegendElement, CSSProperties>
  li: HTMLGlamorousComponentFactory<HTMLLIElement, CSSProperties>
  link: HTMLGlamorousComponentFactory<HTMLLinkElement, CSSProperties>
  main: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  map: HTMLGlamorousComponentFactory<HTMLMapElement, CSSProperties>
  mark: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  menu: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  menuitem: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  meta: HTMLGlamorousComponentFactory<HTMLMetaElement, CSSProperties>
  meter: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  nav: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  noscript: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  object: HTMLGlamorousComponentFactory<HTMLObjectElement, CSSProperties>
  ol: HTMLGlamorousComponentFactory<HTMLOListElement, CSSProperties>
  optgroup: HTMLGlamorousComponentFactory<HTMLOptGroupElement, CSSProperties>
  option: HTMLGlamorousComponentFactory<HTMLOptionElement, CSSProperties>
  output: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  p: HTMLGlamorousComponentFactory<HTMLParagraphElement, CSSProperties>
  param: HTMLGlamorousComponentFactory<HTMLParamElement, CSSProperties>
  picture: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  pre: HTMLGlamorousComponentFactory<HTMLPreElement, CSSProperties>
  progress: HTMLGlamorousComponentFactory<HTMLProgressElement, CSSProperties>
  q: HTMLGlamorousComponentFactory<HTMLQuoteElement, CSSProperties>
  rp: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  rt: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  ruby: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  s: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  samp: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  script: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  section: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  select: HTMLGlamorousComponentFactory<HTMLSelectElement, CSSProperties>
  small: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  source: HTMLGlamorousComponentFactory<HTMLSourceElement, CSSProperties>
  span: HTMLGlamorousComponentFactory<HTMLSpanElement, CSSProperties>
  strong: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  style: HTMLGlamorousComponentFactory<HTMLStyleElement, CSSProperties>
  sub: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  summary: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  sup: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  table: HTMLGlamorousComponentFactory<HTMLTableElement, CSSProperties>
  tbody: HTMLGlamorousComponentFactory<HTMLTableSectionElement, CSSProperties>
  td: HTMLGlamorousComponentFactory<HTMLTableDataCellElement, CSSProperties>
  textarea: HTMLGlamorousComponentFactory<HTMLTextAreaElement, CSSProperties>
  tfoot: HTMLGlamorousComponentFactory<HTMLTableSectionElement, CSSProperties>
  th: HTMLGlamorousComponentFactory<HTMLTableHeaderCellElement, CSSProperties>
  thead: HTMLGlamorousComponentFactory<HTMLTableSectionElement, CSSProperties>
  time: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  title: HTMLGlamorousComponentFactory<HTMLTitleElement, CSSProperties>
  tr: HTMLGlamorousComponentFactory<HTMLTableRowElement, CSSProperties>
  track: HTMLGlamorousComponentFactory<HTMLTrackElement, CSSProperties>
  u: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  ul: HTMLGlamorousComponentFactory<HTMLUListElement, CSSProperties>
  "var": HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
  video: HTMLGlamorousComponentFactory<HTMLVideoElement, CSSProperties>
  wbr: HTMLGlamorousComponentFactory<HTMLElement, CSSProperties>
}

export type HTMLKey = keyof HTMLComponentFactory

export interface SVGComponentFactory {
  circle: SVGGlamorousComponentFactory<SVGCircleElement, SVGProperties>
  clipPath: SVGGlamorousComponentFactory<SVGClipPathElement, SVGProperties>
  defs: SVGGlamorousComponentFactory<SVGDefsElement, SVGProperties>
  ellipse: SVGGlamorousComponentFactory<SVGEllipseElement, SVGProperties>
  g: SVGGlamorousComponentFactory<SVGGElement, SVGProperties>
  image: SVGGlamorousComponentFactory<SVGImageElement, SVGProperties>
  line: SVGGlamorousComponentFactory<SVGLineElement, SVGProperties>
  linearGradient: SVGGlamorousComponentFactory<SVGLinearGradientElement, SVGProperties>
  mask: SVGGlamorousComponentFactory<SVGMaskElement, SVGProperties>
  path: SVGGlamorousComponentFactory<SVGPathElement, SVGProperties>
  pattern: SVGGlamorousComponentFactory<SVGPatternElement, SVGProperties>
  polygon: SVGGlamorousComponentFactory<SVGPolygonElement, SVGProperties>
  polyline: SVGGlamorousComponentFactory<SVGPolylineElement, SVGProperties>
  radialGradient: SVGGlamorousComponentFactory<SVGRadialGradientElement, SVGProperties>
  rect: SVGGlamorousComponentFactory<SVGRectElement, SVGProperties>
  stop: SVGGlamorousComponentFactory<SVGStopElement, SVGProperties>
  svg: SVGGlamorousComponentFactory<SVGSVGElement, SVGProperties>
  text: SVGGlamorousComponentFactory<SVGTextElement, SVGProperties>
  tspan: SVGGlamorousComponentFactory<SVGTSpanElement, SVGProperties>
}

export type SVGKey = keyof SVGComponentFactory
