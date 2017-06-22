import * as React from "react";
import glamorous, { withTheme, ThemeProvider } from "../";

// Needed if generating definition files
// https://github.com/Microsoft/TypeScript/issues/5938
import { ExtraGlamorousProps } from "../";

// Glamorous config
glamorous.config.useDisplayNameInClassName = true

// static styles
const Static = glamorous.div({
  "fontSize": 20,
  "textAlign": "center",
});

// dynamic styles
const Title = glamorous.h1<{ color: string }>(
  {
    "fontSize": "10px",
    "zIndex": "auto",
  },
  (props) => ({
    "color": props.color,
  }),
);

const UseTitle = () => (
  <Title color="red" />
)

// theme styles
const Divider = glamorous.span<{}, { main: { color: string; } }>(
  {
    "fontSize": "10px",
    "zIndex": "auto"
  },
  (props, theme) => ({
    "color": theme && theme.main.color,
  }),
);

// n-number of styles
const SpanDivider = glamorous.span<{}, { awesome: string, main: string }>(
  {
    "fontSize": "10px",
  },
  (props, theme) => ({
    "color": theme && theme.awesome,
  }),
  {
    "fontWeight": 500,
  },
  {
    "fontFamily": "Roboto",
    "fontWeight": 500,
  },
  (props, theme) => ({
    "color": theme && theme.main,
  }),
);

interface DividerInsideDividerProps {
  color: string;
};

// component styles
const DividerInsideDivider = glamorous(Divider)(
  {
    "fontSize": "10px",
  },
  (props, theme: { main: { color: string; } }) => ({
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
        <Title color="blue">Hello</Title>
      </DividerInsideDivider>
    </Divider>
  </ThemeProvider>
);

export class AirBalloon extends React.Component<{}, {}> {
  private spanElem: HTMLSpanElement;

  public render() {
    return (
      <Divider innerRef={(
        c: HTMLSpanElement
      ) => { this.spanElem = c; }}>
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
}, (props, theme) => ({
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
