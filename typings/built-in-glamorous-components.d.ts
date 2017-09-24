import { ExtraGlamorousProps } from './glamorous-component';
import { CSSProperties } from './css-properties';

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
  A: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['a']>
  Abbr: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['abbr']>
  Address: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['address']>
  Area: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['area']>
  Article: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['article']>
  Aside: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['aside']>
  Audio: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['audio']>
  B: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['b']>
  Base: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['base']>
  Bdi: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['bdi']>
  Bdo: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['bdo']>
  Big: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['big']>
  Blockquote: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['blockquote']>
  Body: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['body']>
  Br: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['br']>
  Button: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['button']>
  Canvas: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['canvas']>
  Caption: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['caption']>
  Cite: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['cite']>
  Code: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['code']>
  Col: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['col']>
  Colgroup: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['colgroup']>
  Data: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['data']>
  Datalist: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['datalist']>
  Dd: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['dd']>
  Del: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['del']>
  Details: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['details']>
  Dfn: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['dfn']>
  Dialog: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['dialog']>
  Div: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['div']>
  Dl: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['dl']>
  Dt: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['dt']>
  Em: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['em']>
  Embed: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['embed']>
  Fieldset: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['fieldset']>
  Figcaption: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['figcaption']>
  Figure: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['figure']>
  Footer: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['footer']>
  Form: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['form']>
  H1: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['h1']>
  H2: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['h2']>
  H3: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['h3']>
  H4: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['h4']>
  H5: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['h5']>
  H6: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['h6']>
  Head: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['head']>
  Header: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['header']>
  Hgroup: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['hgroup']>
  Hr: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['hr']>
  Html: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['html']>
  I: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['i']>
  Iframe: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['iframe']>
  Img: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['img']>
  Input: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['input']>
  Ins: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['ins']>
  Kbd: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['kbd']>
  Keygen: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['keygen']>
  Label: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['label']>
  Legend: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['legend']>
  Li: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['li']>
  Link: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['link']>
  Main: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['main']>
  Map: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['map']>
  Mark: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['mark']>
  Menu: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['menu']>
  Menuitem: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['menuitem']>
  Meta: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['meta']>
  Meter: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['meter']>
  Nav: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['nav']>
  Noscript: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['noscript']>
  Object: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['object']>
  Ol: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['ol']>
  Optgroup: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['optgroup']>
  Option: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['option']>
  Output: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['output']>
  P: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['p']>
  Param: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['param']>
  Picture: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['picture']>
  Pre: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['pre']>
  Progress: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['progress']>
  Q: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['q']>
  Rp: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['rp']>
  Rt: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['rt']>
  Ruby: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['ruby']>
  S: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['s']>
  Samp: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['samp']>
  Script: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['script']>
  Section: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['section']>
  Select: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['select']>
  Small: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['small']>
  Source: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['source']>
  Span: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['span']>
  Strong: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['strong']>
  Style: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['style']>
  Sub: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['sub']>
  Summary: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['summary']>
  Sup: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['sup']>
  Table: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['table']>
  Tbody: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['tbody']>
  Td: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['td']>
  Textarea: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['textarea']>
  Tfoot: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['tfoot']>
  Th: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['th']>
  Thead: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['thead']>
  Time: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['time']>
  Title: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['title']>
  Tr: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['tr']>
  Track: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['track']>
  U: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['u']>
  Ul: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['ul']>
  Var: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['var']>
  Video: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['video']>
  Wbr: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['wbr']>
}

export interface SVGComponent {
  Circle: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['circle']>
  ClipPath: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['clipPath']>
  Defs: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['defs']>
  Ellipse: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['ellipse']>
  G: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['g']>
  Image: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['image']>
  Line: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['line']>
  LinearGradient: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['linearGradient']>
  Mask: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['mask']>
  Path: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['path']>
  Pattern: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['pattern']>
  Polygon: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['polygon']>
  Polyline: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['polyline']>
  RadialGradient: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['radialGradient']>
  Rect: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['rect']>
  Stop: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['stop']>
  Svg: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['svg']>
  Text: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['text']>
  Tspan: React.StatelessComponent<CSSProperties & ExtraGlamorousProps & JSX.IntrinsicElements['tspan']>
}
