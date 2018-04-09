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
  function glamorous(comp, config = {}) {
    const {
      rootEl,
      displayName,
      shouldClassNameUpdate,
      filterProps = [],
      forwardProps = [],
      propsAreCssOverrides = comp.propsAreCssOverrides,
      withProps: basePropsToApply,
    } = config
    Object.assign(glamorousComponentFactory, {withConfig})
    return glamorousComponentFactory

    function withConfig(newConfig) {
      return glamorous(comp, {...config, ...newConfig})
    }

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
        function GlamorousInnerComponent(props, context) {
          props = getPropsToApply(
            GlamorousComponent.propsToApply,
            {},
            props,
            context,
          )
          const updateClassName = shouldUpdate(props, context, this.previous)

          if (shouldClassNameUpdate) {
            this.previous = {props, context}
          }

          const {toForward, cssOverrides, cssProp} = splitProps(
            props,
            GlamorousComponent,
          )

          // create className to apply
          this.className = updateClassName
            ? getGlamorClassName({
                styles: GlamorousComponent.styles,
                props,
                cssOverrides,
                cssProp,
                context,
                displayName: GlamorousComponent.displayName,
              })
            : this.className

          return React.createElement(GlamorousComponent.comp, {
            // if innerRef is forwarded we don't want to apply it here
            ref: 'innerRef' in toForward ? undefined : props.innerRef,
            ...toForward,
            className: this.className,
          })
        },
        {noWarn: true, createElement: false},
      )

      GlamorousComponent.propTypes = {
        // className accepts an object due to glamor's css function
        // returning an object with a toString method that gives the className
        className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        cssOverrides: PropTypes.object,
        innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
        glam: PropTypes.object,
      }

      function withComponent(newComp, options = {}) {
        const {
          forwardProps: fwp,
          filterProps: flp,
          ...componentProperties
        } = GlamorousComponent
        return glamorous(
          {
            ...componentProperties,
            comp: newComp,
            rootEl: getRootEl(newComp),
          },
          {
            // allows the forwardProps and filterProps to be overridden
            forwardProps: fwp,
            filterProps: flp,
            ...options,
          },
        )()
      }

      function withProps(...propsToApply) {
        return glamorous(GlamorousComponent, {withProps: propsToApply})()
      }

      function shouldUpdate(props, context, previous) {
        // exiting early so components which do not use this
        // optimization are not penalized by hanging onto
        // references to previous props and context
        if (!shouldClassNameUpdate) {
          return true
        }
        let update = true
        if (previous) {
          if (
            !shouldClassNameUpdate(
              previous.props,
              props,
              previous.context,
              context,
            )
          ) {
            update = false
          }
        }

        return update
      }

      Object.assign(
        GlamorousComponent,
        getGlamorousComponentMetadata({
          comp,
          styles,
          rootEl,
          filterProps,
          forwardProps,
          displayName,
          propsToApply: basePropsToApply,
        }),
        {
          isGlamorousComponent: true,
          propsAreCssOverrides,
          withComponent,
          withProps,
          withConfig,
        },
      )
      return GlamorousComponent
    }
  }

  function getGlamorousComponentMetadata({
    comp,
    styles,
    rootEl,
    filterProps,
    forwardProps,
    displayName,
    propsToApply: basePropsToApply,
  }) {
    const componentsComp = comp.comp ? comp.comp : comp
    const propsToApply = comp.propsToApply
      ? [...comp.propsToApply, ...arrayify(basePropsToApply)]
      : arrayify(basePropsToApply)
    return {
      // join styles together (for anyone doing: glamorous(glamorous.a({}), {}))
      styles: when(comp.styles, styles),
      // keep track of the ultimate rootEl to render (we never
      // actually render anything but
      // the base component, even when people wrap a glamorous
      // component in glamorous
      comp: componentsComp,
      rootEl: rootEl || getRootEl(comp),
      // join forwardProps and filterProps
      // (for anyone doing: glamorous(glamorous.a({}), {}))
      forwardProps: when(comp.forwardProps, forwardProps),
      filterProps: when(comp.filterProps, filterProps),
      // set the displayName to something that's slightly more
      // helpful than `GlamorousComponent` :)
      displayName: displayName || `glamorous(${getDisplayName(comp)})`,
      // these are props that should be applied to the component at render time
      propsToApply,
    }
  }
}

/**
 * reduces the propsToApply given to a single props object
 * @param {Array} propsToApply an array of propsToApply objects:
 *   - object
 *   - array of propsToApply items
 *   - function that accepts the accumulated props and the context
 * @param {Object} accumulator an object to apply props onto
 * @param {Object} props the props that should ultimately take precedence
 * @param {*} context the context object
 * @return {Object} the reduced props
 */
function getPropsToApply(propsToApply, accumulator, props, context) {
  // using forEach rather than reduce here because the reduce solution
  // effectively did the same thing because we manipulate the `accumulator`
  propsToApply.forEach(propsToApplyItem => {
    if (typeof propsToApplyItem === 'function') {
      return Object.assign(
        accumulator,
        propsToApplyItem(Object.assign({}, accumulator, props), context),
      )
    } else if (Array.isArray(propsToApplyItem)) {
      return Object.assign(
        accumulator,
        getPropsToApply(propsToApplyItem, accumulator, props, context),
      )
    }
    return Object.assign(accumulator, propsToApplyItem)
  })
  // props wins
  return Object.assign(accumulator, props)
}

function arrayify(x = []) {
  return Array.isArray(x) ? x : [x]
}

function when(comp, prop) {
  return comp ? comp.concat(prop) : prop
}

function getRootEl(comp) {
  return comp.rootEl ? comp.rootEl : comp.comp || comp
}

function getDisplayName(comp) {
  return typeof comp === 'string'
    ? comp
    : comp.displayName || comp.name || 'unknown'
}
