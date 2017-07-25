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
