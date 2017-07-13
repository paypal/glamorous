const appendToFile = require('fs').appendFileSync
const resolve = require('path').resolve
const htmlTagNames = require('html-tag-names')
const svgTagNames = require('svg-tag-names')

function capitalize(s) {
  return s.slice(0, 1).toUpperCase() + s.slice(1)
}

function dashToCamelCase(s) {
  return s.replace(/-([a-z])/g, ([, char]) => char.toUpperCase())
}

const globalNames = Object.getOwnPropertyNames(global)

function unCollide(name) {
  const suffix = 'Tag'
  return globalNames.includes(name) ? `${name}${suffix}` : name
}

const componentExports = htmlTagNames
  .concat(svgTagNames)
  .filter((tag, index, array) => array.indexOf(tag) === index)
  .map(tag => {
    const capitalName = capitalize(tag)
    const validJsName = dashToCamelCase(capitalName)
    // add postfix if name collides with js constructors
    const tagName = unCollide(validJsName)
    return `export var ${tagName} = glamorous['${capitalName}'];`
  }).join`\n`

const introText =
  '\n// these exports below are generated' +
  "\n// and will be tree-shaken if you're using Webpack 2 or Rollup\n"

const glamorousEsFile = resolve(__dirname, '..', 'dist', 'glamorous.es.js')

appendToFile(glamorousEsFile, introText + componentExports)
