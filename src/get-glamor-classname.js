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
      const id = name.slice('css-'.length)
      const {style} = styleSheet.registered[id]
      groups.glamorStyles.push(style)
    } else {
      // eslint-disable-next-line max-len
      groups.glamorlessClassName = `${groups.glamorlessClassName} ${name}`.trim()
    }
    return groups
  }, {glamorlessClassName: '', glamorStyles: []})
}

export default getGlamorClassName

function getGlamorClassName(styles, props, cssOverrides, theme) {
  const mappedArgs = styles.slice()
  for (let i = mappedArgs.length; i--;) {
    if (typeof mappedArgs[i] === 'function') {
      mappedArgs[i] = mappedArgs[i](props, theme)
    }
  }
  const {
    glamorStyles: parentGlamorStyles,
    glamorlessClassName,
  } = extractGlamorStyles(props.className)
  const glamorClassName = css(
    ...mappedArgs,
    ...parentGlamorStyles,
    cssOverrides,
  ).toString()
  return `${glamorlessClassName} ${glamorClassName}`.trim()
}
