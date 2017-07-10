import * as React from "react";

import glamorous, { withTheme, ThemeProvider } from "../";

// built-in DOM component factories

// ### SVG

const BuiltInStrictSVGStyleObjectInvalidKey = glamorous.svg(
  {
    fillRule: 'cat',
  },
)

const BuiltInStrictSVGStyleObjectInvalidProperty = glamorous.svg(
  {
    fillRule: 'cat',
  },
)

const BuiltInStrictSVGStyleFunctionInvalidProperty = glamorous.svg(
  () => ({
    fillRule: 'cat',
  })
)

// ### HTML

const BuiltInStrictDIVtyleObjectInvlalidKey = glamorous.div(
  {
    float: "cat",
  },
)

const BuiltInStrictDIVtyleObjectInvlalidProperty = glamorous.div(
  {
    float: "cat",
  },
)

const BuiltInStrictDIVStyleFunctionInvlalidKey = glamorous.div(
  () => ({
    float: "cat",
  })
)

const BuiltInStrictDIVStyleFunctionInvlalidProperty = glamorous.div(
  () => ({
    float: "cat",
  })
)

// self provided glamorousComponentFactory

interface TestComponentProps {
  className: string
}

const TestComponent: React.SFC<TestComponentProps> = (props) => (
    <div className={props.className} />
)

const StrictSVGStyleObject = glamorous(TestComponent)(
  {
    fillRule: 'cat',
  },
)

const StrictSVGStyleFunction = glamorous(TestComponent)(
  () => ({
    fillRule: 'cat',
  })
)

const BuiltInStrictStyleFunction = glamorous(TestComponent)(
  {
    float: "cat",
  },
)

const BuiltInStrictDivStyleFunction = glamorous(TestComponent)(
  () => ({
    float: "cat",
  })
)

// Theme

interface ExampleTheme {
  color: string
}

interface ThemeProps {
  title: string
  theme: ExampleTheme
}

const ComponentWithTheme: React.SFC<ThemeProps> = (props) => (
  <h3 style={{
    color: props.theme.colors
  }}>
    {props.title}
  </h3>
)

interface NotExampleTheme {
  color: number
}


const NonGlamorousThemedComponent = withTheme<
  ThemeProps,
  NotExampleTheme
>(ComponentWithTheme)


interface PropsWithoutTheme {
  title: string
}

const NonGlamorousThemedComponent = withTheme<
  PropsWithoutTheme
>(ComponentWithTheme)

// displayName

const TestDisplayName: React.SFC<object> = () => <div />

glamorous(
  TestDisplayName,
  {
    displayName: 0
  },
)

// custom glamorous component factory

interface ExampleComponentProps {
  visible: boolean
}

const ExampleComponent: React.SFC<ExampleComponentProps> = () => <div />

const StyledExampleComponent = glamorous(ExampleComponent)(
  (props) => ({
    display: props.visibles ? 'none' : 'hidden'
  })
)

const StyledExampleComponentKey = glamorous<{ visible: boolean }>('div')(
  (props) => ({
    display: props.visible ? 'none' : 'hidden'
  })
)

const usingStyledExampleComponent = (
  <div>
    <StyledExampleComponent visible="string" />
    <StyledExampleComponent/>
    <StyledExampleComponentKey visible="string" />
    <StyledExampleComponentKey/>
  </div>
)

glamorous('circle')({ allowReorder: false })
glamorous('div')({ color: false })

glamorous<{
  visible: string
}>(ExampleComponent)(
  (props) => ({
    display: props.visible ? 'none' : 'hidden'
  })
)

glamorous<{ visible: boolean }>('div')(
  (props) => ({
    display: props.visible === '' ? 'none' : 'hidden'
  })
)

// shouldClassNameUpdate

interface ShouldClassNameUpdateProps {
  color: string
}

const TestShouldClassNameUpdate: React.SFC<ShouldClassNameUpdateProps> = () => <div />

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

const pureDivFactory2 = glamorous<ShouldClassNameUpdateProps, ShouldClassNameUpdateContext>(TestShouldClassNameUpdate, {
  shouldClassNameUpdate: (props, previousProps, context, previousContext) => {
    if (context.colors !== previousContext.color) {
      return false
    }

    return true
  },
})
