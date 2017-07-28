import * as React from "react";
import glamorous, { withTheme, ThemeProvider } from "../";

// Needed if generating definition files
// https://github.com/Microsoft/TypeScript/issues/5938
import { ExtraGlamorousProps } from "../";

import { WithComponent, WithProps } from "../"

// Properties
const Static = glamorous.div({
  "fontSize": 20,
  "textAlign": "center",
});

// Properties Array
glamorous.div({
  overflowWrap: "break-word",
  display: ["flex", "block"],
});

glamorous.circle({
  textAlign: "center",
  display: ["marker", "block"],
});

// pseudo and complex Properties
glamorous.div({
  ':active': {
    "fontSize": 10,
  },
  '&:active': {
    "fontSize": 20,
    "textAlign": "center",
  },
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
const Divider = glamorous.span<{
  theme: { main: { color: string; } }
}>(
  {
    "fontSize": "10px",
    "zIndex": "auto"
  },
  ({theme}) => ({
    "color": theme.main && theme.main.color,
  }),
);

// n-number of styles
const SpanDivider = glamorous.span<{
  theme: { awesome: string, main: string }
}>(
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
      <DividerInsideDivider>
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
    return <div ref={(c: HTMLDivElement) => { this.div = c }} />
  }
}

// React Class Wrapped Component

interface ClassToWrapProps {
  className: string
  test: number
}

class ClassToWrap extends React.Component<ClassToWrapProps, object> {
  render() {
    return <div className={this.props.className} />
  }
}

const WrappedClass = glamorous(ClassToWrap)({})

const useWrappedClass = (
  <WrappedClass
    test={10}
    className=''
  />
)

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
  { theme: ExampleTheme }
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

interface Props {
  title: string
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
  Props,
  ExampleTheme
>(ComponentWithTheme)


const NonGlamorousAlsoThemedComponent = withTheme<
  Props
>(ComponentWithTheme)

const UseNonGlamorousThemedComponent = (
  <div>
    <NonGlamorousThemedComponent
      title='test'
    />
    <NonGlamorousAlsoThemedComponent
      title='test'
    />
  </div>
)

// displayName

const TestDisplayName: React.SFC<object> = () => <div />

glamorous(
  TestDisplayName,
  {
    displayName: 'example'
  },
)

// custom glamorous component factory

interface ExampleComponentProps {
  visible: boolean
}

const ExampleComponent: React.SFC<ExampleComponentProps> = () => <div />

const StyledExampleComponent = glamorous(ExampleComponent)(
  (props) => ({
    display: props.visible ? 'none' : 'block'
  })
)

const StyledExampleComponentHTMLKey = glamorous<{ visible: boolean }>('div')(
  (props) => ({
    display: props.visible ? 'none' : 'block'
  })
)

const StyledExampleComponentSVGKey = glamorous<{ visible: boolean }>('circle')(
  {
    fill: 'black',
  },
  (props) => ({
    display: props.visible ? 'none' : 'block'
  })
)

glamorous('circle')({ allowReorder: 'yes' })
glamorous('div')({ color: 'red' })

const usingStyledExampleComponent = (
  <div>
    <StyledExampleComponent
      visible={false}
    />
    <StyledExampleComponent
      visible={false}
      className=""
      theme={{}}
    />
    <StyledExampleComponentHTMLKey visible={false} />
    <StyledExampleComponentSVGKey visible={false} />
  </div>
)

// shouldClassNameUpdate

interface ShouldClassNameUpdateProps {
  color: string
}

const TestShouldClassNameUpdate: React.SFC<ShouldClassNameUpdateProps> = () => <div />

const pureDivFactory = glamorous(TestShouldClassNameUpdate, {
  shouldClassNameUpdate: (props, previousProps, context, previousContext) => {
    if (props.color !== props.color) {
      return false
    }
    return true
  },
})


interface ShouldClassNameUpdateContext {
  color: string
}

const pureDivFactory2 = glamorous<ShouldClassNameUpdateProps, ShouldClassNameUpdateContext>(TestShouldClassNameUpdate, {
  shouldClassNameUpdate: (props, previousProps, context, previousContext) => {
    if (context.color !== previousContext.color) {
      return false
    }

    return true
  },
})

const Div = pureDivFactory({marginLeft: 1})

// withProps

const WithPropsDiv = glamorous('div', {
  withProps: {primaryColor: 'red'}
})(
  (props) => ({
    color: props.primaryColor
  })
)

const SimpleComponent = () => <div />

const WithPropsSimpleComponent = glamorous(SimpleComponent, {
  withProps: {primaryColor: 'red'}
})(
  (props) => ({
    color: props.primaryColor
  })
)

const MethodWithPropsComponent = glamorous(SimpleComponent)({}).withProps({
  primaryColor: 'red'
})

const useWithProps = (
  <div>
    <WithPropsDiv />
    <WithPropsDiv primaryColor="red" />
    <WithPropsSimpleComponent />
    <WithPropsSimpleComponent primaryColor="red" />
    <MethodWithPropsComponent />
    <MethodWithPropsComponent primaryColor="1" />
  </div>
)

// withProps method
