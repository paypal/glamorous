import reactPrimitives from 'react-primitives'
import glamorous, {ThemeProvider, withTheme} from '../index'

// Native UI components
const aliases = ['Image', 'Text', 'Touchable', 'View']

/* Lowercase the aliases according to the built-in React Native component
factories, define the getter for each alias and then pass it to
glamorousComponent */
Object.assign(
  glamorous,
  aliases.reduce((getters, alias) => {
    const tag = alias.toLowerCase()
    getters[tag] = glamorous(reactPrimitives[alias])
    return getters
  }, {}),
)

export default glamorous
export {ThemeProvider, withTheme}
