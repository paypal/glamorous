/* eslint func-style:0, react/prop-types:0 */
import React from 'react'
import {mount as render} from 'enzyme'
import glamorous from '../'

test('filterProps are not passed to child component', () => {
  const filterProps = ['bold']
  const Child = props => <div {...props} />
  const Text = glamorous(Child, {filterProps})(
    {
      fontSize: 20,
    },
    ({bold}) => ({
      fontWeight: bold ? 'bold' : undefined,
    }),
  )
  const rendered = render(<Text bold id="1" />)
  const child = rendered.find(Child)

  expect(rendered.prop('bold')).toBe(true)
  expect(rendered.prop('id')).toBe('1')
  expect(child.prop('bold')).toBeUndefined()
  expect(child.prop('id')).toBe('1')
})

test('filterProps takes precedence over built in props', () => {
  const filterProps = ['id']
  const Text = glamorous('div', {filterProps})()

  const rendered = render(<Text bar="foo" id="1" lang="en" />)
  const child = rendered.find('div')

  expect(rendered.prop('bar')).toBe('foo')
  expect(rendered.prop('id')).toBe('1')
  expect(rendered.prop('lang')).toBe('en')
  expect(child.prop('bar')).toBeUndefined()
  expect(child.prop('id')).toBeUndefined()
  expect(child.prop('lang')).toBe('en')
})

test('filterProps takes precedence over forwardProps', () => {
  const filterProps = ['foo']
  const forwardProps = ['foo', 'bar']
  const Child = ({bar}) => <div id={bar} />
  const Text = glamorous(Child, {
    rootEl: 'div',
    filterProps,
    forwardProps,
  })()

  const rendered = render(<Text foo="bar" bar="foo" />)
  const child = rendered.find(Child)

  expect(rendered.prop('bar')).toBe('foo')
  expect(rendered.prop('foo')).toBe('bar')
  expect(child.prop('foo')).toBeUndefined()
  expect(child.prop('bar')).toBe('foo')
  expect(child.find('div').prop('id')).toBe('foo')
})

test('filterProps takes precedence over cssOverrides', () => {
  const filterProps = ['foo']
  const Text = glamorous('div', {
    filterProps,
    propsAreCssOverrides: true,
  })(({foo}) => (foo ? {padding: '1'} : undefined))

  const rendered = render(<Text margin={1} foo="bar" />)
  const child = rendered.find('div')

  expect(rendered.prop('margin')).toBe(1)
  expect(rendered.prop('foo')).toBe('bar')
  expect(child.prop('foo')).toBeUndefined()
  expect(child.prop('margin')).toBeUndefined()
})

test('filterProps are applied to new component', () => {
  const filterProps = ['shoulRender']
  const Child = props => <div {...props} />
  const Text = glamorous(Child, {filterProps})({
    color: 'red',
    fontSize: 20,
  })
  const View = Text.withComponent('div')

  expect(View.filterProps).toEqual(filterProps)
})

test('filterProps can be overridden for the new component', () => {
  const Child = props => <div {...props} />
  const Text = glamorous(Child, {filterProps: ['shouldRender']})({
    color: 'red',
    fontSize: 20,
  })
  const filterProps = ['other-thing']
  const View = Text.withComponent('div', {filterProps})

  expect(View.filterProps).toEqual(filterProps)
})

// vim: set ts=2 sw=2 tw=80:
