import rollupBabel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'

const minify = process.env.MINIFY
const format = process.env.FORMAT
const esm = format === 'es'
const umd = format === 'umd'
const cjs = format === 'cjs'

let targets

if (esm) {
  targets = [{dest: 'dist/glamorous.es.js', format: 'es'}]
} else if (umd) {
  if (minify) {
    targets = [{dest: 'dist/glamorous.umd.min.js', format: 'umd'}]
  } else {
    targets = [{dest: 'dist/glamorous.umd.js', format: 'umd'}]
  }
} else if (cjs) {
  targets = [{dest: 'dist/glamorous.cjs.js', format: 'cjs'}]
} else if (format) {
  throw new Error(`invalid format specified: "${format}".`)
} else {
  throw new Error('no format specified. --environment FORMAT:xxx')
}

export default {
  entry: esm ? 'src/index.js' : 'src/umd-entry.js',
  targets,
  exports: esm ? 'named' : 'default',
  moduleName: 'glamorous',
  format,
  external: ['react', 'glamor', 'prop-types'],
  globals: {
    react: 'React',
    glamor: 'Glamor',
    'prop-types': 'PropTypes',
  },
  plugins: [
    umd ?
      replace({
        'process.env.NODE_ENV': JSON.stringify(
            minify ? 'production' : 'development'
          ),
      }) :
      null,
    nodeResolve({jsnext: true, main: true}),
    commonjs({include: 'node_modules/**'}),
    json(),
    rollupBabel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [['env', {modules: false}], 'stage-2', 'react'],
      plugins: ['external-helpers'],
    }),
    minify ? uglify() : null,
  ].filter(Boolean),
}

// this is not transpiled
/*
  eslint
  max-len: 0,
  comma-dangle: [
    2,
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      functions: 'never'
    }
  ]
 */
