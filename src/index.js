import codegen from 'codegen.macro'
import domElements from './dom-elements'
import withTheme from './with-theme'
import ThemeProvider from './theme-provider'
import createGlamorous from './create-glamorous'
import splitProps from './split-props'

const glamorous = createGlamorous(splitProps)

/*
 * This creates a glamorousComponentFactory for every DOM element so you can
 * simply do:
 * const GreenButton = glamorous.button({
 *   backgroundColor: 'green',
 *   padding: 20,
 * })
 * <GreenButton>Click Me!</GreenButton>
 */
Object.assign(
  glamorous,
  domElements.reduce((getters, tag) => {
    // TODO: next breaking change, let's make
    // the `displayName` be: `glamorous.${tag}`
    getters[tag] = glamorous(tag)
    return getters
  }, {}),
)

/*
 * This creates a glamorous component for each DOM element so you can
 * simply do:
 * <glamorous.Div
 *   color="green"
 *   marginLeft={20}
 * >
 *   I'm green!
 * </glamorous.Div>
 */
Object.assign(
  glamorous,
  domElements.reduce((comps, tag) => {
    const capitalTag = capitalize(tag)
    comps[capitalTag] = glamorous[tag]()
    comps[capitalTag].displayName = `glamorous.${capitalTag}`
    comps[capitalTag].propsAreCssOverrides = true
    return comps
  }, {}),
)

function capitalize(s) {
  return s.slice(0, 1).toUpperCase() + s.slice(1)
}

/*
 * Fix importing in typescript after rollup compilation
 * https://github.com/rollup/rollup/issues/1156
 * https://github.com/Microsoft/TypeScript/issues/13017#issuecomment-268657860
 */
glamorous.default = glamorous

export default glamorous
export {ThemeProvider, withTheme}

codegen`
if (process.env.FORMAT === 'es') {
  module.exports = require('../other/get-exports-code')
} else {
  module.exports = ''
}
`
