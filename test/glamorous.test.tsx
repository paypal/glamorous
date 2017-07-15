import * as React from "react";
import glamorous, { withTheme, ThemeProvider } from "../";

// Needed if generating definition files
// https://github.com/Microsoft/TypeScript/issues/5938
import { ExtraGlamorousProps } from "../";

import { WithComponent } from "../"

// Glamorous config
glamorous.config.useDisplayNameInClassName = true

// Partial<Properties>
const Static = glamorous.div({
  "fontSize": 20,
  "textAlign": "center",
});

// classname string style
const Classname = glamorous.div(
  {
    "fontSize": 20,
    "textAlign": "center",
  },
  'example',
);

// StyleFunction
const StyleFunction = glamorous.h1<{ color: string }>(
  {
    "fontSize": "10px",
    "zIndex": "auto",
  },
  'example',
  (props) => ({
    "color": props.color,
  }),
);

// withComponent
const ExampleWithComponent = Classname
  .withComponent('p')

const OtherExampleWithComponent = StyleFunction
  .withComponent('p')

const UseWithComponent = () => (
  <Classname>
    <OtherExampleWithComponent color="red">
    </OtherExampleWithComponent>
  </Classname>
)


const StyleFunctionUseColor = () => (
  <StyleFunction color="red" />
)

// StyleFunction Array return
const StyleFunctionArray = glamorous.h1<{ color: string }>(
  (props) => [
    'example',
    {
      "color": props.color,
    }
  ],
);

// Style Array
const StyleArray = glamorous.h1<{ color: string }>(
  [
    'example',
    (props) => [
      'example',
      {
        "color": props.color,
      }
    ],
  ]
);

// theme styles
const Divider = glamorous.span<{}, { main: { color: string; } }>(
  {
    "fontSize": "10px",
    "zIndex": "auto"
  },
  ({theme}) => ({
    "color": theme.main && theme.main.color,
  }),
);

// n-number of styles
const SpanDivider = glamorous.span<{}, { awesome: string, main: string }>(
  {
    "fontSize": "10px",
  },
  ({theme}) => ({
    "color": theme.awesome,
  }),
  {
    "fontWeight": 500,
  },
  {
    "fontFamily": "Roboto",
    "fontWeight": 500,
  },
  ({theme}) => ({
    "color": theme.main,
  }),
);

interface DividerInsideDividerProps {
  color: string;
};

// component styles
const DividerInsideDivider = glamorous(Divider)<
  object,
  { main: { color: string; } }
>(
  {
    "fontSize": "10px",
  },
  ({theme}) => ({
    "color": theme.main.color,
  }),
);

const theme = {
  "main": {
    "color": "red",
  },
};

export const Balloon = () => (
  <ThemeProvider theme={theme}>
    <Divider color="blue">
      <DividerInsideDivider color="blue">
        <Static>Static</Static>
        <StyleFunction color="blue">
          Hello
        </StyleFunction>
      </DividerInsideDivider>
    </Divider>
  </ThemeProvider>
);

export class AirBalloon extends React.Component<{}, {}> {
  private spanElem: HTMLSpanElement;

  public render() {
    return (
      <Divider
        innerRef={(
          c: HTMLSpanElement
        ) => { this.spanElem = c; }}
      >
        Hello
        <SpanDivider>
          Span Divider
        </SpanDivider>
      </Divider>
    );
  }
}

class Test extends React.Component<object, object> {
  private div: HTMLDivElement
  render() {
    return <div ref={(c) => { this.div = c }} />
  }
}

// React Class Wrapped Component

class ClassToWrap extends React.Component<object, object> {
  render() {
    return <div />
  }
}

const WrappedClass = glamorous(ClassToWrap)({})

// React Stateless Wrapped Component

const StatelessToWrap: React.StatelessComponent<object> = () => (
  <div />
)

const WrappedStateless = glamorous(StatelessToWrap)({})

// Exported Component (for testing declaration generation)
export const ExportTest = glamorous.div({})

// Theme Provider

interface ExampleTheme {
  color: string
}

const exampleTheme: ExampleTheme = {
  color: "red",
}

const ThemedComponent = glamorous.h1<
  {},
  ExampleTheme
>({
  fontSize: '10px'
}, ({theme}) => ({
  color: theme ? theme.color : 'blue'
}))

export const ThemeProviderAndThemedComponent = () => (
  <ThemeProvider theme={exampleTheme}>
    <ThemedComponent />
  </ThemeProvider>
);

// Extended component with theme prop

interface ExampleTheme {
  color: string
}

interface ExternalProps {
  title: string
}

interface Props extends ExternalProps {
  theme: ExampleTheme
}

const ComponentWithTheme: React.SFC<Props> = (props) => (
  <h3 style={{
    color: props.theme.color
  }}>
    {props.title}
  </h3>
)

const NonGlamorousThemedComponent = withTheme<
  ExternalProps,
  ExampleTheme
>(ComponentWithTheme)

const UseNonGlamorousThemedComponent = (
  <NonGlamorousThemedComponent
    title='test'
  />
)
