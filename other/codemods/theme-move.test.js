/* eslint max-len:0 */
import path from 'path'
import prettierEslint from 'prettier-eslint'
import stripIndent from 'strip-indent'
import pluginTester from 'babel-plugin-tester'
import plugin from './theme-move'

const projectRoot = path.join(__dirname, '../../')

// adding this somehow improves the snapshots :shrug:
expect.addSnapshotSerializer({
  print(val) {
    return val.split(projectRoot).join('<PROJECT_ROOT>/')
  },
  test(val) {
    return typeof val === 'string'
  },
})

// special cases
pluginTester({
  plugin,
  formatResult,
  tests: {
    'no glamorous import': `
      import glamorous from 'not-glamorous'
      glamorous.div((props, theme) => theme.main)
    `,
    'no theme prop': `
      import glamorous from 'glamorous'
      glamorous.div(({theme}) => ({fontSize: theme.main.fontSize}))
    `,
    'with require': {
      code: `
        const glamorous = require('glamorous')
        glamorous.div((props, theme) => ({fontSize: theme.main.fontSize}))
      `,
      snapshot: true,
    },
  },
})

// changes
pluginTester({
  plugin,
  snapshot: true,
  formatResult,
  tests: withGlamorousImport([
    `glamorous.div((props, theme) => ({ fontSize: theme.main.fontSize }))`,
    `glamorous.div((props, theme, context) => ({ fontSize: theme.main.fontSize }))`,
    `
      glamorous.div((props, theme) => {
        return {
          fontSize: theme.main.fontSize,
          color: props.important ? 'red' : 'black',
        }
      })
    `,
    `
      glamorous.div(({important}, theme) => {
        return {
          fontSize: theme.main.fontSize,
          color: important ? 'red' : 'black',
        }
      })
    `,
    `
      glamorous.div((props, {main}) => {
        return {
          fontSize: main.fontSize,
          color: props.important ? 'red' : 'black',
        }
      })
    `,
    `
      glamorous.div(({important}, {main}) => {
        return {
          fontSize: main.fontSize,
          color: important ? 'red' : 'black',
        }
      })
    `,
    `
      glamorous('div')((props, theme) => ({
        fontSize: theme.main.fontSize,
      }))
    `,
  ]),
})

function withGlamorousImport(tests) {
  return tests.map(t => {
    const test = {babelOptions: {}}
    if (typeof t === 'string') {
      test.code = t
    } else {
      Object.assign(test, t)
    }
    test.babelOptions.parserOpts = test.babelOptions.parserOpts || {}
    test.code = `import glamorous from 'glamorous'\n${stripIndent(test.code)}`
    Object.assign(test.babelOptions.parserOpts, {
      // add the jsx plugin to all tests because why not?
      plugins: ['jsx'],
    })
    return test
  })
}

function formatResult(result) {
  return prettierEslint({
    filePath: __filename,
    text: result,
  }).trim()
}

/*
TODO:

const dynamicFn = (props, theme) => ({width: theme.width})
glamorous.div(dynamicFn)

// this and more
<Div css={{dynamicFn}} />
 */
