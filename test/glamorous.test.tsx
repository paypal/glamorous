import * as React from "react";
import glamorous, { ThemeProvider } from "../";

// static styles
const Static = glamorous.div({
  "fontSize": 20,
  "textAlign": "center",
});

// dynamic styles
const Title = glamorous.h1(
  {
    "fontSize": "10px",
    "zIndex": "auto",
  },
  (props: { color: string; }) => ({
    "color": props.color,
  }),
);

// theme styles
const Divider = glamorous.span(
  {
    "fontSize": "10px",
    "zIndex": "auto"
  },
  (props, theme: { main: { color: string; }}) => ({
    "color": theme.main.color,
  }),
);

// n-number of styles
const SpanDivider = glamorous.span(
  {
    "fontSize": "10px",
  },
  (props, theme) => ({
    "color": theme,
  }),
  {
    "fontWeight": 500,
  },
  {
    "fontFamily": "Roboto",
    "fontWeight": 500,
  },
  (props, theme: { main: { color: string; }}) => ({
    "color": theme.main.color,
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
  (props, theme: { main: { color: string; }}) => ({
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
        <Title>Hello</Title>
      </DividerInsideDivider>
    </Divider>
  </ThemeProvider>
);

export class AirBalloon extends React.Component<{}, {}> {
  private spanElem: HTMLSpanElement;

  public render() {
    return (
      <Divider ref={(
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
    return <div ref={(c) => { this.div = c}}/>
  }
}