/* eslint func-style:0, react/prop-types:0 */
import React from 'react'
import {render, mount} from 'enzyme'

import glamorousTiny from '../tiny'

jest.mock('../constants')

test('should pass glam object prop', () => {
  const dynamicStyles = jest.fn(({glam: {big}}) => ({
    fontSize: big ? 20 : 10,
  }))
  const Comp = glamorousTiny('div')(
    {
      marginLeft: '24px',
    },
    dynamicStyles,
  )

  const glam = {big: true}
  const theme = {color: 'blue'}
  expect(
    render(<Comp id="hey-there" glam={glam} theme={theme} />),
  ).toMatchSnapshot()
  expect(dynamicStyles).toHaveBeenCalledTimes(1)
  const props = {
    glam,
    id: 'hey-there',
    theme,
  }
  const context = expect.any(Object) // the context
  expect(dynamicStyles).toHaveBeenCalledWith(props, context)
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

  const Comp = glamorousTiny(InnerComp, {forwardProps: ['innerRef']})({
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

  const Comp = glamorousTiny(InnerComp)({
    marginLeft: '24px',
  })

  mount(<Comp innerRef={getRef} />)

  expect(node).toBeInstanceOf(InnerComp)
})
