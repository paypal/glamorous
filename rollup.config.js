const rollupConfig = require('kcd-scripts/config').getRollupConfig()

const tiny = process.env.TINY
const esm = process.env.BUILD_FORMAT === 'esm'

Object.assign(rollupConfig, {
  external: ['preact', 'react', 'glamor', 'prop-types'],
  output: [
    Object.assign(rollupConfig.output[0], {
      exports: tiny || !esm ? 'default' : 'named',
      name: 'glamorous',
      globals: {
        react: 'React',
        preact: 'preact',
        glamor: 'Glamor',
        'prop-types': 'PropTypes',
      },
    }),
  ],
})

if (process.env.BUILD_TINY) {
  rollupConfig.output.forEach(o => {
    o.file = o.file.replace(/\.js$/, '.tiny.js')
  })
  rollupConfig.input = 'src/tiny.js'
}

module.exports = rollupConfig
