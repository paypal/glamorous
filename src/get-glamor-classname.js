import {css, styleSheet} from 'glamor'
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
  context,
  displayName,
}) {
  const {
    glamorStyles: parentGlamorStyles,
    glamorlessClassName,
  } = extractGlamorStyles(props.className)
  const {mappedArgs, nonGlamorClassNames} = handleStyles(
    [...styles, parentGlamorStyles, cssOverrides, cssProp],
    props,
    context,
  )
  const glamorClassName = css({label: displayName}, ...mappedArgs).toString()
  const extras = [...nonGlamorClassNames, glamorlessClassName].join(' ').trim()
  return `${glamorClassName} ${extras}`.trim()
}

// this next function is on a "hot" code-path
// so it's pretty complex to make sure it's fast.
// eslint-disable-next-line complexity
function handleStyles(styles, props, context) {
  let current
  const mappedArgs = []
  const nonGlamorClassNames = []
  for (let i = 0; i < styles.length; i++) {
    current = styles[i]
    if (typeof current === 'function') {
      const result = current(props, context)
      if (typeof result === 'string') {
        processStringClass(result, mappedArgs, nonGlamorClassNames)
      } else {
        mappedArgs.push(result)
      }
    } else if (typeof current === 'string') {
      processStringClass(current, mappedArgs, nonGlamorClassNames)
    } else if (Array.isArray(current)) {
      const recursed = handleStyles(current, props, context)
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

function getGlamorStylesFromClassName(className) {
  const id = className.slice('css-'.length)
  if (styleSheet.registered[id]) {
    return styleSheet.registered[id].style
  } else {
    return null
  }
}
