import spawn from 'cross-spawn'
import rimraf from 'rimraf'

test('Typescript', () => {
  const typescriptCompilation = spawn.sync('./node_modules/.bin/tsc', [
    '-p',
    './tsconfig.json',
  ])

  const output = typescriptCompilation.stdout.toString()

  rimraf.sync('./test-ts')

  expect(output).toMatchSnapshot('Typescript expected failures')
})
