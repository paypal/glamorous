import {spawnSync} from 'child_process'
import rimraf from 'rimraf'

test('Flow', () => {
  const flowCompilation = spawnSync('./node_modules/.bin/flow')

  const output = flowCompilation.stdout.toString()

  rimraf.sync('./test-ts')

  expect(output).toMatchSnapshot('Flow expected failures')
})
