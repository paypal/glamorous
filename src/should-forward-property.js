/* eslint max-lines:0, func-style:0 */
// copied from:
// https://github.com/styled-components/styled-components/tree/
// 956e8210b6277860c89404f9cb08735f97eaa7e1/src/utils/validAttr.js
/* Trying to avoid the unknown-prop errors on glamorous components
 by filtering by React's attribute whitelist.
 */

import memoize from 'fast-memoize'
import reactHTMLAttributes from 'react-html-attributes'
import reactProps from './react-props'

const globalReactHtmlProps = reactHTMLAttributes['*']

// these are valid attributes that have the
// same name as CSS properties, and is used
// for css overrides API
const cssProps = ['color', 'height', 'width']

/* From DOMProperty */
// eslint-disable-next-line max-len
const ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD'
// eslint-disable-next-line max-len
const ATTRIBUTE_NAME_CHAR = `${ATTRIBUTE_NAME_START_CHAR}\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040`
const isCustomAttribute = RegExp.prototype.test.bind(
  new RegExp(`^(data|aria)-[${ATTRIBUTE_NAME_CHAR}]*$`),
)

const isHtmlProp = (name, tagName) => {
  const elementAttributes = reactHTMLAttributes[tagName]

  return globalReactHtmlProps.indexOf(name) !== -1 ||
    (elementAttributes === undefined ?
      false :
      elementAttributes.indexOf(name) !== -1)
}
const isCssProp = name => cssProps.indexOf(name) !== -1
const isReactProp = name => reactProps.indexOf(name) !== -1

// eslint-disable-next-line complexity
const shouldForwardProperty = (tagName, name) =>
  typeof tagName !== 'string' ||
  ((isHtmlProp(name, tagName) ||
    isReactProp(name) ||
    isCustomAttribute(name.toLowerCase())) &&
    (tagName === 'svg' || !isCssProp(name)))

export default memoize(shouldForwardProperty)
