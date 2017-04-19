/* eslint func-style:0, react/prop-types:0 */
import React from 'react'
import {render} from 'enzyme'
import * as jestGlamorReact from 'jest-glamor-react'

import glamorousTiny from '../tiny'

expect.extend(jestGlamorReact.matcher)
expect.addSnapshotSerializer(jestGlamorReact.serializer)

test('should pass glam object prop', () => {
  const Comp = glamorousTiny('div')(
    {
      marginLeft: '24px',
    },
    ({big}) => ({
      fontSize: big ? 20 : 10,
    }),
  )

  expect(render(<Comp glam={{big: true}} />)).toMatchSnapshotWithGlamor()
})
