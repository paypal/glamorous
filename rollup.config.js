import rollupBabel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import uglify from 'rollup-plugin-uglify'

const minify = process.env.MINIFY

export default {
  entry: 'src/index.js',
  targets: minify ?
    [{dest: 'dist/glamorous.umd.min.js', format: 'umd'}] :
  [
        {dest: 'dist/glamorous.umd.js', format: 'umd'},
        {dest: 'dist/glamorous.es.js', format: 'es'},
        {dest: 'dist/glamorous.cjs.js', format: 'cjs'},
  ],
  exports: 'default',
  moduleName: 'glamorous',
  format: 'umd',
  external: ['react', 'glamor'],
  globals: {
    react: 'React',
    glamor: 'Glamor',
  },
  plugins: [
    nodeResolve({jsnext: true, main: true}),
    commonjs({include: 'node_modules/**'}),
    json(),
    rollupBabel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [['env', {modules: false}], 'stage-2', 'react'],
    }),
    minify ? uglify() : null,
  ].filter(Boolean),
}
