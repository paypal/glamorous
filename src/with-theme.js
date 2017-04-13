import React, {Component} from 'react'

import {CHANNEL} from './theme-provider'
import {PropTypes} from './react-compat'

function generateWarningMessage(componentName) {
  // eslint-disable-next-line max-len
  return `glamorous warning: Expected component called "${componentName}" which uses withTheme to be within a ThemeProvider but none was found.`
}

export default function withTheme(ComponentToTheme) {
  class ThemedComponent extends Component {
    state = {theme: {}}
    setTheme = theme => this.setState({theme})

    componentWillMount() {
      if (!this.context[CHANNEL]) {
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.warn(
            generateWarningMessage(
              ComponentToTheme.displayName ||
                ComponentToTheme.name ||
                'Stateless Function',
            ),
          )
        }

        return
      }

      this.setState({theme: this.context[CHANNEL].getState()})
    }

    componentDidMount() {
      if (this.context[CHANNEL]) {
        this.unsubscribe = this.context[CHANNEL].subscribe(this.setTheme)
      }
    }

    componentWillUnmount() {
      // cleanup subscription
      this.unsubscribe && this.unsubscribe()
    }

    render() {
      return <ComponentToTheme {...this.props} {...this.state} />
    }
  }

  ThemedComponent.contextTypes = {
    [CHANNEL]: PropTypes.object,
  }

  return ThemedComponent
}
