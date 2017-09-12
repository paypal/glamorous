import reactHTMLAttributes from 'react-html-attributes'
import shouldForwardProperty from '../should-forward-property'
import reactProps from '../react-props'

jest.mock('../constants')
// Used for css overrides API
const validCssProps = ['color', 'height', 'width']

function pickRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)]
}

test('should forward a property with function as the tag', () => {
  expect(shouldForwardProperty(() => true, 'style')).toBeTruthy()
})

test('should forward a random react-supported html attribute', () => {
  const randomTag = pickRandomFromArray(Object.keys(reactHTMLAttributes))
  const randomAttribute = pickRandomFromArray(
    reactHTMLAttributes['*'].concat(reactHTMLAttributes[randomTag]),
  )

  expect(shouldForwardProperty(randomTag, randomAttribute)).toBeTruthy()
})

// this is one example of html attributes not supported by React
// 'class' is not supported because it's a js reserved word
test("should not forward a 'class' attribute on a 'div' tag", () => {
  expect(shouldForwardProperty('div', 'class')).toBeFalsy()
})

// test an invalid html attribute
test("should not forward a 'xyz' attribute on a 'img' tag", () => {
  expect(shouldForwardProperty('img', 'xyz')).toBeFalsy()
})

test('should forward a data-* attribute', () => {
  expect(shouldForwardProperty('div', 'data-age')).toBeTruthy()
})

test('should forward a aria-* attribute', () => {
  expect(shouldForwardProperty('div', 'aria-material')).toBeTruthy()
})

test('should forward a random react-specific attribute', () => {
  expect(
    shouldForwardProperty('div', pickRandomFromArray(reactProps)),
  ).toBeTruthy()
})

test("should not forward a valid css property with a 'div' tag", () => {
  validCssProps.forEach(cssProp =>
    expect(shouldForwardProperty('div', cssProp)).toBeFalsy(),
  )
})

test("should forward a valid css property with a 'svg' tag", () => {
  validCssProps.forEach(cssProp =>
    expect(shouldForwardProperty('svg', cssProp)).toBeTruthy(),
  )
})

test("should forward the 'fill' property with a 'rect' tag", () => {
  expect(shouldForwardProperty('rect', 'fill')).toBeTruthy()
})

test("should forward the 'cx' property with a 'circle' tag", () => {
  expect(shouldForwardProperty('circle', 'cx')).toBeTruthy()
})
