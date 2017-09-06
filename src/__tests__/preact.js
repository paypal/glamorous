beforeEach(() => {
  process.env.PREACT = true
  jest.resetModules()
  jest.mock('react', () => require('preact'))
})

afterEach(() => {
  delete process.env.PREACT
  jest.unmock('react')
})

test('should add preact-specific properties for preact build', () => {
  const reactProps = require('../react-props').default
  expect(reactProps).toContain('autofocus')
})

test('should add PropTypes if not present', () => {
  const {PropTypes} = require('../react-compat')
  expect(PropTypes).toEqual(expect.any(Function))
})

test('added fake PropTypes should not throw', () => {
  const {PropTypes} = require('../react-compat')
  expect(
    () => PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  ).not.toThrow()
})

test('should not overwrite existing PropTypes', () => {
  const mockPropTypes = {}
  jest.mock('react', () => {
    return {PropTypes: mockPropTypes}
  })
  const {PropTypes} = require('../react-compat')
  expect(PropTypes).toBe(mockPropTypes)
})

test('should add Children to preact if not present', () => {
  // eslint-disable-next-line no-unused-vars
  const {PropTypes} = require('../react-compat')
  const React = require('react')
  expect(React.Children).toEqual(
    expect.objectContaining({
      count: expect.any(Function),
      only: expect.any(Function),
    }),
  )
})
