/*
 * This file is here to test things that glamor does when
 * NODE_ENV === 'development'
 *
 * Because glamor stores the value in the module level of
 * it's implementation files, we have to do some funny things
 * to make sure that glamor gets the value we want.
 */
import React from 'react'
import {render} from 'enzyme'

const nodeEnv = process.env.NODE_ENV

beforeEach(() => {
  process.env.NODE_ENV = 'development'
  jest.resetModules()
})

afterEach(() => {
  process.env.NODE_ENV = nodeEnv
})

test('can be configured to use the displayName in the className', () => {
  // eslint-disable-next-line
  const glamorous = require('../').default
  const MyComp = glamorous(props => <div {...props} />, {
    displayName: 'Hi There',
  })({color: 'red'})
  const wrapper = render(<MyComp />)
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.html()).toMatch(/hi-there/)
})
