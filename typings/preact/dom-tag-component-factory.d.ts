import {
  KeyGlamorousComponentFactory,
  GlamorousOptions,
  CSSProperties,
  SVGProperties,
  PropsAreCssOverridesGlamorousOptions,
  KeyGlamorousComponentFactoryCssOverides,
} from './glamorous'

export interface DOMTagGlamorousComponentFactory<
  Key extends keyof HTMLDomTags
> {
  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Key,
    options?: Partial<GlamorousOptions<ExternalProps, Context, DefaultProps>>,
  ): KeyGlamorousComponentFactory<
    JSX.HTMLAttributes,
    CSSProperties,
    ExternalProps,
    DefaultProps
  >

  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Key,
    options?: PropsAreCssOverridesGlamorousOptions<
      ExternalProps,
      Context,
      DefaultProps
    >,
  ): KeyGlamorousComponentFactoryCssOverides<
    JSX.HTMLAttributes,
    CSSProperties,
    ExternalProps,
    DefaultProps
  >
}

export interface SVGTagGlamorousComponentFactory<Key extends keyof SVGDomTags> {
  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Key,
    options?: Partial<GlamorousOptions<ExternalProps, Context, DefaultProps>>,
  ): KeyGlamorousComponentFactory<
    JSX.SVGAttributes,
    SVGProperties,
    ExternalProps,
    DefaultProps
  >

  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Key,
    options?: PropsAreCssOverridesGlamorousOptions<
      ExternalProps,
      Context,
      DefaultProps
    >,
  ): KeyGlamorousComponentFactoryCssOverides<
    JSX.SVGAttributes,
    SVGProperties,
    ExternalProps,
    DefaultProps
  >
}

