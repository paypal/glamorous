import React, {Component} from 'react'
import {PropTypes} from './react-compat'
import {CHANNEL} from './theme-provider'

function withTheme(WrappedComponent) {
  class WithTheme extends Component {
    state = {theme: null}
    setTheme = theme => this.setState({theme})

    componentWillMount() {
      const {theme} = this.props
      if (this.context[CHANNEL]) {
        // if a theme is provided via props, it takes precedence over context
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
        this.unsubscribe = this.context[CHANNEL].subscribe(this.setTheme)
      }
    }

    componentWillUnmount() {
      // cleanup subscription
      this.unsubscribe && this.unsubscribe()
    }

    render() {
      return <WrappedComponent {...this.props} theme={this.state.theme} />
    }
  }

  WithTheme.propTypes = {
    theme: PropTypes.object,
  }

  WithTheme.contextTypes = {
    [CHANNEL]: PropTypes.object,
  }

  return WithTheme
}

export default withTheme
