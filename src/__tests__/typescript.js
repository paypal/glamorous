import {spawnSync} from 'child_process'
import rimraf from 'rimraf'

test('Typescript', () => {
  const typescriptCompilation = spawnSync('./node_modules/.bin/tsc', [
    '-p',
    './tsconfig.json',
  ])

  const output = typescriptCompilation.stdout.toString()

  rimraf.sync('./test-ts')

  expect(output).toMatchSnapshot('Typescript expected failures')
})
