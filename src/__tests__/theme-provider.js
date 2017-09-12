/* eslint func-style:0 */
import React, {Component} from 'react'
import {render, mount} from 'enzyme'
import glamorous from '../'
import ThemeProvider from '../theme-provider'
import {CHANNEL} from '../constants'

jest.mock('../constants')

const getMockedContext = () => ({
  [CHANNEL]: {
    getState: () => {},
    setState: () => {},
    subscribe: () => 1,
    unsubscribe: jest.fn(),
  },
})

test('renders a component with theme', () => {
  const Comp = glamorous.div(
    {
      color: 'red',
    },
    ({theme}) => ({padding: theme.padding}),
  )
  expect(
    render(
      <ThemeProvider theme={{padding: '10px'}}>
        <Comp />
      </ThemeProvider>,
    ),
  ).toMatchSnapshot()
})

test('renders inverted theme', () => {
  const Comp = glamorous.div(({theme: {fg, bg}}) => ({
    backgroundColor: bg,
    color: fg,
  }))
  const theme = {
    fg: 'palevioletred',
    bg: 'white',
  }
  const invertTheme = ({fg, bg}) => ({
    fg: bg,
    bg: fg,
  })
  expect(
    render(
      <ThemeProvider theme={theme}>
        <div>
          <Comp />
          <ThemeProvider theme={invertTheme}>
            <Comp />
          </ThemeProvider>
        </div>
      </ThemeProvider>,
    ),
  ).toMatchSnapshot()
})

test('throws if inverted theme is not object', () => {
  const Comp = glamorous.div(({theme: {fg, bg}}) => ({
    backgroundColor: bg,
    color: fg,
  }))
  const theme = {
    fg: 'palevioletred',
    bg: 'white',
  }
  const invertTheme = () => 1
  expect(() =>
    render(
      <ThemeProvider theme={theme}>
        <div>
          <Comp />
          <ThemeProvider theme={invertTheme}>
            <Comp />
          </ThemeProvider>
        </div>
      </ThemeProvider>,
    ),
  ).toThrowErrorMatchingSnapshot()
})

test('theme properties updates get propagated down the tree', () => {
  class Parent extends Component {
    state = {
      padding: 10,
    }

    render() {
      return (
        <ThemeProvider theme={{padding: this.state.padding}}>
          <Child />
        </ThemeProvider>
      )
    }
  }
  const Child = glamorous.div(
    {
      color: 'red',
    },
    ({theme}) => ({padding: theme.padding}),
  )
  const wrapper = mount(<Parent />)
  expect(wrapper).toMatchSnapshot(`with theme prop of padding 10px`)
  wrapper.setState({padding: 20})
  expect(wrapper).toMatchSnapshot(`with theme prop of padding 20px`)
})

test('merges nested themes', () => {
  const One = glamorous.div({}, ({theme: {padding, margin}}) => ({
    padding,
    margin,
  }))
  const Two = glamorous.div({}, ({theme: {padding, margin}}) => ({
    padding,
    margin,
  }))
  expect(
    mount(
      <div>
        <ThemeProvider theme={{padding: 1, margin: 1}}>
          <div>
            <One />
            <ThemeProvider theme={{margin: 2}}>
              <Two />
            </ThemeProvider>
          </div>
        </ThemeProvider>
      </div>,
    ),
  ).toMatchSnapshot()
})

test('renders if children are null', () => {
  expect(
    mount(
      <ThemeProvider theme={{padding: 1}}>{false && <div />}</ThemeProvider>,
    ),
  ).toMatchSnapshot()
})

test('cleans up outer theme subscription when unmounts', () => {
  const context = getMockedContext()
  const wrapper = mount(<ThemeProvider theme={{}} />, {context})
  wrapper.unmount()
  expect(context[CHANNEL].unsubscribe).toHaveBeenCalled()
})

test('does nothing when receive same theme via props', () => {
  const theme = {margin: 2}
  const wrapper = mount(<ThemeProvider theme={theme} />)
  expect(wrapper).toMatchSnapshot(`with theme prop of margin 2px`)
  wrapper.setProps({theme})
  expect(wrapper).toMatchSnapshot(`with theme prop of margin 2px`)
})
