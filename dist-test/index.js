/*
 * This file is here to validate that the built version
 * of the library exposes the module in the way that we
 * want it to. Specifically that the ES6 module import can
 * get the glamorous function via default import. Also that
 * the CommonJS require returns the glamorous function
 * (rather than an object that has the glamorous as a
 * `default` property).
 *
 * This file is unable to validate the global export.
 */
import assert from 'assert'
import {oneLine} from 'common-tags'

import esImport from '../dist/glamorous.es'
import cjsImport from '../dist/glamorous.cjs'
import umdImport from '../dist/glamorous.umd'

// intentionally left out because you shouldn't ever
// try to require the ES file in CommonJS
// const esRequire = require('../dist/glamorous.es')
const cjsRequire = require('../dist/glamorous.cjs')
const umdRequire = require('../dist/glamorous.umd')

assert(isGlamorousFunction(esImport), 'ES build has a problem with ES Modules')

// intentionally left out ☝️
// assert(isGlamorousFunction(esRequire), 'ES build has a problem with CJS')

assert(
  isGlamorousFunction(cjsImport),
  'CJS build has a problem with ES Modules',
)

assert(isGlamorousFunction(cjsRequire), 'CJS build has a problem with CJS')

assert(
  isGlamorousFunction(umdImport),
  'UMD build has a problem with ES Modules',
)

assert(isGlamorousFunction(umdRequire), 'UMD build has a problem with CJS')

// TODO: how could we validate the global export?

console.log('Built modules look good 👍')

function isGlamorousFunction(thing) {
  if (typeof thing !== 'function') {
    console.error(
      oneLine`
        glamorous thing should be a function.
        It's a ${typeof thing} with the
        properties of: ${Object.keys(thing).join(', ')}
      `,
    )
    return false
  }
  if (thing.name !== 'glamorous') {
    console.error(
      oneLine`
        the function is not called "glamorous".
        It's called ${thing.name}
      `,
    )
    return false
  }
  return true
}

/*
 eslint
  no-console: 0,
  import/extensions: 0,
  import/no-unresolved: 0
 */
