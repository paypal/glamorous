import React from 'react'

import {CHANNEL} from './constants'
import {PropTypes} from './react-compat'

function generateWarningMessage(Comp) {
  const componentName = Comp.displayName || Comp.name || 'FunctionComponent'
  // eslint-disable-next-line max-len
  return `glamorous warning: Expected component called "${componentName}" which uses withTheme to be within a ThemeProvider but none was found.`
}

export default function withTheme(
  ComponentToTheme,
  {noWarn = false, createElement = true} = {},
) {
  class ThemedComponent extends React.Component {
    static propTypes = {
      theme: PropTypes.object,
    }
    warned = noWarn
    state = {theme: {}}
    setTheme = theme => this.setState({theme})

    // eslint-disable-next-line complexity
    componentWillMount() {
      if (!this.context[CHANNEL]) {
        if (process.env.NODE_ENV !== 'production' && !this.warned) {
          this.warned = true
          // eslint-disable-next-line no-console
          console.warn(generateWarningMessage(ComponentToTheme))
        }
      }
      const {theme} = this.props
      if (this.context[CHANNEL]) {
        // if a theme is provided via props,
        // it takes precedence over context
        this.setTheme(theme ? theme : this.context[CHANNEL].getState())
      } else {
        this.setTheme(theme || {})
      }
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.theme !== nextProps.theme) {
        this.setTheme(nextProps.theme)
      }
    }

    componentDidMount() {
      if (this.context[CHANNEL] && !this.props.theme) {
        // subscribe to future theme changes
        this.subscriptionId = this.context[CHANNEL].subscribe(this.setTheme)
      }
    }

    componentWillUnmount() {
      // cleanup subscription
      this.subscriptionId &&
        this.context[CHANNEL].unsubscribe(this.subscriptionId)
    }

    render() {
      if (createElement) {
        return <ComponentToTheme {...this.props} {...this.state} />
      } else {
        // this allows us to effectively use the GlamorousComponent
        // as our `render` method without going through lifecycle hooks.
        // Also allows us to forward the context in the scenario where
        // a user wants to add more context.
        // eslint-disable-next-line babel/new-cap
        return ComponentToTheme.call(
          this,
          {...this.props, ...this.state},
          this.context,
        )
      }
    }
  }

  const defaultContextTypes = {
    [CHANNEL]: PropTypes.object,
  }

  let userDefinedContextTypes = null

  // configure the contextTypes to be settable by the user,
  // however also retaining the glamorous channel.
  Object.defineProperty(ThemedComponent, 'contextTypes', {
    enumerable: true,
    configurable: true,
    set(value) {
      userDefinedContextTypes = value
    },
    get() {
      // if the user has provided a contextTypes definition,
      // merge the default context types with the provided ones.
      if (userDefinedContextTypes) {
        return {
          ...defaultContextTypes,
          ...userDefinedContextTypes,
        }
      }
      return defaultContextTypes
    },
  })

  return ThemedComponent
}
