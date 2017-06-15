// @flow
import React, {Component} from 'react'
import type {Element} from 'react' // eslint-disable-line no-duplicate-imports
import type {UnsubscribeFunction} from 'brcast'

import {CHANNEL} from './constants'
import {PropTypes} from './react-compat'
import type {Theme, ThemeProviderContext} from './theme-provider'

type FunctionalComponent = ({[key: string]: mixed}) => Element<*> | null;
// eslint-disable-next-line no-undef
type ComponentClassOrFunction = Class<Component<*, *, *>> | FunctionalComponent;

function generateWarningMessage(Comp: ComponentClassOrFunction) {
  const componentName = Comp.displayName || Comp.name || 'FunctionComponent'
  // eslint-disable-next-line max-len
  return `glamorous warning: Expected component called "${componentName}" which uses withTheme to be within a ThemeProvider but none was found.`
}

type WithThemeOptions = {
  noWarn?: boolean,
  createElement?: boolean,
}

export default function withTheme(
  ComponentToTheme: ComponentClassOrFunction,
  {noWarn = false, createElement = true}: WithThemeOptions = {},
) {
  type Props = {
    theme: Theme,
  }

  class ThemedComponent extends Component {
    state: {theme: Theme}
    // TODO: {[typeof CHANNEL]: void} is an object with the entry
    // `[CHANNEL]: undefined`, but an empty object should be allowed here, too.
    // Flow complains about the missing property if I type it as {}, though,
    // even though an empty object should still return `undefined` when
    // accessing the missing property.
    context: ThemeProviderContext | {[typeof CHANNEL]: void}
    unsubscribe: UnsubscribeFunction
    warned: boolean
    props: Props

    static propTypes = {
      theme: PropTypes.object,
    }
    warned = noWarn

    state = {theme: {}}
    setTheme = (theme: Theme) => this.setState({theme})

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

    componentWillReceiveProps(nextProps: Props) {
      if (this.props.theme !== nextProps.theme) {
        this.setTheme(nextProps.theme)
      }
    }

    componentDidMount() {
      if (this.context[CHANNEL] && !this.props.theme) {
        // subscribe to future theme changes
        this.unsubscribe = this.context[CHANNEL].subscribe(this.setTheme)
      }
    }

    componentWillUnmount() {
      // cleanup subscription
      this.unsubscribe && this.unsubscribe()
    }

    render() {
      if (createElement) {
        return <ComponentToTheme {...this.props} {...this.state} />
      } else {
        // this allows us to effectively use the GlamorousComponent
        // as our `render` method without going through lifecycle hooks.
        // Also allows us to forward the context in the scenario where
        // a user wants to add more context.

        // eslint-disable-next-line max-len
        // $FlowFixMe: This may produce undesired behavior when ComponentToTheme is a class
        return ComponentToTheme({...this.props, ...this.state}, this.context) //eslint-disable-line max-len,babel/new-cap
      }
    }
  }

  const defaultContextTypes = {
    [CHANNEL]: PropTypes.object,
  }

  let userDefinedContextTypes = null

  // configure the contextTypes to be settable by the user,
  // however also retaining the glamorous channel.
  // $FlowFixMe https://github.com/facebook/flow/issues/285
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
