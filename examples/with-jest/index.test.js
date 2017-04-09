import {matcher, serializer} from 'jest-glamor-react'
import React from 'react'
import * as enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import {Wrapper, Title} from './index'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

test('enzyme', () => {
  const ui = (
    <Wrapper>
      <Title>Hello World, this is my first glamor styled component!</Title>
    </Wrapper>
  )

  expect(toJson(enzyme.shallow(ui))).toMatchSnapshotWithGlamor(
    `enzyme.shallow`,
  )
  expect(toJson(enzyme.mount(ui))).toMatchSnapshotWithGlamor(`enzyme.mount`)
  expect(toJson(enzyme.render(ui))).toMatchSnapshotWithGlamor(`enzyme.render`)
})
