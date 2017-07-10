/* eslint func-style:0, react/prop-types:0 */
import React from 'react'
import {render} from 'enzyme'

import glamorousTiny from '../tiny'

test('should pass glam object prop', () => {
  const dynamicStyles = jest.fn(({glam: {big}}) => ({
    fontSize: big ? 20 : 10,
  }))
  const Comp = glamorousTiny('div')(
    {
      marginLeft: '24px',
    },
    dynamicStyles,
  )

  const glam = {big: true}
  const theme = {color: 'blue'}
  expect(
    render(<Comp id="hey-there" glam={glam} theme={theme} />),
  ).toMatchSnapshot()
  expect(dynamicStyles).toHaveBeenCalledTimes(1)
  const props = {
    glam,
    id: 'hey-there',
    theme,
  }
  const context = expect.any(Object) // the context
  expect(dynamicStyles).toHaveBeenCalledWith(props, context)
})
