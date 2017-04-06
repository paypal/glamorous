// Mostly copied from:
// https://github.com/threepointone/glamor/blob/
// 5e7d988211330b8e2fca5bb8da78e35051444efd/src/jsxstyle.js
/*
 * This is used to generate the helper functions
 * like: glamorous.block and the <glamorous.Block /> elements
 */

export default [
  {
    name: 'view',
    tag: 'div',
    styles: {},
  },
  {
    name: 'block',
    tag: 'div',
    styles: {
      display: 'block',
    },
  },
  {
    name: 'inlineBlock',
    tag: 'div',
    styles: {
      display: 'inline-block',
    },
  },
  {
    name: 'flex',
    tag: 'div',
    styles: {
      display: 'flex',
    },
  },
  {
    name: 'row',
    tag: 'div',
    styles: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  {
    name: 'column',
    tag: 'div',
    styles: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
]
