/* eslint func-style:0, react/prop-types:0 */
import React from 'react'
import {css as cssMock} from 'glamor'
import {mount} from 'enzyme'
import glamorous from '../'

jest.mock('glamor', () => {
  const realGlamor = require.requireActual('glamor')
  return Object.assign(realGlamor, {
    css: jest.fn(() => 'css-mock-12345'),
  })
})

beforeEach(() => {
  cssMock.mockClear()
})

test('calls shouldClassNameUpdate and updates accordingly', () => {
  const shouldClassNameUpdate = jest.fn(() => false)
  const pureDivFactory = glamorous('div', {
    shouldClassNameUpdate,
  })
  const Div = pureDivFactory({marginLeft: 1})
  const wrapper = mount(<Div id="hello" css={{marginLeft: 2}} />)
  expect(shouldClassNameUpdate).toHaveBeenCalledTimes(0)
  expect(cssMock).toHaveBeenCalledTimes(1)

  wrapper.setProps({id: 'goodbye'})
  expect(shouldClassNameUpdate).toHaveBeenCalledTimes(1)
  // It was not called again!
  expect(cssMock).toHaveBeenCalledTimes(1)

  shouldClassNameUpdate.mockReturnValueOnce(true)
  wrapper.setProps({id: 'hi there', css: {marginLeft: 3}})
  expect(shouldClassNameUpdate).toHaveBeenCalledTimes(2)
  // It was called again!
  expect(cssMock).toHaveBeenCalledTimes(2)

  // let's make sure that we're calling the function
  // with the right args.
  const props = expect.objectContaining({
    css: {marginLeft: 3},
    id: 'hi there',
  })
  const prevProps = expect.objectContaining({
    id: 'goodbye',
    css: {marginLeft: 2},
  })
  // ok ok, I'm not really testing `context` very thoroughly,
  // but can you blame me? It's so totally boring...
  // and I'm pretty sure it's working fine
  const context = expect.objectContaining({__glamorous__: undefined})
  const prevContext = expect.objectContaining({__glamorous__: undefined})
  expect(shouldClassNameUpdate).toHaveBeenCalledWith(
    props,
    prevProps,
    context,
    prevContext,
  )
})
