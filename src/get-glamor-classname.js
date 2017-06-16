// @flow
import {css, styleSheet} from 'glamor'
import type {CSSProperties} from './types/CSSProperties'
import type {Theme} from './theme-provider'

type ObjectMap = {[key: string]: any};
type StyleFunction = (
  ObjectMap, // props
  Theme, // theme
  ObjectMap, // context
) => string | CSSProperties;

type Styles = Array<
  // TODO: Is null okay here?
  StyleFunction | string | CSSProperties | Styles | null,
>;

/**
 * This function takes a className string and gets all the
 * associated glamor styles. It's used to merge glamor styles
 * from a className to make sure that specificity is not
 * a problem when passing a className to a component.
 * @param {String} [className=''] the className string
 * @return {Object} { glamorStyles, glamorlessClassName }
 *   - glamorStyles is an array of all the glamor styles objects
 *   - glamorlessClassName is the rest of the className string
 *     without the glamor classNames
 */
function extractGlamorStyles(className = '') {
  return className.toString().split(' ').reduce((groups, name) => {
    if (name.indexOf('css-') === 0) {
      const style = getGlamorStylesFromClassName(name)
      groups.glamorStyles.push(style)
    } else {
      // eslint-disable-next-line max-len
      groups.glamorlessClassName = `${groups.glamorlessClassName} ${name}`.trim()
    }
    return groups
  }, {glamorlessClassName: '', glamorStyles: []})
}

export default getGlamorClassName

function getGlamorClassName({
  styles,
  props,
  cssOverrides,
  cssProp,
  theme,
  context,
}: {
  styles: Styles,
  props: ObjectMap,
  cssOverrides: CSSProperties,
  cssProp: CSSProperties,
  theme: Theme,
  context: ObjectMap,
}) {
  const {
    glamorStyles: parentGlamorStyles,
    glamorlessClassName,
  } = extractGlamorStyles(props.className)
  const {mappedArgs, nonGlamorClassNames} = handleStyles(
    [...styles, parentGlamorStyles, cssOverrides, cssProp],
    props,
    theme,
    context,
  )
  const glamorClassName = css(...mappedArgs).toString()
  const extras = [...nonGlamorClassNames, glamorlessClassName].join(' ').trim()
  return `${glamorClassName} ${extras}`.trim()
}

// this next function is on a "hot" code-path
// so it's pretty complex to make sure it's fast.
// eslint-disable-next-line complexity
function handleStyles(
  styles: Styles,
  props: ObjectMap,
  theme: Theme,
  context: ObjectMap,
) {
  let current
  const mappedArgs = []
  const nonGlamorClassNames = []
  for (let i = 0; i < styles.length; i++) {
    current = styles[i]
    if (typeof current === 'function') {
      const result = current(props, theme, context)
      if (typeof result === 'string') {
        processStringClass(result, mappedArgs, nonGlamorClassNames)
      } else {
        mappedArgs.push(result)
      }
    } else if (typeof current === 'string') {
      processStringClass(current, mappedArgs, nonGlamorClassNames)
    } else if (Array.isArray(current)) {
      const recursed = handleStyles(current, props, theme, context)
      mappedArgs.push(...recursed.mappedArgs)
      nonGlamorClassNames.push(...recursed.nonGlamorClassNames)
    } else {
      mappedArgs.push(current)
    }
  }
  return {mappedArgs, nonGlamorClassNames}
}

function processStringClass(str, mappedArgs, nonGlamorClassNames) {
  const className = getGlamorStylesFromClassName(str)
  if (className) {
    mappedArgs.push(className)
  } else {
    nonGlamorClassNames.push(str)
  }
}

function getGlamorStylesFromClassName(className): string | null {
  const id = className.slice('css-'.length)
  if (styleSheet.registered[id]) {
    return styleSheet.registered[id].style
  } else {
    return null
  }
}