export interface DOMTagComponentFactory
  extends DOMTagGlamorousComponentFactory<'a'>,
    DOMTagGlamorousComponentFactory<'a'>,
    DOMTagGlamorousComponentFactory<'abbr'>,
    DOMTagGlamorousComponentFactory<'address'>,
    DOMTagGlamorousComponentFactory<'area'>,
    DOMTagGlamorousComponentFactory<'article'>,
    DOMTagGlamorousComponentFactory<'aside'>,
    DOMTagGlamorousComponentFactory<'audio'>,
    DOMTagGlamorousComponentFactory<'b'>,
    DOMTagGlamorousComponentFactory<'base'>,
    DOMTagGlamorousComponentFactory<'bdi'>,
    DOMTagGlamorousComponentFactory<'bdo'>,
    DOMTagGlamorousComponentFactory<'big'>,
    DOMTagGlamorousComponentFactory<'blockquote'>,
    DOMTagGlamorousComponentFactory<'body'>,
    DOMTagGlamorousComponentFactory<'br'>,
    DOMTagGlamorousComponentFactory<'button'>,
    DOMTagGlamorousComponentFactory<'canvas'>,
    DOMTagGlamorousComponentFactory<'caption'>,
    DOMTagGlamorousComponentFactory<'cite'>,
    DOMTagGlamorousComponentFactory<'code'>,
    DOMTagGlamorousComponentFactory<'col'>,
    DOMTagGlamorousComponentFactory<'colgroup'>,
    DOMTagGlamorousComponentFactory<'data'>,
    DOMTagGlamorousComponentFactory<'datalist'>,
    DOMTagGlamorousComponentFactory<'dd'>,
    DOMTagGlamorousComponentFactory<'del'>,
    DOMTagGlamorousComponentFactory<'details'>,
    DOMTagGlamorousComponentFactory<'dfn'>,
    DOMTagGlamorousComponentFactory<'dialog'>,
    DOMTagGlamorousComponentFactory<'div'>,
    DOMTagGlamorousComponentFactory<'dl'>,
    DOMTagGlamorousComponentFactory<'dt'>,
    DOMTagGlamorousComponentFactory<'em'>,
    DOMTagGlamorousComponentFactory<'embed'>,
    DOMTagGlamorousComponentFactory<'fieldset'>,
    DOMTagGlamorousComponentFactory<'figcaption'>,
    DOMTagGlamorousComponentFactory<'figure'>,
    DOMTagGlamorousComponentFactory<'footer'>,
    DOMTagGlamorousComponentFactory<'form'>,
    DOMTagGlamorousComponentFactory<'h1'>,
    DOMTagGlamorousComponentFactory<'h2'>,
    DOMTagGlamorousComponentFactory<'h3'>,
    DOMTagGlamorousComponentFactory<'h4'>,
    DOMTagGlamorousComponentFactory<'h5'>,
    DOMTagGlamorousComponentFactory<'h6'>,
    DOMTagGlamorousComponentFactory<'head'>,
    DOMTagGlamorousComponentFactory<'header'>,
    DOMTagGlamorousComponentFactory<'hgroup'>,
    DOMTagGlamorousComponentFactory<'hr'>,
    DOMTagGlamorousComponentFactory<'html'>,
    DOMTagGlamorousComponentFactory<'i'>,
    DOMTagGlamorousComponentFactory<'iframe'>,
    DOMTagGlamorousComponentFactory<'img'>,
    DOMTagGlamorousComponentFactory<'input'>,
    DOMTagGlamorousComponentFactory<'ins'>,
    DOMTagGlamorousComponentFactory<'kbd'>,
    DOMTagGlamorousComponentFactory<'keygen'>,
    DOMTagGlamorousComponentFactory<'label'>,
    DOMTagGlamorousComponentFactory<'legend'>,
    DOMTagGlamorousComponentFactory<'li'>,
    DOMTagGlamorousComponentFactory<'link'>,
    DOMTagGlamorousComponentFactory<'main'>,
    DOMTagGlamorousComponentFactory<'map'>,
    DOMTagGlamorousComponentFactory<'mark'>,
    DOMTagGlamorousComponentFactory<'menu'>,
    DOMTagGlamorousComponentFactory<'menuitem'>,
    DOMTagGlamorousComponentFactory<'meta'>,
    DOMTagGlamorousComponentFactory<'meter'>,
    DOMTagGlamorousComponentFactory<'nav'>,
    DOMTagGlamorousComponentFactory<'noscript'>,
    DOMTagGlamorousComponentFactory<'object'>,
    DOMTagGlamorousComponentFactory<'ol'>,
    DOMTagGlamorousComponentFactory<'optgroup'>,
    DOMTagGlamorousComponentFactory<'option'>,
    DOMTagGlamorousComponentFactory<'output'>,
    DOMTagGlamorousComponentFactory<'p'>,
    DOMTagGlamorousComponentFactory<'param'>,
    DOMTagGlamorousComponentFactory<'picture'>,
    DOMTagGlamorousComponentFactory<'pre'>,
    DOMTagGlamorousComponentFactory<'progress'>,
    DOMTagGlamorousComponentFactory<'q'>,
    DOMTagGlamorousComponentFactory<'rp'>,
    DOMTagGlamorousComponentFactory<'rt'>,
    DOMTagGlamorousComponentFactory<'ruby'>,
    DOMTagGlamorousComponentFactory<'s'>,
    DOMTagGlamorousComponentFactory<'samp'>,
    DOMTagGlamorousComponentFactory<'script'>,
    DOMTagGlamorousComponentFactory<'section'>,
    DOMTagGlamorousComponentFactory<'select'>,
    DOMTagGlamorousComponentFactory<'small'>,
    DOMTagGlamorousComponentFactory<'source'>,
    DOMTagGlamorousComponentFactory<'span'>,
    DOMTagGlamorousComponentFactory<'strong'>,
    DOMTagGlamorousComponentFactory<'style'>,
    DOMTagGlamorousComponentFactory<'sub'>,
    DOMTagGlamorousComponentFactory<'summary'>,
    DOMTagGlamorousComponentFactory<'sup'>,
    DOMTagGlamorousComponentFactory<'table'>,
    DOMTagGlamorousComponentFactory<'tbody'>,
    DOMTagGlamorousComponentFactory<'td'>,
    DOMTagGlamorousComponentFactory<'textarea'>,
    DOMTagGlamorousComponentFactory<'tfoot'>,
    DOMTagGlamorousComponentFactory<'th'>,
    DOMTagGlamorousComponentFactory<'thead'>,
    DOMTagGlamorousComponentFactory<'time'>,
    DOMTagGlamorousComponentFactory<'title'>,
    DOMTagGlamorousComponentFactory<'tr'>,
    DOMTagGlamorousComponentFactory<'track'>,
    DOMTagGlamorousComponentFactory<'u'>,
    DOMTagGlamorousComponentFactory<'ul'>,
    DOMTagGlamorousComponentFactory<'var'>,
    DOMTagGlamorousComponentFactory<'video'>,
    DOMTagGlamorousComponentFactory<'wbr'> {}

export interface SVGTagComponentFactory
  extends SVGTagGlamorousComponentFactory<'circle'>,
    SVGTagGlamorousComponentFactory<'clipPath'>,
    SVGTagGlamorousComponentFactory<'defs'>,
    SVGTagGlamorousComponentFactory<'ellipse'>,
    SVGTagGlamorousComponentFactory<'g'>,
    SVGTagGlamorousComponentFactory<'image'>,
    SVGTagGlamorousComponentFactory<'line'>,
    SVGTagGlamorousComponentFactory<'linearGradient'>,
    SVGTagGlamorousComponentFactory<'mask'>,
    SVGTagGlamorousComponentFactory<'path'>,
    SVGTagGlamorousComponentFactory<'pattern'>,
    SVGTagGlamorousComponentFactory<'polygon'>,
    SVGTagGlamorousComponentFactory<'polyline'>,
    SVGTagGlamorousComponentFactory<'radialGradient'>,
    SVGTagGlamorousComponentFactory<'rect'>,
    SVGTagGlamorousComponentFactory<'stop'>,
    SVGTagGlamorousComponentFactory<'svg'>,
    SVGTagGlamorousComponentFactory<'text'>,
    SVGTagGlamorousComponentFactory<'tspan'> {}

