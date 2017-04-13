// Type definitions for Glamorous v3.2.0
// Project: https://github.com/paypal/glamorous
// Definitions by: Kok Sam <https://github.com/sammkj>

import * as React from "react";
import { StatelessComponent, ComponentClass, PureComponent } from "react";

type Component = ComponentClass<{}> | StatelessComponent<{}>;

export interface DynamicStyledFunction {
  (props?: object, theme?: object): object;
}

export interface StyledFunction {
  (staticStyles: object, dynamicStyles?: DynamicStyledFunction): Component;
}

export interface GlamorousBaseInterface {
  (component: Component): StyledFunction;
}

declare const glamorous: GlamorousInterface;
export interface GlamorousInterface extends GlamorousBaseInterface {
  a: StyledFunction;
  abbr: StyledFunction;
  address: StyledFunction;
  area: StyledFunction;
  article: StyledFunction;
  aside: StyledFunction;
  audio: StyledFunction;
  b: StyledFunction;
  base: StyledFunction;
  bdi: StyledFunction;
  bdo: StyledFunction;
  big: StyledFunction;
  blockquote: StyledFunction;
  body: StyledFunction;
  br: StyledFunction;
  button: StyledFunction;
  canvas: StyledFunction;
  caption: StyledFunction;
  cite: StyledFunction;
  code: StyledFunction;
  col: StyledFunction;
  colgroup: StyledFunction;
  data: StyledFunction;
  datalist: StyledFunction;
  dd: StyledFunction;
  del: StyledFunction;
  details: StyledFunction;
  dfn: StyledFunction;
  dialog: StyledFunction;
  div: StyledFunction;
  dl: StyledFunction;
  dt: StyledFunction;
  em: StyledFunction;
  embed: StyledFunction;
  fieldset: StyledFunction;
  figcaption: StyledFunction;
  figure: StyledFunction;
  footer: StyledFunction;
  form: StyledFunction;
  h1: StyledFunction;
  h2: StyledFunction;
  h3: StyledFunction;
  h4: StyledFunction;
  h5: StyledFunction;
  h6: StyledFunction;
  head: StyledFunction;
  header: StyledFunction;
  hgroup: StyledFunction;
  hr: StyledFunction;
  html: StyledFunction;
  i: StyledFunction;
  iframe: StyledFunction;
  img: StyledFunction;
  input: StyledFunction;
  ins: StyledFunction;
  kbd: StyledFunction;
  keygen: StyledFunction;
  label: StyledFunction;
  legend: StyledFunction;
  li: StyledFunction;
  link: StyledFunction;
  main: StyledFunction;
  map: StyledFunction;
  mark: StyledFunction;
  menu: StyledFunction;
  menuitem: StyledFunction;
  meta: StyledFunction;
  meter: StyledFunction;
  nav: StyledFunction;
  noscript: StyledFunction;
  object: StyledFunction;
  ol: StyledFunction;
  optgroup: StyledFunction;
  option: StyledFunction;
  output: StyledFunction;
  p: StyledFunction;
  param: StyledFunction;
  picture: StyledFunction;
  pre: StyledFunction;
  progress: StyledFunction;
  q: StyledFunction;
  rp: StyledFunction;
  rt: StyledFunction;
  ruby: StyledFunction;
  s: StyledFunction;
  samp: StyledFunction;
  script: StyledFunction;
  section: StyledFunction;
  select: StyledFunction;
  small: StyledFunction;
  source: StyledFunction;
  span: StyledFunction;
  strong: StyledFunction;
  style: StyledFunction;
  sub: StyledFunction;
  summary: StyledFunction;
  sup: StyledFunction;
  table: StyledFunction;
  tbody: StyledFunction;
  td: StyledFunction;
  textarea: StyledFunction;
  tfoot: StyledFunction;
  th: StyledFunction;
  thead: StyledFunction;
  time: StyledFunction;
  title: StyledFunction;
  tr: StyledFunction;
  track: StyledFunction;
  u: StyledFunction;
  ul: StyledFunction;
  "var": StyledFunction;
  video: StyledFunction;
  wbr: StyledFunction;
}

export default glamorous;
