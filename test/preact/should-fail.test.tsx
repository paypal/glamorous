import {Component, h, FunctionalComponent} from 'preact'

import glamorous, {withTheme, ThemeProvider} from 'glamorous/preact'

// built-in DOM component factories

// ### SVG

const BuiltInStrictSVGStyleObjectInvalidKey = glamorous.svg({
  fillRule: 'cat',
})

const BuiltInStrictSVGStyleObjectInvalidProperty = glamorous.svg({
  fillRule: 'cat',
})

const BuiltInStrictSVGStyleFunctionInvalidProperty = glamorous.svg(() => ({
  fillRule: 'cat',
}))

// ### HTML

const BuiltInStrictDIVtyleObjectInvlalidKey = glamorous.div({
  float: 'cat',
})

const BuiltInStrictDIVtyleObjectInvlalidProperty = glamorous.div({
  float: 'cat',
})

const BuiltInStrictDIVStyleFunctionInvlalidKey = glamorous.div(() => ({
  float: 'cat',
}))

const BuiltInStrictDIVStyleFunctionInvlalidProperty = glamorous.div(() => ({
  float: 'cat',
}))

// self provided glamorousComponentFactory

interface TestComponentProps {
  className: string
}

const TestComponent: FunctionalComponent<TestComponentProps> = props => (
  <div className={props.className} />
)

const StrictSVGStyleObject = glamorous(TestComponent)({
  fillRule: 'cat',
})

const StrictSVGStyleFunction = glamorous(TestComponent)(() => ({
  fillRule: 'cat',
}))

const BuiltInStrictStyleFunction = glamorous(TestComponent)({
  float: 'cat',
})

const BuiltInStrictDivStyleFunction = glamorous(TestComponent)(() => ({
  float: 'cat',
}))

// Theme

interface ExampleTheme {
  color: string
}

interface ThemeProps {
  title: string
  theme: ExampleTheme
}

const ComponentWithTheme: FunctionalComponent<ThemeProps> = props => (
  <h3
    style={{
      color: props.theme.colors,
    }}
  >
    {props.title}
  </h3>
)

interface PropsWithoutTheme {
  title: string
}

const NonGlamorousThemedComponent = withTheme<PropsWithoutTheme>(
  ComponentWithTheme,
)

// displayName

const TestDisplayName: FunctionalComponent<object> = () => <div />

glamorous(TestDisplayName, {
  displayName: 0,
})

// custom glamorous component factory

interface ExampleComponentProps {
  visible: boolean
}

const ExampleComponent: FunctionalComponent<ExampleComponentProps> = () => (
  <div />
)

glamorous(ExampleComponent)(props => ({
  display: props.visibles ? 'none' : 'hidden',
}))

glamorous<{visible: boolean}>('div')(props => ({
  display: props.visible ? 'none' : 'hidden',
}))

const StyledExampleComponent = glamorous(ExampleComponent)()
const StyledExampleComponentKey = glamorous<{visible: boolean}>('div')()

const usingStyledExampleComponent = (
  <div>
    <StyledExampleComponent visible="string" />
    <StyledExampleComponent />
    <StyledExampleComponentKey visible="string" />
    <StyledExampleComponentKey />
  </div>
)

glamorous('circle')({allowReorder: false})
glamorous('div')({color: false})

glamorous<{
  visible: string
}>(ExampleComponent)(props => ({
  display: props.visible ? 'none' : 'hidden',
}))

glamorous<{visible: boolean}>('div')(props => ({
  display: props.visible === '' ? 'none' : 'hidden',
}))

// shouldClassNameUpdate

interface ShouldClassNameUpdateProps {
  color: string
}

const TestShouldClassNameUpdate: FunctionalComponent<
  ShouldClassNameUpdateProps
> = () => <div />

const pureDivFactory0 = glamorous(TestShouldClassNameUpdate, {
  shouldClassNameUpdate: (props, previousProps, context, previousContext) => {
    if (props.colors !== props.color) {
      return false
    }
    return true
  },
})

const pureDivFactory1 = glamorous(TestShouldClassNameUpdate, {
  shouldClassNameUpdate: (props, previousProps, context, previousContext) => {
    if (props.color !== props.color) {
      return false
    }
    return 1
  },
})

interface ShouldClassNameUpdateContext {
  color: string
}

const pureDivFactory2 = glamorous<
  ShouldClassNameUpdateProps,
  ShouldClassNameUpdateContext
>(TestShouldClassNameUpdate, {
  shouldClassNameUpdate: (props, previousProps, context, previousContext) => {
    if (context.colors !== previousContext.color) {
      return false
    }

    return true
  },
})

// withProps
glamorous('div', {
  withProps: '',
})

glamorous('div', {
  withProps: {visible: false},
})(props => ({
  primaryColor: props.visible,
}))

glamorous('div')().withProps()
glamorous('div')().withProps('')
glamorous('div')().withProps(false)

const WithPropsDiv = glamorous('div', {
  withProps: {primaryColor: 'red'},
})(props => ({
  primaryColor: props.primaryColor,
}))

const SimpleComponent = () => <div />

const MethodWithPropsComponent = glamorous(SimpleComponent)({}).withProps({
  primaryColor: 'red',
})

const WithPropsSimpleComponent = glamorous(SimpleComponent, {
  withProps: {primaryColor: 'red'},
})(props => ({
  primaryColor: props.primaryColor,
}))

const useWithProps = (
  <div>
    <WithPropsDiv d="" />
    <WithPropsDiv primaryColor={1} />
    <WithPropsSimpleComponent d="" />
    <WithPropsSimpleComponent primaryColor={1} />
    <MethodWithPropsComponent d="" />
    <MethodWithPropsComponent primaryColor={1} />
  </div>
)

// Properties Array
glamorous.div({
  textAlign: 'center',
  display: ['block', 'flexs'],
})

glamorous.circle({
  textAlign: 'center',
  display: ['flexs', 'block'],
})

// propsAreCssOverrides

const ComponentPropsAreCssOverides = glamorous(SimpleComponent, {
  propsAreCssOverrides: true,
})({})
const ComponentPropsAreNotCssOverides = glamorous(SimpleComponent, {
  propsAreCssOverrides: false,
})({})
const ComponentPropsAreAlsoNotCssOverides = glamorous(SimpleComponent)({})

const DivPropsAreCssOverides = glamorous('div', {propsAreCssOverrides: true})(
  {},
)
const DivPropsAreNotCssOverides = glamorous('div', {
  propsAreCssOverrides: false,
})({})
const DivPropsAreAlsoNotCssOverides = glamorous('div')({})

const usePropsAreCssOverrides = (
  <div>
    <ComponentPropsAreCssOverides display={'blocks'} />
    <ComponentPropsAreNotCssOverides display={'block'} />
    <ComponentPropsAreAlsoNotCssOverides display={'block'} />

    <DivPropsAreCssOverides display={'blocks'} />
    <DivPropsAreNotCssOverides display={'block'} />
    <DivPropsAreAlsoNotCssOverides display={'block'} />
  </div>
)
