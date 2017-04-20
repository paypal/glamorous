/*
 * This is a relatively small abstraction that's ripe for open sourcing.
 * Documentation is in the README.md
 */
import React, {Component} from 'react'
import {PropTypes} from './react-compat'
import {CHANNEL} from './constants'
import getGlamorClassName from './get-glamor-classname'

export default function createGlamorous(splitProps) {
  /**
   * This is the main export and the function that people
   * interact with most directly.
   *
   * It accepts a component which can be a string or
   * a React Component and returns
   * a "glamorousComponentFactory"
   * @param {String|ReactComponent} comp the component to render
   * @param {Object} options helpful info for the GlamorousComponents
   * @return {Function} the glamorousComponentFactory
   */
  return function glamorous(
    comp,
    {rootEl, displayName, forwardProps = []} = {},
  ) {
    return glamorousComponentFactory

    /**
     * This returns a React Component that renders the comp (closure)
     * with a className based on the given glamor styles object(s)
     * @param {...Object|Function} styles the styles to create with glamor.
     *   If any of these are functions, they are invoked with the component
     *   props and the return value is used.
     * @return {ReactComponent} the ReactComponent function
     */
    function glamorousComponentFactory(...styles) {
      /**
       * This is a component which will render the comp (closure)
       * with the glamorous styles (closure). Forwards any valid
       * props to the underlying component.
       * @param {Object} theme the theme object
       * @return {ReactElement} React.createElement
       */
      class GlamorousComponent extends Component {
        state = {theme: null}
        setTheme = theme => this.setState({theme})

        componentWillMount() {
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
            this.unsubscribe = this.context[CHANNEL].subscribe(this.setTheme)
          }
        }

        componentWillUnmount() {
          // cleanup subscription
          this.unsubscribe && this.unsubscribe()
        }

        render() {
          // in this function, we're willing to sacrafice a little on
          // readability to get better performance because it actually
          // matters.
          const props = this.props
          const {toForward, cssOverrides} = splitProps(
            props,
            GlamorousComponent,
          )

          // freeze the theme object in dev mode
          const theme = process.env.NODE_ENV === 'production' ?
            this.state.theme :
            Object.freeze(this.state.theme)
          // create className to apply
          const fullClassName = getGlamorClassName(
            GlamorousComponent.styles,
            props,
            cssOverrides,
            theme,
          )

          return React.createElement(GlamorousComponent.comp, {
            ref: props.innerRef,
            ...toForward,
            className: fullClassName,
          })
        }
      }

      GlamorousComponent.propTypes = {
        className: PropTypes.string,
        cssOverrides: PropTypes.object,
        theme: PropTypes.object,
        innerRef: PropTypes.func,
        glam: PropTypes.object,
      }

      GlamorousComponent.contextTypes = {
        [CHANNEL]: PropTypes.object,
      }

      Object.assign(
        GlamorousComponent,
        getGlamorousComponentMetadata({
          comp,
          styles,
          rootEl,
          forwardProps,
          displayName,
        }),
      )
      return GlamorousComponent
    }
  }

  function getGlamorousComponentMetadata({
    comp,
    styles,
    rootEl,
    forwardProps,
    displayName,
  }) {
    const componentsComp = comp.comp ? comp.comp : comp
    return {
      // join styles together (for anyone doing: glamorous(glamorous.a({}), {}))
      styles: comp.styles ? comp.styles.concat(styles) : styles,
      // keep track of the ultimate rootEl to render (we never
      // actually render anything but
      // the base component, even when people wrap a glamorous
      // component in glamorous
      comp: componentsComp,
      rootEl: rootEl || componentsComp,
      forwardProps,
      // set the displayName to something that's slightly more
      // helpful than `GlamorousComponent` :)
      displayName: displayName || `glamorous(${getDisplayName(comp)})`,
    }
  }

  function getDisplayName(comp) {
    return typeof comp === 'string' ?
      comp :
      comp.displayName || comp.name || 'unknown'
  }
}
