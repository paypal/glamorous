import { SVGProperties } from './svg-properties'
import { CSSProperties } from './css-properties'
import {
  BuiltInGlamorousComponentFactory,
} from './component-factory'

export type HTMLGlamorousComponentFactory<HTMLElement extends keyof JSX.IntrinsicElements> =
  BuiltInGlamorousComponentFactory<JSX.IntrinsicElements[HTMLElement], CSSProperties>

export type SVGGlamorousComponentFactory<SVGElement extends keyof JSX.IntrinsicElements> =
  BuiltInGlamorousComponentFactory<JSX.IntrinsicElements[SVGElement], SVGProperties>

export interface HTMLComponentFactory {
  a: HTMLGlamorousComponentFactory<'a'>
  abbr: HTMLGlamorousComponentFactory<'abbr'>
  address: HTMLGlamorousComponentFactory<'address'>
  area: HTMLGlamorousComponentFactory<'area'>
  article: HTMLGlamorousComponentFactory<'article'>
  aside: HTMLGlamorousComponentFactory<'aside'>
  audio: HTMLGlamorousComponentFactory<'audio'>
  b: HTMLGlamorousComponentFactory<'b'>
  base: HTMLGlamorousComponentFactory<'base'>
  bdi: HTMLGlamorousComponentFactory<'bdi'>
  bdo: HTMLGlamorousComponentFactory<'bdo'>
  big: HTMLGlamorousComponentFactory<'big'>
  blockquote: HTMLGlamorousComponentFactory<'blockquote'>
  body: HTMLGlamorousComponentFactory<'body'>
  br: HTMLGlamorousComponentFactory<'br'>
  button: HTMLGlamorousComponentFactory<'button'>
  canvas: HTMLGlamorousComponentFactory<'canvas'>
  caption: HTMLGlamorousComponentFactory<'caption'>
  cite: HTMLGlamorousComponentFactory<'cite'>
  code: HTMLGlamorousComponentFactory<'code'>
  col: HTMLGlamorousComponentFactory<'col'>
  colgroup: HTMLGlamorousComponentFactory<'colgroup'>
  data: HTMLGlamorousComponentFactory<'data'>
  datalist: HTMLGlamorousComponentFactory<'datalist'>
  dd: HTMLGlamorousComponentFactory<'dd'>
  del: HTMLGlamorousComponentFactory<'del'>
  details: HTMLGlamorousComponentFactory<'details'>
  dfn: HTMLGlamorousComponentFactory<'dfn'>
  dialog: HTMLGlamorousComponentFactory<'dialog'>
  div: HTMLGlamorousComponentFactory<'div'>
  dl: HTMLGlamorousComponentFactory<'dl'>
  dt: HTMLGlamorousComponentFactory<'dt'>
  em: HTMLGlamorousComponentFactory<'em'>
  embed: HTMLGlamorousComponentFactory<'embed'>
  fieldset: HTMLGlamorousComponentFactory<'fieldset'>
  figcaption: HTMLGlamorousComponentFactory<'figcaption'>
  figure: HTMLGlamorousComponentFactory<'figure'>
  footer: HTMLGlamorousComponentFactory<'footer'>
  form: HTMLGlamorousComponentFactory<'form'>
  h1: HTMLGlamorousComponentFactory<'h1'>
  h2: HTMLGlamorousComponentFactory<'h2'>
  h3: HTMLGlamorousComponentFactory<'h3'>
  h4: HTMLGlamorousComponentFactory<'h4'>
  h5: HTMLGlamorousComponentFactory<'h5'>
  h6: HTMLGlamorousComponentFactory<'h6'>
  head: HTMLGlamorousComponentFactory<'head'>
  header: HTMLGlamorousComponentFactory<'header'>
  hgroup: HTMLGlamorousComponentFactory<'hgroup'>
  hr: HTMLGlamorousComponentFactory<'hr'>
  html: HTMLGlamorousComponentFactory<'html'>
  i: HTMLGlamorousComponentFactory<'i'>
  iframe: HTMLGlamorousComponentFactory<'iframe'>
  img: HTMLGlamorousComponentFactory<'img'>
  input: HTMLGlamorousComponentFactory<'input'>
  ins: HTMLGlamorousComponentFactory<'ins'>
  kbd: HTMLGlamorousComponentFactory<'kbd'>
  keygen: HTMLGlamorousComponentFactory<'keygen'>
  label: HTMLGlamorousComponentFactory<'label'>
  legend: HTMLGlamorousComponentFactory<'legend'>
  li: HTMLGlamorousComponentFactory<'li'>
  link: HTMLGlamorousComponentFactory<'link'>
  main: HTMLGlamorousComponentFactory<'main'>
  map: HTMLGlamorousComponentFactory<'map'>
  mark: HTMLGlamorousComponentFactory<'mark'>
  menu: HTMLGlamorousComponentFactory<'menu'>
  menuitem: HTMLGlamorousComponentFactory<'menuitem'>
  meta: HTMLGlamorousComponentFactory<'meta'>
  meter: HTMLGlamorousComponentFactory<'meter'>
  nav: HTMLGlamorousComponentFactory<'nav'>
  noscript: HTMLGlamorousComponentFactory<'noscript'>
  object: HTMLGlamorousComponentFactory<'object'>
  ol: HTMLGlamorousComponentFactory<'ol'>
  optgroup: HTMLGlamorousComponentFactory<'optgroup'>
  option: HTMLGlamorousComponentFactory<'option'>
  output: HTMLGlamorousComponentFactory<'output'>
  p: HTMLGlamorousComponentFactory<'p'>
  param: HTMLGlamorousComponentFactory<'param'>
  picture: HTMLGlamorousComponentFactory<'picture'>
  pre: HTMLGlamorousComponentFactory<'pre'>
  progress: HTMLGlamorousComponentFactory<'progress'>
  q: HTMLGlamorousComponentFactory<'q'>
  rp: HTMLGlamorousComponentFactory<'rp'>
  rt: HTMLGlamorousComponentFactory<'rt'>
  ruby: HTMLGlamorousComponentFactory<'ruby'>
  s: HTMLGlamorousComponentFactory<'s'>
  samp: HTMLGlamorousComponentFactory<'samp'>
  script: HTMLGlamorousComponentFactory<'script'>
  section: HTMLGlamorousComponentFactory<'section'>
  select: HTMLGlamorousComponentFactory<'select'>
  small: HTMLGlamorousComponentFactory<'small'>
  source: HTMLGlamorousComponentFactory<'source'>
  span: HTMLGlamorousComponentFactory<'span'>
  strong: HTMLGlamorousComponentFactory<'strong'>
  style: HTMLGlamorousComponentFactory<'style'>
  sub: HTMLGlamorousComponentFactory<'sub'>
  summary: HTMLGlamorousComponentFactory<'summary'>
  sup: HTMLGlamorousComponentFactory<'sup'>
  table: HTMLGlamorousComponentFactory<'table'>
  tbody: HTMLGlamorousComponentFactory<'tbody'>
  td: HTMLGlamorousComponentFactory<'td'>
  textarea: HTMLGlamorousComponentFactory<'textarea'>
  tfoot: HTMLGlamorousComponentFactory<'tfoot'>
  th: HTMLGlamorousComponentFactory<'th'>
  thead: HTMLGlamorousComponentFactory<'thead'>
  time: HTMLGlamorousComponentFactory<'time'>
  title: HTMLGlamorousComponentFactory<'title'>
  tr: HTMLGlamorousComponentFactory<'tr'>
  track: HTMLGlamorousComponentFactory<'track'>
  u: HTMLGlamorousComponentFactory<'u'>
  ul: HTMLGlamorousComponentFactory<'ul'>
  var: HTMLGlamorousComponentFactory<'var'>
  video: HTMLGlamorousComponentFactory<'video'>
  wbr: HTMLGlamorousComponentFactory<'wbr'>
}

