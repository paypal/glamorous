import * as React from "react";

import glamorous, { withTheme, ThemeProvider } from "../";

// built-in DOM component factories

// ### SVG

const BuiltInStrictSVGStyleObjectInvalidKey = glamorous.svg(
  {
    flying: 'cat',
  },
)

const BuiltInStrictSVGStyleObjectInvalidProperty = glamorous.svg(
  {
    fillRule: 'cat',
  },
)

// Known to fail currently due to typescripts partial handling
const BuiltInStrictSVGStyleFunctionInvalidKey = glamorous.svg(
  () => ({
    flying: 'cat'
  })
)

const BuiltInStrictSVGStyleFunctionInvalidProperty = glamorous.svg(
  () => ({
    fillRule: 'cat',
  })
)

// ### HTML

const BuiltInStrictDIVtyleObjectInvlalidKey = glamorous.div(
  {
    flying: "cat",
  },
)

const BuiltInStrictDIVtyleObjectInvlalidProperty = glamorous.div(
  {
    float: "cat",
  },
)

const BuiltInStrictDIVStyleFunctionInvlalidKey = glamorous.div(
  () => ({
    flying: "cat",
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