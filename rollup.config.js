const rollupConfig = require('kcd-scripts/config').getRollupConfig()

const tiny = process.env.TINY
const esm = process.env.BUILD_FORMAT === 'esm'

Object.assign(rollupConfig, {
  exports: tiny || !esm ? 'default' : 'named',
  name: 'glamorous',
  external: ['preact', 'react', 'glamor', 'prop-types'],
  globals: {
    react: 'React',
    preact: 'preact',
    glamor: 'Glamor',
    'prop-types': 'PropTypes',
  },
})

if (process.env.BUILD_TINY) {
  rollupConfig.output.forEach(o => {
    o.file = o.file.replace(/\.js$/, '.tiny.js')
  })
  rollupConfig.input = 'src/tiny.js'
}

module.exports = rollupConfig
