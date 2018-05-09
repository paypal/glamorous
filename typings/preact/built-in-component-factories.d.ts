import {SVGProperties} from './svg-properties'
import {CSSProperties} from './css-properties'
import {BuiltInGlamorousComponentFactory} from './component-factory'

export type HTMLGlamorousComponentFactory<
  HTMLElement
> = BuiltInGlamorousComponentFactory<JSX.HTMLAttributes, CSSProperties>

export type SVGGlamorousComponentFactory<
  SVGElement
> = BuiltInGlamorousComponentFactory<JSX.SVGAttributes, SVGProperties>

export interface HTMLComponentFactory {
  a: HTMLGlamorousComponentFactory<HTMLAnchorElement>
  abbr: HTMLGlamorousComponentFactory<HTMLElement>
  address: HTMLGlamorousComponentFactory<HTMLElement>
  area: HTMLGlamorousComponentFactory<HTMLAreaElement>
  article: HTMLGlamorousComponentFactory<HTMLElement>
  aside: HTMLGlamorousComponentFactory<HTMLElement>
  audio: HTMLGlamorousComponentFactory<HTMLAudioElement>
  b: HTMLGlamorousComponentFactory<HTMLElement>
  base: HTMLGlamorousComponentFactory<HTMLBaseElement>
  bdi: HTMLGlamorousComponentFactory<HTMLElement>
  bdo: HTMLGlamorousComponentFactory<HTMLElement>
  big: HTMLGlamorousComponentFactory<HTMLElement>
  blockquote: HTMLGlamorousComponentFactory<HTMLElement>
  body: HTMLGlamorousComponentFactory<HTMLBodyElement>
  br: HTMLGlamorousComponentFactory<HTMLBRElement>
  button: HTMLGlamorousComponentFactory<HTMLButtonElement>
  canvas: HTMLGlamorousComponentFactory<HTMLCanvasElement>
  caption: HTMLGlamorousComponentFactory<HTMLElement>
  cite: HTMLGlamorousComponentFactory<HTMLElement>
  code: HTMLGlamorousComponentFactory<HTMLElement>
  col: HTMLGlamorousComponentFactory<HTMLTableColElement>
  colgroup: HTMLGlamorousComponentFactory<HTMLTableColElement>
  data: HTMLGlamorousComponentFactory<HTMLElement>
  datalist: HTMLGlamorousComponentFactory<HTMLDataListElement>
  dd: HTMLGlamorousComponentFactory<HTMLElement>
  del: HTMLGlamorousComponentFactory<HTMLElement>
  details: HTMLGlamorousComponentFactory<HTMLElement>
  dfn: HTMLGlamorousComponentFactory<HTMLElement>
  dialog: HTMLGlamorousComponentFactory<HTMLElement>
  div: HTMLGlamorousComponentFactory<HTMLDivElement>
  dl: HTMLGlamorousComponentFactory<HTMLDListElement>
  dt: HTMLGlamorousComponentFactory<HTMLElement>
  em: HTMLGlamorousComponentFactory<HTMLElement>
  embed: HTMLGlamorousComponentFactory<HTMLEmbedElement>
  fieldset: HTMLGlamorousComponentFactory<HTMLFieldSetElement>
  figcaption: HTMLGlamorousComponentFactory<HTMLElement>
  figure: HTMLGlamorousComponentFactory<HTMLElement>
  footer: HTMLGlamorousComponentFactory<HTMLElement>
  form: HTMLGlamorousComponentFactory<HTMLFormElement>
  h1: HTMLGlamorousComponentFactory<HTMLHeadingElement>
  h2: HTMLGlamorousComponentFactory<HTMLHeadingElement>
  h3: HTMLGlamorousComponentFactory<HTMLHeadingElement>
  h4: HTMLGlamorousComponentFactory<HTMLHeadingElement>
  h5: HTMLGlamorousComponentFactory<HTMLHeadingElement>
  h6: HTMLGlamorousComponentFactory<HTMLHeadingElement>
  head: HTMLGlamorousComponentFactory<HTMLHeadElement>
  header: HTMLGlamorousComponentFactory<HTMLElement>
  hgroup: HTMLGlamorousComponentFactory<HTMLElement>
  hr: HTMLGlamorousComponentFactory<HTMLHRElement>
  html: HTMLGlamorousComponentFactory<HTMLHtmlElement>
  i: HTMLGlamorousComponentFactory<HTMLElement>
  iframe: HTMLGlamorousComponentFactory<HTMLIFrameElement>
  img: HTMLGlamorousComponentFactory<HTMLImageElement>
  input: HTMLGlamorousComponentFactory<HTMLInputElement>
  ins: HTMLGlamorousComponentFactory<HTMLModElement>
  kbd: HTMLGlamorousComponentFactory<HTMLElement>
  keygen: HTMLGlamorousComponentFactory<HTMLElement>
  label: HTMLGlamorousComponentFactory<HTMLLabelElement>
  legend: HTMLGlamorousComponentFactory<HTMLLegendElement>
  li: HTMLGlamorousComponentFactory<HTMLLIElement>
  link: HTMLGlamorousComponentFactory<HTMLLinkElement>
  main: HTMLGlamorousComponentFactory<HTMLElement>
  map: HTMLGlamorousComponentFactory<HTMLMapElement>
  mark: HTMLGlamorousComponentFactory<HTMLElement>
  menu: HTMLGlamorousComponentFactory<HTMLElement>
  menuitem: HTMLGlamorousComponentFactory<HTMLElement>
  meta: HTMLGlamorousComponentFactory<HTMLMetaElement>
  meter: HTMLGlamorousComponentFactory<HTMLElement>
  nav: HTMLGlamorousComponentFactory<HTMLElement>
  noscript: HTMLGlamorousComponentFactory<HTMLElement>
  object: HTMLGlamorousComponentFactory<HTMLObjectElement>
  ol: HTMLGlamorousComponentFactory<HTMLOListElement>
  optgroup: HTMLGlamorousComponentFactory<HTMLOptGroupElement>
  option: HTMLGlamorousComponentFactory<HTMLOptionElement>
  output: HTMLGlamorousComponentFactory<HTMLElement>
  p: HTMLGlamorousComponentFactory<HTMLParagraphElement>
  param: HTMLGlamorousComponentFactory<HTMLParamElement>
  picture: HTMLGlamorousComponentFactory<HTMLElement>
  pre: HTMLGlamorousComponentFactory<HTMLPreElement>
  progress: HTMLGlamorousComponentFactory<HTMLProgressElement>
  q: HTMLGlamorousComponentFactory<HTMLQuoteElement>
  rp: HTMLGlamorousComponentFactory<HTMLElement>
  rt: HTMLGlamorousComponentFactory<HTMLElement>
  ruby: HTMLGlamorousComponentFactory<HTMLElement>
  s: HTMLGlamorousComponentFactory<HTMLElement>
  samp: HTMLGlamorousComponentFactory<HTMLElement>
  script: HTMLGlamorousComponentFactory<HTMLElement>
  section: HTMLGlamorousComponentFactory<HTMLElement>
  select: HTMLGlamorousComponentFactory<HTMLSelectElement>
  small: HTMLGlamorousComponentFactory<HTMLElement>
  source: HTMLGlamorousComponentFactory<HTMLSourceElement>
  span: HTMLGlamorousComponentFactory<HTMLSpanElement>
  strong: HTMLGlamorousComponentFactory<HTMLElement>
  style: HTMLGlamorousComponentFactory<HTMLStyleElement>
  sub: HTMLGlamorousComponentFactory<HTMLElement>
  summary: HTMLGlamorousComponentFactory<HTMLElement>
  sup: HTMLGlamorousComponentFactory<HTMLElement>
  table: HTMLGlamorousComponentFactory<HTMLTableElement>
  tbody: HTMLGlamorousComponentFactory<HTMLTableSectionElement>
  td: HTMLGlamorousComponentFactory<HTMLTableDataCellElement>
  textarea: HTMLGlamorousComponentFactory<HTMLTextAreaElement>
  tfoot: HTMLGlamorousComponentFactory<HTMLTableSectionElement>
  th: HTMLGlamorousComponentFactory<HTMLTableHeaderCellElement>
  thead: HTMLGlamorousComponentFactory<HTMLTableSectionElement>
  time: HTMLGlamorousComponentFactory<HTMLElement>
  title: HTMLGlamorousComponentFactory<HTMLTitleElement>
  tr: HTMLGlamorousComponentFactory<HTMLTableRowElement>
  track: HTMLGlamorousComponentFactory<HTMLTrackElement>
  u: HTMLGlamorousComponentFactory<HTMLElement>
  ul: HTMLGlamorousComponentFactory<HTMLUListElement>
  var: HTMLGlamorousComponentFactory<HTMLElement>
  video: HTMLGlamorousComponentFactory<HTMLVideoElement>
  wbr: HTMLGlamorousComponentFactory<HTMLElement>
}

