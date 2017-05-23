/* eslint func-style:0 */
import React, {Component} from 'react'
import {render, mount} from 'enzyme'

import withTheme from '../with-theme'
import ThemeProvider from '../theme-provider'
import {CHANNEL} from '../constants'
import {PropTypes} from '../react-compat'

const getMockedContext = unsubscribe => ({
  [CHANNEL]: {
    getState: () => {},
    setState: () => {},
    subscribe: () => unsubscribe,
  },
})

test('renders a non-glamorous component with theme', () => {
  const CompWithTheme = withTheme(({theme: {padding}}) => (
    <div style={{padding}} />
  ))
  expect(
    render(
      <ThemeProvider theme={{padding: '10px'}}>
        <CompWithTheme />
      </ThemeProvider>,
    ),
  ).toMatchSnapshot()
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

  const Child = withTheme(({theme: {padding}}) => <div style={{padding}} />)
  const wrapper = mount(<Parent />)
  expect(wrapper).toMatchSnapshot(`with theme prop of padding 10px`)
  wrapper.setState({padding: 20})
  expect(wrapper).toMatchSnapshot(`with theme prop of padding 20px`)
})

test('works properly with classes', () => {
  /* eslint-disable react/prefer-stateless-function */
  class Child extends Component {
    render() {
      const {theme: {padding}} = this.props
      return <div style={{padding}} />
    }
  }

  Child.propTypes = {
    theme: PropTypes.object,
  }

  const ChildWithTheme = withTheme(Child)

  class Parent extends Component {
    state = {
      padding: 10,
    }

    render() {
      return (
        <ThemeProvider theme={{padding: this.state.padding}}>
          <ChildWithTheme />
        </ThemeProvider>
      )
    }
  }

  const wrapper = mount(<Parent />)
  expect(wrapper).toMatchSnapshot(`with theme prop of padding 10px`)
})

test('pass through when no theme provider found up tree', () => {
  /* eslint-disable no-console */
  const originalWarn = console.warn
  console.warn = jest.fn()

  const Child = withTheme(() => <div />)
  const Parent = () => <Child />
  const wrapper = mount(<Parent />)

  expect(wrapper).toMatchSnapshot(`without theme provider`)
  expect(console.warn).toHaveBeenCalledTimes(1)
  expect(console.warn).toHaveBeenCalledWith(
    // eslint-disable-next-line max-len
    `glamorous warning: Expected component called "Stateless Function" which uses withTheme to be within a ThemeProvider but none was found.`,
  )
  console.warn = originalWarn
})

test('does not warn when NODE_ENV is set to `production`', () => {
  /* eslint-disable no-console */
  const originalWarn = console.warn
  console.warn = jest.fn()

  const originalEnv = process.env.NODE_ENV
  process.env.NODE_ENV = 'production'

  const Child = withTheme(() => <div />)
  const Parent = () => <Child />
  mount(<Parent />)

  expect(console.warn).not.toHaveBeenCalled()

  console.warn = originalWarn
  process.env.NODE_ENV = originalEnv
})

test('unsubscribes from theme updates on unmount', () => {
  const Child = withTheme(() => <div />)
  const unsubscribe = jest.fn()
  const context = getMockedContext(unsubscribe)
  const wrapper = mount(<ThemeProvider theme={{}}><Child /></ThemeProvider>, {
    context,
  })
  wrapper.unmount()
  expect(unsubscribe).toHaveBeenCalled()
})
