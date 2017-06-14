import nestedClassNamePlugin from '../glamor-plugin-nested-class-name'

test('adds & to the selector className', () => {
  const input = {
    selector: '.css-3v2xme.g-1-1,[data-css-3v2xme].g-1-1',
    style: {color: 'blue'},
  }
  const result = nestedClassNamePlugin(input)
  expect(result).toEqual({
    ...input,
    selector: '.css-3v2xme .g-1-1,[data-css-3v2xme] .g-1-1',
  })
})

test('does not touch things it should not', () => {
  const input1 = {
    selector: '.g-1-1 .css-1ha6yxt,.g-1-1 [data-css-1ha6yxt]',
    style: {color: 'green'},
  }
  const result1 = nestedClassNamePlugin(input1)
  expect(result1).toEqual(input1)

  const input2 = {
    selector: '.css-1ha6yxt.some-other-class,[data-css-1ha6yxt].some-other-class',
    style: {color: 'red'},
  }
  const result2 = nestedClassNamePlugin(input2)
  expect(result2).toEqual(input2)
})