export interface HTMLDomTags {
  a: HTMLAnchorElement
  abbr: HTMLElement
  address: HTMLElement
  area: HTMLAreaElement
  article: HTMLElement
  aside: HTMLElement
  audio: HTMLAudioElement
  b: HTMLElement
  base: HTMLBaseElement
  bdi: HTMLElement
  bdo: HTMLElement
  big: HTMLElement
  blockquote: HTMLElement
  body: HTMLBodyElement
  br: HTMLBRElement
  button: HTMLButtonElement
  canvas: HTMLCanvasElement
  caption: HTMLElement
  cite: HTMLElement
  code: HTMLElement
  col: HTMLTableColElement
  colgroup: HTMLTableColElement
  data: HTMLElement
  datalist: HTMLDataListElement
  dd: HTMLElement
  del: HTMLElement
  details: HTMLElement
  dfn: HTMLElement
  dialog: HTMLElement
  div: HTMLDivElement
  dl: HTMLDListElement
  dt: HTMLElement
  em: HTMLElement
  embed: HTMLEmbedElement
  fieldset: HTMLFieldSetElement
  figcaption: HTMLElement
  figure: HTMLElement
  footer: HTMLElement
  form: HTMLFormElement
  h1: HTMLHeadingElement
  h2: HTMLHeadingElement
  h3: HTMLHeadingElement
  h4: HTMLHeadingElement
  h5: HTMLHeadingElement
  h6: HTMLHeadingElement
  head: HTMLHeadElement
  header: HTMLElement
  hgroup: HTMLElement
  hr: HTMLHRElement
  html: HTMLHtmlElement
  i: HTMLElement
  iframe: HTMLIFrameElement
  img: HTMLImageElement
  input: HTMLInputElement
  ins: HTMLModElement
  kbd: HTMLElement
  keygen: HTMLElement
  label: HTMLLabelElement
  legend: HTMLLegendElement
  li: HTMLLIElement
  link: HTMLLinkElement
  main: HTMLElement
  map: HTMLMapElement
  mark: HTMLElement
  menu: HTMLElement
  menuitem: HTMLElement
  meta: HTMLMetaElement
  meter: HTMLElement
  nav: HTMLElement
  noscript: HTMLElement
  object: HTMLObjectElement
  ol: HTMLOListElement
  optgroup: HTMLOptGroupElement
  option: HTMLOptionElement
  output: HTMLElement
  p: HTMLParagraphElement
  param: HTMLParamElement
  picture: HTMLElement
  pre: HTMLPreElement
  progress: HTMLProgressElement
  q: HTMLQuoteElement
  rp: HTMLElement
  rt: HTMLElement
  ruby: HTMLElement
  s: HTMLElement
  samp: HTMLElement
  script: HTMLElement
  section: HTMLElement
  select: HTMLSelectElement
  small: HTMLElement
  source: HTMLSourceElement
  span: HTMLSpanElement
  strong: HTMLElement
  style: HTMLStyleElement
  sub: HTMLElement
  summary: HTMLElement
  sup: HTMLElement
  table: HTMLTableElement
  tbody: HTMLTableSectionElement
  td: HTMLTableDataCellElement
  textarea: HTMLTextAreaElement
  tfoot: HTMLTableSectionElement
  th: HTMLTableHeaderCellElement
  thead: HTMLTableSectionElement
  time: HTMLElement
  title: HTMLTitleElement
  tr: HTMLTableRowElement
  track: HTMLTrackElement
  u: HTMLElement
  ul: HTMLUListElement
  var: HTMLElement
  video: HTMLVideoElement
  wbr: HTMLElement
}

export interface SVGDomTags {
  circle: SVGCircleElement
  clipPath: SVGClipPathElement
  defs: SVGDefsElement
  ellipse: SVGEllipseElement
  g: SVGGElement
  image: SVGImageElement
  line: SVGLineElement
  linearGradient: SVGLinearGradientElement
  mask: SVGMaskElement
  path: SVGPathElement
  pattern: SVGPatternElement
  polygon: SVGPolygonElement
  polyline: SVGPolylineElement
  radialGradient: SVGRadialGradientElement
  rect: SVGRectElement
  stop: SVGStopElement
  svg: SVGSVGElement
  text: SVGTextElement
  tspan: SVGTSpanElement
}
