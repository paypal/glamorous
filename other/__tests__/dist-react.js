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
import './helpers/prop-types' // eslint-disable-line

import * as esImportStar from '../../dist/glamorous.esm'
import * as esImportStarTiny from '../../dist/glamorous.esm.tiny'
import esImport from '../../dist/glamorous.esm'
import esImportTiny from '../../dist/glamorous.esm.tiny'

import cjsImport from '../../' // picks up the main from package.json
import cjsImportTiny from '../../dist/glamorous.cjs.tiny'

import umdImport from '../../dist/glamorous.umd'
import umdImportTiny from '../../dist/glamorous.umd.tiny'

// intentionally left out because you shouldn't ever
// try to require the ES file in CommonJS
// const esRequire = require('../../dist/glamorous.es')
const cjsRequire = require('../../') // picks up the main from package.json
const umdRequire = require('../../dist/glamorous.umd')
const cjsRequireTiny = require('../../dist/glamorous.cjs.tiny')
const umdRequireTiny = require('../../dist/glamorous.umd.tiny')

// eslint-disable-next-line complexity
test('all imports work', () => {
  assert(
    isGlamorousFunction(esImport) && hasExtraExports(esImportStar),
    'ES build has a problem with ES Modules',
  )
  assert(
    isGlamorousFunction(esImportTiny) && !hasExtraExports(esImportStarTiny),
    'ES Tiny build has a problem with ES Modules',
  )

  // assert(
  //   isGlamorousFunction(esRequire) && hasExtraExports(esRequire),
  //   'ES build has a problem with CJS',
  // )
  // assert(
  //   isGlamorousFunction(esRequireTiny) && !hasExtraExports(esRequireTiny),
  //   'ES Tiny build has a problem with CJS',
  // )
  // intentionally left out ☝️

  assert(
    isGlamorousFunction(cjsImport) && hasExtraExports(cjsImport),
    'CJS build has a problem with ES Modules',
  )

  assert(
    isGlamorousFunction(cjsImportTiny) && !hasExtraExports(cjsImportTiny),
    'CJS Tiny build has a problem with ES Modules',
  )

  assert(
    isGlamorousFunction(cjsRequire) && hasExtraExports(cjsRequire),
    'CJS build has a problem with CJS',
  )
  assert(
    isGlamorousFunction(cjsRequireTiny) && !hasExtraExports(cjsRequireTiny),
    'CJS Tiny build has a problem with CJS',
  )

  assert(
    isGlamorousFunction(umdImport) && hasExtraExports(umdImport),
    'UMD build has a problem with ES Modules',
  )

  assert(
    isGlamorousFunction(umdImportTiny) && !hasExtraExports(umdImportTiny),
    'UMD Tiny build has a problem with ES Modules',
  )

  assert(
    isGlamorousFunction(umdRequire) && hasExtraExports(umdRequire),
    'UMD build has a problem with CJS',
  )
  assert(
    isGlamorousFunction(umdRequireTiny) && !hasExtraExports(umdRequireTiny),
    'UMD Tiny build has a problem with CJS',
  )

  assert(
    hasNamedExports(esImportStar) && !hasNamedExports(esImportTiny),
    'ES build has a problem with helper tags exports',
  )

  // TODO: how could we validate the global export?
})

function isGlamorousFunction(thing) {
  if (typeof thing !== 'function') {
    console.error(
      `glamorous thing should be a function. It's a ${typeof thing} with the properties of: ${Object.keys(
        thing,
      ).join(', ')}`,
    )
    return false
  }
  return true
}

function hasExtraExports(thing) {
  const extraExports = {
    ThemeProvider: 'function',
    withTheme: 'function',
  }
  const keys = Object.keys(extraExports)
  return keys.every(key => typeof thing[key] === extraExports[key])
}

function hasNamedExports(thing) {
  const GlamorousComponents = {
    Div: 'function',
    ObjectTag: 'function',
  }
  const keys = Object.keys(GlamorousComponents)
  return keys.every(
    key =>
      typeof thing[key] === GlamorousComponents[key] &&
      thing[key].isGlamorousComponent,
  )
}

/*
 eslint
  no-console: 0,
  import/extensions: 0,
  import/no-unresolved: 0,
  import/no-duplicates: 0,
  no-duplicate-imports: 0,
 */
