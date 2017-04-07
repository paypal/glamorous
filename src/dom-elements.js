import htmlTagNames from 'html-tag-names'
import svgTagNames from 'svg-tag-names'

const domElements = htmlTagNames
  .concat(svgTagNames)
  .filter((tag, index, array) => array.indexOf(tag) === index)

export default domElements
