import {css} from 'glamor'
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
function extractGlamorStyles(className) {
  const glamorlessClassName = []
  const glamorStyles = []
  className
    .toString()
    .split(' ')
    .forEach(name => {
      if (name.indexOf('css-') === 0) {
        const style = buildGlamorSrcFromClassName(name)
        glamorStyles.push(style)
      } else {
        glamorlessClassName.push(name)
      }
    })

  return {glamorlessClassName, glamorStyles}
}

/** Glamor's css function returns an object with the shape
 *
 * {
 *   [`data-css-${hash}`]: '',
 *   toString() { return `css-${hash}` }
 * }
 *
 * Whenever glamor's build function encounters an object with
 * this shape it just pulls the resulting styles from the cache.
 *
 * note: the toString method is not needed to qualify the shape
**/
function buildGlamorSrcFromClassName(className) {
  return {[`data-${className}`]: ''}
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
  const {mappedArgs, nonGlamorClassNames} = handleStyles(
    [...styles, props.className, cssOverrides, cssProp],
    props,
    context,
  )
  // eslint-disable-next-line max-len
  const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV
  const devRules = isDev ? {label: displayName} : null
  const glamorClassName = css(devRules, ...mappedArgs).toString()
  const extras = nonGlamorClassNames.join(' ').trim()
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
        const {glamorStyles, glamorlessClassName} = extractGlamorStyles(result)
        mappedArgs.push(...glamorStyles)
        nonGlamorClassNames.push(...glamorlessClassName)
      } else {
        mappedArgs.push(result)
      }
    } else if (typeof current === 'string') {
      const {glamorStyles, glamorlessClassName} = extractGlamorStyles(current)
      mappedArgs.push(...glamorStyles)
      nonGlamorClassNames.push(...glamorlessClassName)
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
