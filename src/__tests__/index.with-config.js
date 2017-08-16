import React from 'react'
import glamorous from '../'

test('withConfig returns a glamorous component with the new config', () => {
  const config = {
    displayName: 'MyDiv',
    propsAreCssOverrides: true,
  }
  const styles = {a: 'b'}
  const MyDiv = glamorous.strong.withConfig(config)(styles)
  expect(ownProps(MyDiv)).toMatchObject({
    ...config,
    comp: 'strong',
    rootEl: 'strong',
    forwardProps: [],
    isGlamorousComponent: true,
    propsToApply: [],
    styles: [styles],
  })
})

test('withConfig works for non-built-in components', () => {
  const config = {
    displayName: 'MyDiv',
    propsAreCssOverrides: true,
  }
  const MyComp = ({shouldRender, ...props}) =>
    (shouldRender ? <div {...props} /> : null)
  const styles = {a: 'b'}
  const forwardProps = ['shouldRender']
  const MyDiv = glamorous(MyComp, {rootEl: 'div', forwardProps}).withConfig(
    config,
  )(styles)
  expect(ownProps(MyDiv)).toMatchObject({
    ...config,
    comp: MyComp,
    rootEl: 'div',
    forwardProps,
    isGlamorousComponent: true,
    propsToApply: [],
    styles: [styles],
  })
})

function ownProps(thing) {
  return Reflect.ownKeys(thing).reduce((o, k) => {
    o[k] = thing[k]
    return o
  }, {})
}
