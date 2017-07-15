import reactPrimitives from 'react-primitives'
import glamorous, {ThemeProvider, withTheme} from '../index'

// Create glamorous component with composition
let glamorousComponent = tag => glamorous(tag)

// Native UI components
const aliases = ['Image', 'Text', 'Touchable', 'View']

/* Lowercase the aliases according to the built-in React Native component
factories, define the getter for each alias and then pass it to
glamorousComponent */

aliases.forEach(
  alias =>
    (glamorousComponent[alias.toLowerCase()] = glamorousComponent(
      reactPrimitives[alias],
    )),
)

export default glamorousComponent
export {ThemeProvider, withTheme}
