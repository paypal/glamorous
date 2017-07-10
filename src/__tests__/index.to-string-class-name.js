/* eslint func-style:0, react/prop-types:0 */
import React from 'react'
import {render} from 'enzyme'
import * as jestGlamorReact from 'jest-glamor-react'
import glamorous from '../'

expect.extend(jestGlamorReact.matcher)
expect.addSnapshotSerializer(jestGlamorReact.serializer)

beforeEach(() => {
  glamorous.config.idCounter = 1
})

test('allows you to use a component as a child selector', () => {
  const RedDiv = glamorous.div({color: 'red'})
  const ContainerDiv = glamorous.div({
    [RedDiv]: {
      color: 'blue',
    },
  })

  expect(
    render(<ContainerDiv><RedDiv>Hello</RedDiv></ContainerDiv>),
  ).toMatchSnapshotWithGlamor()
})

test('allows you to use a component as any kind of selector', () => {
  const ContainerDiv = glamorous.div({
    color: 'blue',
  })
  const RedDiv = glamorous.div(
    {
      [`${ContainerDiv} &`]: {
        color: 'red',
      },
    },
    {
      [`${ContainerDiv} &`]: {
        color: 'green',
      },
    },
  )

  expect(
    render(<ContainerDiv><RedDiv>Hello</RedDiv></ContainerDiv>),
  ).toMatchSnapshotWithGlamor()
})
