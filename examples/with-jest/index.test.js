import {matcher, serializer} from 'jest-glamor-react'
import React from 'react'
import {shallow, render, mount} from 'enzyme'
import {Wrapper, Title} from './index'

test('enzyme', () => {
  const ui = (
    <Wrapper>
      <Title>Hello World, this is my first glamor styled component!</Title>
    </Wrapper>
  )

  expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
  expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
  expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
})