export type HTMLKey = keyof HTMLComponentFactory

export interface SVGComponentFactory {
  circle: SVGGlamorousComponentFactory<SVGCircleElement>
  clipPath: SVGGlamorousComponentFactory<SVGClipPathElement>
  defs: SVGGlamorousComponentFactory<SVGDefsElement>
  ellipse: SVGGlamorousComponentFactory<SVGEllipseElement>
  g: SVGGlamorousComponentFactory<SVGGElement>
  image: SVGGlamorousComponentFactory<SVGImageElement>
  line: SVGGlamorousComponentFactory<SVGLineElement>
  linearGradient: SVGGlamorousComponentFactory<SVGLinearGradientElement>
  mask: SVGGlamorousComponentFactory<SVGMaskElement>
  path: SVGGlamorousComponentFactory<SVGPathElement>
  pattern: SVGGlamorousComponentFactory<SVGPatternElement>
  polygon: SVGGlamorousComponentFactory<SVGPolygonElement>
  polyline: SVGGlamorousComponentFactory<SVGPolylineElement>
  radialGradient: SVGGlamorousComponentFactory<SVGRadialGradientElement>
  rect: SVGGlamorousComponentFactory<SVGRectElement>
  stop: SVGGlamorousComponentFactory<SVGStopElement>
  svg: SVGGlamorousComponentFactory<SVGSVGElement>
  text: SVGGlamorousComponentFactory<SVGTextElement>
  tspan: SVGGlamorousComponentFactory<SVGTSpanElement>
}

export type SVGKey = keyof SVGComponentFactory
