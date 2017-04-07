/* eslint import/no-mutable-exports:0, import/prefer-default-export:0 */
import React from 'react'

let PropTypes

/* istanbul ignore next */
if (React.version.slice(0, 4) === '15.5') {
  /* istanbul ignore next */
  try {
    PropTypes = require('prop-types')
    /* istanbul ignore next */
  } catch (error) {
    // ignore
  }
}
/* istanbul ignore next */
PropTypes = PropTypes || React.PropTypes

export {PropTypes}
