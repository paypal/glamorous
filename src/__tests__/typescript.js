import spawn from 'cross-spawn'

test('Typescript React', () => {
  const typescriptCompilation = spawn.sync('./node_modules/.bin/tsc', [
    '-p',
    './tsconfig.react.json',
  ])

  const output = typescriptCompilation.stdout.toString()

  expect(output).toMatchSnapshot('Typescript expected failures')
})

test('Typescript Preact', () => {
  const typescriptCompilation = spawn.sync('./node_modules/.bin/tsc', [
    '-p',
    './tsconfig.preact.json',
  ])

  const output = typescriptCompilation.stdout.toString()

  expect(output).toMatchSnapshot('Typescript expected failures')
})
