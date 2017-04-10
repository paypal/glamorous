import rollupBabel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import uglify from 'rollup-plugin-uglify'

const minify = process.env.MINIFY
const format = process.env.FORMAT
const esm = format === 'es'

let targets

if (minify) {
  targets = [{dest: 'dist/glamorous.umd.min.js', format: 'umd'}]
} else if (esm) {
  targets = [{dest: 'dist/glamorous.es.js', format: 'es'}]
} else {
  targets = [
    {dest: 'dist/glamorous.umd.js', format: 'umd'},
    {dest: 'dist/glamorous.cjs.js', format: 'cjs'},
  ]
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
