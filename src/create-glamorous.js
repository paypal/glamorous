// @flow
/*
 * This is a relatively small abstraction that's ripe for open sourcing.
 * Documentation is in the README.md
 */
import React from 'react'
import {PropTypes} from './react-compat'
import withTheme from './with-theme'
import getGlamorClassName from './get-glamor-classname'
import type {
  SplittableProps,
  SplitPropsOptions,
  SplitPropsResult,
} from './split-props'
import type {FunctionalComponent, ComponentClass} from './types/React'
import type {Style} from './types/Style'
import type {Theme} from './theme-provider'

type GlamorousOptions = {
  displayName?: string,
  rootEl?: string,
  forwardProps?: Array<string>,
};

type RenderableComponent =
  | ComponentClass
  | FunctionalComponent
  | (ComponentClass & GlamorousStatics)
  | string;

type GlamorousStatics = {
  isGlamorousComponent: true,
  styles: Array<Style>,
  comp: string,
  rootEl: ComponentClass | FunctionalComponent | string,
  forwardProps: Array<string>,
  withComponent: (
    RenderableComponent,
    ?GlamorousOptions,
  ) => ComponentClass & GlamorousStatics,
};

export default createGlamorous

function createGlamorous(
  splitProps: (SplittableProps, SplitPropsOptions) => SplitPropsResult,
) {
  // TODO: in a breaking version, make this default to true
  glamorous.config = {useDisplayNameInClassName: false}

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
  function glamorous(
    comp: string | ComponentClass | FunctionalComponent,
    {rootEl, displayName, forwardProps = []}: GlamorousOptions = {},
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
    function glamorousComponentFactory(...styles: Array<Style>) {
      /**
       * This is a component which will render the comp (closure)
       * with the glamorous styles (closure). Forwards any valid
       * props to the underlying component.
       */
      let FinalGlamorousComponent // eslint-disable-line prefer-const
      const ThemedComponentForGlamorous = withTheme(
        (props, context) => {
          /* eslint no-use-before-define: 0 */
          const splitPropsResult = splitProps(props, FinalGlamorousComponent)
          const {toForward, cssProp} = splitPropsResult
          let cssOverrides
          if (splitPropsResult.cssOverrides === undefined) {
            // Tiny mode
            cssOverrides = {}
          } else {
            ({cssOverrides} = splitPropsResult)
          }

          // freeze the theme object in dev mode
          const theme: Theme = process.env.NODE_ENV === 'production' ?
            props.theme :
            Object.freeze(props.theme)

          // create className to apply
          const fullClassName = getGlamorClassName({
            styles: FinalGlamorousComponent.styles,
            props,
            cssOverrides,
            cssProp,
            theme,
            context,
          })
          const debugClassName = glamorous.config.useDisplayNameInClassName ?
            cleanClassname(FinalGlamorousComponent.displayName) :
            ''
          const className = `${fullClassName} ${debugClassName}`.trim()

          return React.createElement(FinalGlamorousComponent.comp, {
            ref: props.innerRef,
            ...toForward,
            className,
          })
        },
        {noWarn: true, createElement: false},
      )

      function withComponent(
        newComp: RenderableComponent,
        options: GlamorousOptions = {},
      ) {
        return glamorous(newComp, {
          forwardProps: FinalGlamorousComponent.forwardProps,
          ...options,
        })(FinalGlamorousComponent.styles)
      }

      class GlamorousComponent extends ThemedComponentForGlamorous {
        // $FlowFixMe Flow's builtin React types don't like overriding propTypes
        static propTypes = {
          className: PropTypes.string,
          cssOverrides: PropTypes.object,
          theme: PropTypes.object,
          innerRef: PropTypes.func,
          glam: PropTypes.object,
        }

        static styles: Array<Style>
        static comp: ComponentClass | FunctionalComponent | string
        static rootEl: ComponentClass | FunctionalComponent | string
        static forwardProps: Array<string>
        static isGlamorousComponent: true
        static withComponent: typeof withComponent
      }

      FinalGlamorousComponent = GlamorousComponent

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

  type GlamorousComponentMetaData = {
    comp: RenderableComponent,
    rootEl: string,
    displayName: string,
    styles: Array<Style>,
    forwardProps: Array<string>,
  };

  // eslint-disable-next-line complexity
  function getGlamorousComponentMetadata({
    comp,
    styles,
    rootEl,
    forwardProps,
    displayName,
  }: {
    comp: RenderableComponent,
    styles: Array<Style>,
    rootEl?: string,
    forwardProps?: Array<string>,
    displayName?: string,
  }): GlamorousComponentMetaData {
    let componentsComp
    if (typeof comp === 'string') {
      componentsComp = comp
    } else if (comp.isGlamorousComponent) {
      // Force-casting here because flow doesn't think
      // comp.isGlamorousComponent is enough to know that this is a
      // ComponentClass & GlamorousStatics.
      componentsComp = ((comp: any): ComponentClass & GlamorousStatics).comp
    } else {
      componentsComp = comp
    }

    const metaData = {}

    // keep track of the ultimate rootEl to render (we never
    // actually render anything but
    // the base component, even when people wrap a glamorous
    // component in glamorous
    metaData.comp = componentsComp

    // TODO: what if componentsComp isn't a string?
    metaData.rootEl = rootEl || componentsComp

    // set the displayName to something that's slightly more
    // helpful than `GlamorousComponent` :)
    metaData.displayName = displayName || `glamorous(${getDisplayName(comp)})`

    if (comp.isGlamorousComponent) {
      // Force-casting here because flow doesn't think comp.isGlamorousComponent
      // is enough to know that this is a ComponentClass & GlamorousStatics.
      const compAsGlamorous = ((comp: any): ComponentClass & GlamorousStatics)
      // join styles together
      // (for anyone doing: glamorous(glamorous.a({}), {}))
      metaData.styles = concatMaybe(compAsGlamorous.styles, styles)
      // join forwardProps (for anyone doing: glamorous(glamorous.a({}), {}))
      metaData.forwardProps = concatMaybe(
        compAsGlamorous.forwardProps,
        forwardProps,
      )
    } else {
      metaData.styles = styles || []
      metaData.forwardProps = forwardProps || []
    }

    // Force casting here because I'm sure that we've satisfied all the
    // properties in this type by now (but flow isn't, because it doesn't
    // look through the property assignments in the if statement).
    return ((metaData: any): GlamorousComponentMetaData)
  }

  function concatMaybe<T>(first: ?Array<T>, second: ?Array<T>): ?Array<T> {
    return first && second ? first.concat(second) : second
  }

  function getDisplayName(comp): string {
    return typeof comp === 'string' ?
      comp :
      comp.displayName || comp.name || 'unknown'
  }

  return glamorous
}

function cleanClassname(className) {
  return className.replace(/ /g, '-').replace(/[^A-Za-z0-9\-_]/g, '_')
}
