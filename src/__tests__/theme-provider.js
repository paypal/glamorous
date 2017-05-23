/* eslint func-style:0 */
import React, {Component} from 'react'
import {render, mount} from 'enzyme'
import * as jestGlamorReact from 'jest-glamor-react'
import glamorous from '../'
import ThemeProvider from '../theme-provider'
import {CHANNEL} from '../constants'
import {PropTypes} from '../react-compat'

expect.extend(jestGlamorReact.matcher)
expect.addSnapshotSerializer(jestGlamorReact.serializer)

const getMockedContext = unsubscribe => ({
  [CHANNEL]: {
    getState: () => {},
    setState: () => {},
    subscribe: () => unsubscribe,
  },
})

test('renders a component with theme', () => {
  const Comp = glamorous.div(
    {
      color: 'red',
    },
    (props, {theme}) => ({padding: theme.padding}),
  )
  expect(
    render(
      <ThemeProvider theme={{padding: '10px'}}>
        <Comp />
      </ThemeProvider>,
    ),
  ).toMatchSnapshotWithGlamor()
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
    (props, {theme}) => ({padding: theme.padding}),
  )
  const wrapper = mount(<Parent />)
  expect(wrapper).toMatchSnapshotWithGlamor(`with theme prop of padding 10px`)
  wrapper.setState({padding: 20})
  expect(wrapper).toMatchSnapshotWithGlamor(`with theme prop of padding 20px`)
})

test('merges nested themes', () => {
  const One = glamorous.div({}, (props, {theme: {padding, margin}}) => ({
    padding,
    margin,
  }))
  const Two = glamorous.div({}, (props, {theme: {padding, margin}}) => ({
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
  ).toMatchSnapshotWithGlamor()
})

test('renders if children are null', () => {
  expect(
    mount(
      <ThemeProvider theme={{padding: 1}}>
        {false && <div />}
      </ThemeProvider>,
    ),
  ).toMatchSnapshotWithGlamor()
})

test('cleans up outer theme subscription when unmounts', () => {
  const unsubscribe = jest.fn()
  const context = getMockedContext(unsubscribe)
  const wrapper = mount(<ThemeProvider theme={{}} />, {context})
  wrapper.unmount()
  expect(unsubscribe).toHaveBeenCalled()
})

test('does nothing when receive same theme via props', () => {
  const theme = {margin: 2}
  const wrapper = mount(<ThemeProvider theme={theme} />)
  expect(wrapper).toMatchSnapshotWithGlamor(`with theme prop of margin 2px`)
  wrapper.setProps({theme})
  expect(wrapper).toMatchSnapshotWithGlamor(`with theme prop of margin 2px`)
})

test('does not override user defined theme contexts', () => {
  const Child = glamorous.div((props, context) => ({
    fontSize: context.theme.fontSize,
  }))
  Child.contextTypes = {
    theme: PropTypes.object,
  }

  class Parent extends React.Component {
    getChildContext() {
      return {
        theme: {fontSize: 24},
      }
    }
    render() {
      return <Child />
    }
  }

  Parent.childContextTypes = {
    theme: PropTypes.object,
  }

  expect(
    render(
      <ThemeProvider theme={{fontSize: 36}}>
        <Parent />
      </ThemeProvider>,
    ),
  ).toMatchSnapshotWithGlamor()
})

test('monkey-patches `theme` into user defined context', () => {
  const Child = glamorous.div((props, context) => ({
    fontSize: context.theme.fontSize,
    color: context.userTheme.color,
  }))

  Child.contextTypes = {
    userTheme: PropTypes.object,
  }

  class Parent extends React.Component {
    getChildContext() {
      return {
        userTheme: {color: 'blue'},
      }
    }
    render() {
      return <Child />
    }
  }

  Parent.childContextTypes = {
    userTheme: PropTypes.object,
  }

  expect(
    render(
      <ThemeProvider theme={{fontSize: 36}}>
        <Parent />
      </ThemeProvider>,
    ),
  ).toMatchSnapshotWithGlamor()
})
