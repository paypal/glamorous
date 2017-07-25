/*
 * This is a relatively small abstraction that's ripe for open sourcing.
 * Documentation is in the README.md
 */
import React from 'react'
import {PropTypes} from './react-compat'
import withTheme from './with-theme'
import getGlamorClassName from './get-glamor-classname'

export default createGlamorous

function createGlamorous(splitProps) {
  return glamorous

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
  function glamorous(comp, {rootEl, displayName, forwardProps = []} = {}) {
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
       */
      const GlamorousComponent = withTheme(
        (props, context) => {
          /* eslint no-use-before-define: 0 */
          const {toForward, cssOverrides, cssProp} = splitProps(
            props,
            GlamorousComponent,
          )

          // create className to apply
          const className = getGlamorClassName({
            styles: GlamorousComponent.styles,
            props,
            cssOverrides,
            cssProp,
            context,
            displayName: GlamorousComponent.displayName,
          })

          return React.createElement(GlamorousComponent.comp, {
            ref: props.innerRef,
            ...toForward,
            className,
          })
        },
        {noWarn: true, createElement: false},
      )

      GlamorousComponent.propTypes = {
        className: PropTypes.string,
        cssOverrides: PropTypes.object,
        innerRef: PropTypes.func,
        glam: PropTypes.object,
      }

      function withComponent(newComp, options = {}) {
        return glamorous(newComp, {
          forwardProps: GlamorousComponent.forwardProps,
          ...options,
        })(GlamorousComponent.styles)
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
        {withComponent, isGlamorousComponent: true},
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
      styles: when(comp.styles, styles),
      // keep track of the ultimate rootEl to render (we never
      // actually render anything but
      // the base component, even when people wrap a glamorous
      // component in glamorous
      comp: componentsComp,
      rootEl: rootEl || componentsComp,
      // join forwardProps (for anyone doing: glamorous(glamorous.a({}), {}))
      forwardProps: when(comp.forwardProps, forwardProps),
      // set the displayName to something that's slightly more
      // helpful than `GlamorousComponent` :)
      displayName: displayName || `glamorous(${getDisplayName(comp)})`,
    }
  }

  function when(comp, prop) {
    return comp ? comp.concat(prop) : prop
  }

  function getDisplayName(comp) {
    return typeof comp === 'string' ?
      comp :
      comp.displayName || comp.name || 'unknown'
  }
}
