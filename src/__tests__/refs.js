/* eslint func-style:0, react/prop-types:0 */
import React from 'react'
import {mount} from 'enzyme'
import glamorous from '../'

const nodeEnv = process.env.NODE_ENV

jest.mock('../constants')

afterEach(() => {
  process.env.NODE_ENV = nodeEnv
})

test('should receive inner ref if specified', () => {
  const getRef = jest.fn()
  const Comp = glamorous.div({
    marginLeft: '24px',
  })

  mount(<Comp innerRef={getRef} />)

  expect(getRef).toHaveBeenCalled()
})

test('should pass inner ref to underlying component if forwarded', () => {
  let node = null
  const getRef = n => (node = n)

  class InnerComp extends React.Component {
    render() {
      return (
        <div>
          <span ref={this.props.innerRef} />
        </div>
      )
    }
  }

  const Comp = glamorous(InnerComp, {forwardProps: ['innerRef']})({
    marginLeft: '24px',
  })

  mount(<Comp innerRef={getRef} />)

  expect(node).toBeInstanceOf(HTMLElement)
  expect(node.tagName).toBe('SPAN')
})

test('should not pass inner ref to underlying component if not forwarded', () => {
  let node = null
  const getRef = n => (node = n)

  class InnerComp extends React.Component {
    render() {
      return (
        <div>
          <span ref={this.props.innerRef} />
        </div>
      )
    }
  }

  const Comp = glamorous(InnerComp)({
    marginLeft: '24px',
  })

  mount(<Comp innerRef={getRef} />)

  expect(node).toBeInstanceOf(InnerComp)
})

test('should pass inner ref to underlying component if forwarded and rootEl is set', () => {
  let node = null
  const getRef = n => (node = n)

  class InnerComp extends React.Component {
    render() {
      return (
        <div>
          <span ref={this.props.innerRef} />
        </div>
      )
    }
  }

  const Comp = glamorous(InnerComp, {
    rootEl: 'div',
    forwardProps: ['innerRef'],
  })({
    marginLeft: '24px',
  })

  mount(<Comp innerRef={getRef} />)

  expect(node).toBeInstanceOf(HTMLElement)
  expect(node.tagName).toBe('SPAN')
})

test('should pass inner ref to underlying component if forwarded and filterProps are specified', () => {
  let node = null
  const getRef = n => (node = n)

  class InnerComp extends React.Component {
    render() {
      return (
        <div>
          <span ref={this.props.innerRef} />
        </div>
      )
    }
  }

  const Comp = glamorous(InnerComp, {
    filterProps: ['noname'],
    forwardProps: ['innerRef'],
  })({
    marginLeft: '24px',
  })

  mount(<Comp innerRef={getRef} />)

  expect(node).toBeInstanceOf(HTMLElement)
  expect(node.tagName).toBe('SPAN')
})
