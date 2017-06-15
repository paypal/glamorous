// @flow
import React, {Component} from 'react'
import brcast from 'brcast'
import type {Element} from 'react' // eslint-disable-line no-duplicate-imports

// eslint-disable-next-line no-duplicate-imports
import type {Broadcast, UnsubscribeFunction} from 'brcast'

import {PropTypes} from './react-compat'
import {CHANNEL} from './constants'

export type Theme = Object;

export type ThemeProviderContext = {
  [typeof CHANNEL]: Broadcast<Theme>,
};

type Props = {
  theme: Theme,
  children: string | number | false | null | Array<Element<*>>,
};

/**
 * This is a component which will provide a theme to the entire tree
 * via context and event listener
 * (because pure components block context updates)
 * inspired by the styled-components implementation
 * https://github.com/styled-components/styled-components
 * @param {Object} theme the theme object..
 */
class ThemeProvider extends Component {
  broadcast: Broadcast<Theme>
  outerTheme: Theme
  props: Props
  unsubscribe: UnsubscribeFunction

  broadcast = brcast(this.props.theme)

  // create theme, by merging with outer theme, if present
  getTheme(passedTheme?: Theme): Theme {
    const theme = passedTheme || this.props.theme
    return {...this.outerTheme, ...theme}
  }

  getChildContext(): ThemeProviderContext {
    return {
      [CHANNEL]: this.broadcast,
    }
  }

  setOuterTheme = (theme: Theme) => {
    this.outerTheme = theme
  }

  componentDidMount() {
    // create a new subscription for keeping track of outer theme, if present
    if (this.context[CHANNEL]) {
      this.unsubscribe = this.context[CHANNEL].subscribe(this.setOuterTheme)
    }
  }

  componentWillMount() {
    // set broadcast state by merging outer theme with own
    if (this.context[CHANNEL]) {
      this.setOuterTheme(this.context[CHANNEL].getState())
      this.broadcast.setState(this.getTheme())
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.theme !== nextProps.theme) {
      this.broadcast.setState(this.getTheme(nextProps.theme))
    }
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
  }

  render() {
    return this.props.children ?
      React.Children.only(this.props.children) :
      null
  }
}

ThemeProvider.childContextTypes = {
  [CHANNEL]: PropTypes.object.isRequired,
}

ThemeProvider.contextTypes = {
  [CHANNEL]: PropTypes.object,
}

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node,
}

export default ThemeProvider
