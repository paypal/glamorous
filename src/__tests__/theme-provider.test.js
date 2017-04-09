/* eslint func-style:0 */
import React, {Component} from 'react'
import {render, mount} from 'enzyme'
import * as jestGlamorReact from 'jest-glamor-react'
import toJson from 'enzyme-to-json'
// eslint-disable-next-line import/default
import glamorous from '../'
import ThemeProvider, {CHANNEL} from '../theme-provider'

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
    (props, theme) => ({padding: theme.padding}),
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
      padding: '10px',
    }
    setPadding = () => this.setState({padding: '20px'})
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
    (props, theme) => ({padding: theme.padding}),
  )
  const wrapper = mount(<Parent />)
  expect(toJson(wrapper)).toMatchSnapshotWithGlamor(`enzyme.mount`)
  wrapper.instance().setPadding()
  expect(toJson(wrapper)).toMatchSnapshotWithGlamor(`enzyme.mount`)
})

test('merges nested themes', () => {
  const One = glamorous.div({}, (props, themes) => ({padding: themes.padding}))
  const Two = glamorous.div({}, (props, themes) => {
    return {padding: themes.padding, margin: themes.margin}
  })
  expect(
    mount(
      <div>
        <ThemeProvider theme={{padding: '1px'}}>
          <div>
            <One />
            <ThemeProvider theme={{margin: '2px'}}>
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
      <ThemeProvider theme={{padding: '1px'}}>
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
  const theme = {margin: '2px'}
  const wrapper = mount(<ThemeProvider theme={theme} />)
  expect(toJson(wrapper)).toMatchSnapshotWithGlamor(`enzyme.mount`)
  wrapper.setProps({theme})
  expect(toJson(wrapper)).toMatchSnapshotWithGlamor(`enzyme.mount`)
})
