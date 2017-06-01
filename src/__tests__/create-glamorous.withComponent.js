/* eslint func-style:0, react/prop-types:0 */
import glamorous from '../'

test('withComponent create a new component with the provided tag', () => {
  const Text = glamorous.span({color: 'red', fontSize: 20})
  const View = Text.withComponent('div')
  expect(Text.comp).toBe('span')
  expect(View.comp).toBe('div')
})
