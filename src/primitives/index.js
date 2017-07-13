import reactPrimitives from 'react-primitives'
import glamorous, {ThemeProvider, withTheme} from '../index'

// Create glamorous component with composition
function createComponent(componentConstructor, tag) {
  if (typeof tag !== 'string' && typeof tag !== 'function') {
    throw new Error(`Cannot create glamorous component for tag ${tag}`)
  }

  return componentConstructor(tag)
}

// Render the primitive React interfaces with glamorousComponent()
function glamorousComponent(tag) {
  return createComponent(glamorous, tag)
}

// Native UI components
const aliases = 'Image Text Touchable View'

/* Lowercase the aliases according to the built-in React Native component
factories, define the getter for each alias and then pass it to
glamorousComponent */

aliases.split(/\s+/m).forEach(alias =>
  Object.defineProperty(glamorousComponent, alias.toLowerCase(), {
    enumerable: true,
    configurable: false,
    get() {
      return glamorousComponent(reactPrimitives[alias])
    },
  }),
)

export default glamorousComponent
export {ThemeProvider, withTheme}
