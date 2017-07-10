// @flow
import React from 'react'
import glamorous, {ThemeProvider, withTheme} from '../../src/'

const {Div, Circle} = glamorous

let ui

// Props
const TestDiv = glamorous.div(
  {
    backgroundColor: 'red',
  },
  ({border}: {border: string}) => ({
    border,
  }),
)
ui = <TestDiv border="1px solid black" />

const TestDiv2 = glamorous(TestDiv)((props: {color: string}) => ({
  color: props.color,
}))
ui = <TestDiv2 color="red" border="asd" />

// Inferring prop types with multiple dynamic styles
const TestDivWithMultipleDynamicStyles = glamorous.div(
  {
    backgroundColor: 'red',
  },
  ({border}: {border: string}) => ({
    border,
  }),
  ({color}: {color: string}) => ({
    color,
  }),
)
ui = <TestDivWithMultipleDynamicStyles border="1px solid black" color="red" />

// Props passed with withComponent
const TestSpan = TestDiv.withComponent('span')
ui = <TestSpan border="asd" />

// Props with Array of styles
const DivOfStyledArray = glamorous.div(
  [
    {
      backgroundColor: 'green',
    },
    {
      display: 'flex',
    },
  ],
  ({color}: {color: string}) => ({
    color,
  }),
)
ui = <DivOfStyledArray color="red" />

// Props with many style objects
const DivOfStyledObjects = glamorous.div(
  {
    backgroundColor: 'green',
  },
  ({color}: {color: string}) => ({
    color,
  }),
  {
    display: 'flex',
  },
)
ui = <DivOfStyledObjects color="red" />

// Media queries
const Heading = glamorous.h1({
  fontSize: '2.4em',
  marginTop: 10,
  color: '#CC3A4B',
  '@media only screen and (max-width: 500px)': {
    fontSize: '1.8em',
    backgroundColor: '#CC3A4B',
    color: 'white',
  },
})

// Pseudo classes
const Link = glamorous.a({
  ':visited': {
    color: 'darkblue',
  },
  ':hover,:active,:focus': {
    color: 'darkred',
  },
})

// inner ref
const MyInput = glamorous.input({borderRadius: 4, padding: '4px 8px'})
class MyComponent extends React.Component {
  alertValue: (e: Event) => void
  _inputRef: HTMLInputElement

  constructor(props: mixed) {
    super(props)
    this.alertValue = e => {
      e.preventDefault()
      alert(this._inputRef.value)
    }
  }
  render() {
    return (
      <form onSubmit={this.alertValue}>
        <MyInput
          innerRef={(r: HTMLInputElement) => {
            this._inputRef = r
          }}
        />
        <glamorous.Button type="submit" marginTop={12} display="block">
          Submit
        </glamorous.Button>
      </form>
    )
  }
}

// CSS props on GlamorousComponent
ui = <MyInput css={{zIndex: 1}} />

// Theming
const someTheme = {
  main: {color: 'red'},
}

// a themed <Title> component
const Title = glamorous.h1(
  {
    fontSize: '10px',
  },
  (props: mixed, theme?: typeof someTheme) => ({
    //Since theme is possible undefined, we have to do some sanity check for its existence
    color: theme && theme.main.color,
  }),
)

const SubTitle = ({theme}: {theme: typeof someTheme}) =>
  <div css={{color: theme.main.color}} />

const MyStyledSubTitle = withTheme(SubTitle)

ui = <SubTitle theme={someTheme} /> // theme props needed here

const ThemedContainer = (
  <ThemeProvider theme={someTheme}>
    <Title>Hello!</Title>
    <MyStyledSubTitle /> {/* theme props not needed here*/}
  </ThemeProvider>
)

// GlamorousOptions
// displayName and propsAreCssOverrides
const myGlamorousComponentFactory = glamorous('div', {
  displayName: 'MyGlamorousComponent',
  propsAreCssOverrides: false,
})

// forwardProps and rootEl
const ForwardPropsComponent = ({
  shouldRender,
  ...rest
}: {
  shouldRender: boolean,
  rest: Array<mixed>,
}) => (shouldRender ? <div {...rest} /> : null)

const MyStyledComponent = glamorous(MyComponent, {
  forwardProps: ['shouldRender'],
  rootEl: 'div',
})(props => ({
  fontSize: props.big ? 36 : 24,
}))

ui = <MyStyledComponent shouldRender={true} big={false} id="hello" />

// Buildtin Components
ui = <Div float={'left'} />
ui = <Circle cx={10} cy={10} />
