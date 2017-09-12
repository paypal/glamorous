import React from 'react'
import {isPreact} from './constants'

let PropTypes

/* istanbul ignore next */
if (isPreact) {
  if (!React.PropTypes) {
    PropTypes = () => PropTypes
    const allTypes = [
      'array',
      'bool',
      'func',
      'number',
      'object',
      'string',
      'symbol',
      'any',
      'arrayOf',
      'element',
      'instanceOf',
      'node',
      'objectOf',
      'oneOf',
      'oneOfType',
      'shape',
      'exact',
    ]
    allTypes.forEach(type => {
      PropTypes[type] = PropTypes
    })
  }
  // copied from preact-compat
  /* eslint-disable no-eq-null, eqeqeq, consistent-return */
  if (!React.Children) {
    const Children = {
      map(children, fn, ctx) {
        if (children == null) {
          return null
        }
        children = Children.toArray(children)
        if (ctx && ctx !== children) {
          fn = fn.bind(ctx)
        }
        return children.map(fn)
      },
      forEach(children, fn, ctx) {
        if (children == null) {
          return null
        }
        children = Children.toArray(children)
        if (ctx && ctx !== children) {
          fn = fn.bind(ctx)
        }
        children.forEach(fn)
      },
      count(children) {
        return (children && children.length) || 0
      },
      only(children) {
        children = Children.toArray(children)
        if (children.length !== 1) {
          throw new Error('Children.only() expects only one child.')
        }
        return children[0]
      },
      toArray(children) {
        if (children == null) {
          return []
        }
        return [].concat(children)
      },
    }
    React.Children = Children
  }
  /* eslint-enable no-eq-null, eqeqeq, consistent-return */
} else if (parseFloat(React.version.slice(0, 4)) >= 15.5) {
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

/*
eslint
  import/no-mutable-exports:0,
  import/prefer-default-export:0,
  react/no-deprecated:0
 */
