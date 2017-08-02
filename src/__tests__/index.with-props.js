import React from 'react'
import {render} from 'enzyme'
import glamorous from '../'

const expectContext = expect.objectContaining({__glamorous__: undefined})

test('allows you to specify props as an object', () => {
  const withPropsObject = {propA: 'a', propB: 'b'}
  const dynamicStyles = jest.fn()
  const MyDiv = glamorous.div(dynamicStyles).withProps(withPropsObject)
  render(<MyDiv otherProp={true} />)
  expect(dynamicStyles).toHaveBeenCalledTimes(1)
  expect(dynamicStyles).toHaveBeenCalledWith(
    expect.objectContaining({
      ...withPropsObject,
      otherProp: true,
    }),
    expectContext,
  )
})

test('composes well with other glamorous components', () => {
  const MyDiv = glamorous
    .div({marginTop: 1}, () => ({fontSize: 1}))
    .withProps()
  const MyIdDiv = glamorous(MyDiv)(() => ({fontWeight: 300})).withProps()
  expect(render(<MyIdDiv />)).toMatchSnapshot()
})

test('allows you to specify props as a function', () => {
  const withPropsObject = {propA: 'a', propB: 'b'}
  const withPropsFunction = jest.fn(() => withPropsObject)
  const dynamicStyles = jest.fn()
  const MyDiv = glamorous.div(dynamicStyles).withProps(withPropsFunction)
  render(<MyDiv otherProp={true} />)
  expect(withPropsFunction).toHaveBeenCalledTimes(1)
  expect(withPropsFunction).toHaveBeenCalledWith(
    expect.objectContaining({
      otherProp: true,
    }),
    expectContext,
  )
  expect(dynamicStyles).toHaveBeenCalledTimes(1)
  expect(dynamicStyles).toHaveBeenCalledWith(
    expect.objectContaining({
      ...withPropsObject,
      otherProp: true,
    }),
    expectContext,
  )
})

test('allows you to provide any number of arguments for props', () => {
  // important bits of this test:
  // 1. props shallowly compose together
  // 2. composition order (later has greater precedence):
  //   1. withProps option when createing a glamorousComponentFactory
  //   2. arguments to withProps (in the same order as Object.assign)
  //   3. props applied to the element when rendered
  // 3. composition works as you might expect when wrapping a glamorousComponent
  const withPropsObject1 = {propA: 1, propB: 1}
  const withPropsObject2 = {propB: 2, propC: 2}
  const withPropsObject3 = {propC: 3, propD: 3}
  const withPropsObject4 = {propD: 4, propE: 4}
  const withPropsObject5 = {propE: 5, propF: 5}
  const withPropsObject6 = {propF: 6, propG: 6}
  const withPropsObject7 = {propG: 7, propH: 7}
  const propsRendered = {propZ: 99, propA: 99}

  const withPropsFunction2 = jest.fn(() => withPropsObject2)
  const withPropsFunction4 = jest.fn(() => withPropsObject4)
  const dynamicStyles = jest.fn()
  const MyDiv = glamorous('div', {withProps: withPropsObject1})({}).withProps(
    withPropsFunction2,
  )
  const MyComposedDiv = glamorous(MyDiv, {
    withProps: [withPropsObject3, withPropsFunction4],
  })(dynamicStyles).withProps(withPropsObject5, [
    withPropsObject6,
    withPropsObject7,
  ])
  render(<MyComposedDiv {...propsRendered} />)

  expect(withPropsFunction2).toHaveBeenCalledTimes(1)
  expect(withPropsFunction2).toHaveBeenCalledWith(
    expect.objectContaining({
      ...withPropsObject1,
      ...propsRendered,
    }),
    expectContext,
  )

  expect(withPropsFunction4).toHaveBeenCalledTimes(1)
  expect(withPropsFunction4).toHaveBeenCalledWith(
    expect.objectContaining({
      // this order is important and part of what we're testing here
      ...withPropsObject1,
      ...withPropsObject2,
      ...withPropsObject3,
      ...propsRendered,
    }),
    expectContext,
  )

  expect(dynamicStyles).toHaveBeenCalledTimes(1)
  expect(dynamicStyles).toHaveBeenCalledWith(
    expect.objectContaining({
      // this order is important and part of what we're testing here
      ...withPropsObject1,
      ...withPropsObject2,
      ...withPropsObject3,
      ...withPropsObject4,
      ...withPropsObject5,
      ...withPropsObject6,
      ...withPropsObject7,
      ...propsRendered,
    }),
    expectContext,
  )
})
