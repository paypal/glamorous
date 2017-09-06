import rollupBabel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'

const minify = process.env.MINIFY
const format = process.env.FORMAT
const tiny = process.env.TINY
const esm = format === 'es'
const umd = format === 'umd'
const cjs = format === 'cjs'
const isForPreact = Boolean(process.env.PREACT)

let targets

const tinyExt = tiny ? '.tiny' : ''
const subdir = isForPreact ? 'preact/' : ''

if (esm) {
  targets = [{dest: `${subdir}dist/glamorous.es${tinyExt}.js`, format: 'es'}]
} else if (umd) {
  if (minify) {
    targets = [
      {dest: `${subdir}dist/glamorous.umd${tinyExt}.min.js`, format: 'umd'},
    ]
  } else {
    targets = [
      {dest: `${subdir}dist/glamorous.umd${tinyExt}.js`, format: 'umd'},
    ]
  }
} else if (cjs) {
  targets = [
    {dest: `${subdir}dist/glamorous.cjs${tinyExt}.js`, format: 'cjs'},
  ]
} else if (format) {
  throw new Error(`invalid format specified: "${format}".`)
} else {
  throw new Error('no format specified. --environment FORMAT:xxx')
}

const umdEntry = tiny ? 'src/tiny.js' : 'src/umd-entry.js'
const esmEntry = tiny ? 'src/tiny.js' : 'src/index.js'
// eslint-disable-next-line no-nested-ternary
const exports = tiny || !esm ? 'default' : 'named'

export default {
  entry: esm ? esmEntry : umdEntry,
  targets,
  exports,
  moduleName: 'glamorous',
  format,
  external: ['preact', 'react', 'glamor', 'prop-types'],
  globals: {
    react: 'React',
    preact: 'preact',
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
    replace({
      'process.env.PREACT': JSON.stringify(isForPreact),
    }),
    nodeResolve({jsnext: true, main: true}),
    commonjs({include: 'node_modules/**'}),
    json(),
    rollupBabel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [['env', {modules: false}], 'stage-2', 'react'],
      plugins: [
        'external-helpers',
        'babel-macros',
        isForPreact ?
          [
            'module-resolver',
            {
              root: ['./src'],
              alias: {
                react: 'preact',
              },
            },
          ] :
          null,
      ].filter(Boolean),
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
