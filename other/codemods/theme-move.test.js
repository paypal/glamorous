/* eslint max-len:0 */
import path from 'path'
import prettierEslint from 'prettier-eslint'
import stripIndent from 'strip-indent'
// not sure why, but travis seems to error out
// due to this import 🙃
// eslint-disable-next-line
import pluginTester from 'babel-plugin-tester';
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
  babelOptions: {
    filename: __filename,
    parserOpts: {
      plugins: ['jsx'],
    },
  },
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
    'no dynamic fn': {
      filename: path.join(__dirname, `/test-dynamic-fn.js`),
      code: `
        import {Div} from 'glamorous'
        const ui = <Div css={styles} />
      `,
    },
    'css prop set to a className': `
      import {Div} from 'glamorous'
      const ui = <Div css="class-name" />
    `,
  },
})

const dynamicFn = `(props, theme) => ({fontSize: theme.fontSize})`

// changes
pluginTester({
  plugin,
  snapshot: true,
  formatResult,
  babelOptions: {
    parserOpts: {
      plugins: ['jsx'],
    },
  },
  tests: withGlamorousImport([
    `glamorous.div(${dynamicFn})`,
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
    `glamorous('div')(${dynamicFn})`,
    `glamorous.div([${dynamicFn}])`,
    `
      const dynamicFn = ${dynamicFn}
      glamorous.div(dynamicFn)
    `,
    `
      function dynamicFn(props, theme) {
        return {fontSize: theme.fontSize}
      }
      glamorous.div([{}, dynamicFn])
    `,
    `const ui = <glamorous.Div css={${dynamicFn}} />`,
    `
      const dynamicFn = ${dynamicFn}
      const ui = <glamorous.Div css={[dynamicFn]} />
    `,
    `
      import {Span} from 'glamorous'
      const ui = <Span css={${dynamicFn}} />
    `,
    `
      glamorous.div((props, {primary: {headings: {font: {size: fontSize}}}}) => ({
        color: props.color,
        fontSize,
      }))
    `,
    `
      glamorous.div(({color}, {primary: {headings: {font: {size: fontSize}}}}) => ({
        color,
        fontSize,
      }))
    `,
  ]),
})

function withGlamorousImport(tests) {
  return tests.map((t, index) => {
    const test = {babelOptions: {}}
    if (typeof t === 'string') {
      test.code = t
    } else {
      Object.assign(test, t)
    }
    test.code = `import glamorous from 'glamorous'\n${stripIndent(test.code)}`
    test.babelOptions.filename = path.join(__dirname, `/test-${index}.js`)
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
Here's something we could cover, but probably wont due to the amount of effort invovled.
If anyone wants to try, be my guest 😀
This might help: https://github.com/kentcdodds/css-in-js-precompiler/blob/37f8285b027a08b0c333f8587f0ef75b8964001c/src/get-literalizers.js#L36-L66

import dynamicFn from './some-utils'
glamorous.div(dynamicFn)
 */
