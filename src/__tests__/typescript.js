import spawn from 'cross-spawn'

test('Typescript', () => {
  const typescriptCompilation = spawn.sync('./node_modules/.bin/tsc', [
    '-p',
    './tsconfig.json',
  ])

  const output = typescriptCompilation.stdout.toString()

  expect(output).toMatchSnapshot('Typescript expected failures')
})
