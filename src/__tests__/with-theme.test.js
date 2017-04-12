/* eslint func-style:0 */
import React from 'react'
import {render} from 'enzyme'
import * as jestGlamorReact from 'jest-glamor-react'
import glamorous from '../'
import ThemeProvider from '../theme-provider'
import withTheme from '../with-theme'

expect.extend(jestGlamorReact.matcher)
expect.addSnapshotSerializer(jestGlamorReact.serializer)

test('renders a component with theme in props', () => {
  const Comp = withTheme(({theme}) => {
    return <glamorous.Div padding={theme.padding} />
  })
  expect(
    render(
      <ThemeProvider theme={{padding: '10px'}}>
        <Comp />
      </ThemeProvider>,
    ),
  ).toMatchSnapshotWithGlamor()
})
