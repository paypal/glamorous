/* eslint func-style:0, react/prop-types:0 */
import React from 'react'
import {render} from 'enzyme'
import * as jestGlamorReact from 'jest-glamor-react'
import glamorous from '../'

expect.extend(jestGlamorReact.matcher)
expect.addSnapshotSerializer(jestGlamorReact.serializer)

test('withComponent composes the component with provided styles', () => {
  const Text = glamorous.span({color: 'red', fontSize: 20})
  const View = Text.withComponent('div')
  expect(render(<View />)).toMatchSnapshotWithGlamor()
})

test('withComponent creates a new component with the provided tag', () => {
  const Text = glamorous.span({color: 'red', fontSize: 20})
  const View = Text.withComponent('div')
  expect(Text.comp).toBe('span')
  expect(View.comp).toBe('div')
})