export type HTMLKey = keyof HTMLComponentFactory

export interface SVGComponentFactory {
  circle: SVGGlamorousComponentFactory<'circle'>
  clipPath: SVGGlamorousComponentFactory<'clipPath'>
  defs: SVGGlamorousComponentFactory<'defs'>
  ellipse: SVGGlamorousComponentFactory<'ellipse'>
  g: SVGGlamorousComponentFactory<'g'>
  image: SVGGlamorousComponentFactory<'image'>
  line: SVGGlamorousComponentFactory<'line'>
  linearGradient: SVGGlamorousComponentFactory<'linearGradient'>
  mask: SVGGlamorousComponentFactory<'mask'>
  path: SVGGlamorousComponentFactory<'path'>
  pattern: SVGGlamorousComponentFactory<'pattern'>
  polygon: SVGGlamorousComponentFactory<'polygon'>
  polyline: SVGGlamorousComponentFactory<'polyline'>
  radialGradient: SVGGlamorousComponentFactory<'radialGradient'>
  rect: SVGGlamorousComponentFactory<'rect'>
  stop: SVGGlamorousComponentFactory<'stop'>
  svg: SVGGlamorousComponentFactory<'svg'>
  text: SVGGlamorousComponentFactory<'text'>
  tspan: SVGGlamorousComponentFactory<'tspan'>
}

export type SVGKey = keyof SVGComponentFactory
