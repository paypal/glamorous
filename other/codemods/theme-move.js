/* eslint max-len:0 */
// this is really handy with: console.log(printAST(node))
// const printAST = require('ast-pretty-print')

module.exports = glamorousThemeCodemod

function glamorousThemeCodemod(babel) {
  const {types: t} = babel
  const identifiers = {}

  return {
    name: 'glamorous-theme-move-codemod',
    visitor: {
      ImportDeclaration(path, {file: {opts: {filename}}}) {
        // find imports of glamorous and add the references
        if (path.node.source.value !== 'glamorous') {
          return
        }
        const specifiers = path.get('specifiers')
        specifiers.forEach(specifier => {
          const {node: {local: {name}}} = specifier
          const {referencePaths = []} = path.scope.getBinding(name) || {}
          identifiers[filename] = identifiers[filename] || []
          identifiers[filename].push(...referencePaths)
        })
      },
      VariableDeclarator(path, {file: {opts: {filename}}}) {
        // find requires of glamorous and add the references
        const isRequireCall = looksLike(path, {
          node: {
            init: {
              type: 'CallExpression',
              callee: {
                name: 'require',
              },
              arguments: args =>
                args.length === 1 && args[0].value === 'glamorous',
            },
          },
        })
        if (!isRequireCall) {
          return
        }
        const {node: {id: {name}}} = path
        const {referencePaths = []} = path.scope.getBinding(name) || {}
        identifiers[filename] = identifiers[filename] || []
        identifiers[filename].push(...referencePaths)
      },
      Program: {
        exit(path, {file: {opts: {filename}}}) {
          // now that we've traversed everything, we can go through each of them
          // and convert the ones that need to be converted
          (identifiers[filename] || []).forEach(identifier => {
            if (identifier.isJSXIdentifier()) {
              const openingElement = identifier.findParent(
                t.isJSXOpeningElement,
              )
              openingElement
                .get('attributes')
                .reduce((expressions, attrPath) => {
                  if (attrPath.node.name.name === 'css') {
                    expressions.push(attrPath.get('value.expression'))
                  }
                  return expressions
                }, [])
                .reduce(dynamicFnReducer, [])
                .forEach(handleDynamicFunction)

              return
            }
            const isBuiltInCall = t.isMemberExpression(identifier.parent)
            let callExpression = identifier.findParent(t.isCallExpression)
            if (!isBuiltInCall && callExpression) {
              callExpression = callExpression.findParent(t.isCallExpression)
            }
            callExpression
              .get('arguments')
              .reduce(dynamicFnReducer, [])
              .forEach(handleDynamicFunction)
          })
        },
      },
    },
  }

  // eslint-disable-next-line complexity
  function handleDynamicFunction(dynamicFn) {
    // eslint-disable-next-line prefer-const
    let [propsArg, themeArg, ...restArgs] = dynamicFn.node.params
    const propsIsDestructured = t.isObjectPattern(propsArg)
    const themeIsDestructured = t.isObjectPattern(themeArg)

    if (propsIsDestructured) {
      if (themeIsDestructured) {
        const key = t.identifier('theme')
        const value = t.objectExpression(themeArg.properties)
        const themeArgProperties = t.objectProperty(key, value)
        propsArg.properties = [...propsArg.properties, themeArgProperties]
      } else {
        const id = t.identifier(themeArg.name)
        const key = id
        const value = id
        const computed = false
        const shorthand = true
        propsArg.properties = [
          ...propsArg.properties,
          t.objectProperty(key, value, computed, shorthand),
        ]
      }
    } else if (themeIsDestructured) {
      const themeIsDestructuredDeeply = themeArg.properties.some(themeProp => {
        return t.isObjectPattern(themeProp.value)
      })
      if (themeIsDestructuredDeeply) {
        handleDeeplyDestructuredTheme()
      }
      themeArg.properties.forEach(themeProp => {
        const {referencePaths = []} = dynamicFn.scope.getBinding(
          themeProp.value.name,
        ) || {}
        referencePaths.forEach(ref => {
          ref.replaceWith(
            t.memberExpression(
              t.memberExpression(
                t.identifier(propsArg.name),
                t.identifier('theme'),
              ),
              t.identifier(ref.node.name),
            ),
          )
        })
      })
    } else {
      const {referencePaths = []} = dynamicFn.scope.getBinding(
        themeArg.name,
      ) || {}
      referencePaths.forEach(ref => {
        ref.replaceWith(
          t.memberExpression(
            t.identifier(propsArg.name),
            t.identifier(ref.node.name),
          ),
        )
      })
    }

    // remove the theme arg
    dynamicFn.node.params = [propsArg, ...restArgs]

    // utils
    function handleDeeplyDestructuredTheme() {
      propsArg = t.objectPattern([
        t.objectProperty(t.identifier('theme'), themeArg),
        t.restProperty(t.identifier('props')),
      ])
    }
  }
}

// eslint-disable-next-line complexity
function dynamicFnReducer(dynamicFns, argPath) {
  if (!argPath || !argPath.node) {
    return dynamicFns
  }
  if (isDynamicFunctionWithTheme(argPath)) {
    dynamicFns.push(argPath)
  } else if (argPath.isArrayExpression()) {
    argPath.get('elements').forEach(element => {
      dynamicFnReducer(dynamicFns, element)
    })
  } else if (argPath.isIdentifier()) {
    // try to track the initialization of this identifier and update that
    // if it's a function
    const binding = argPath.scope.getBinding(argPath.node.name)
    if (!binding || !binding.path) {
      // global variable referenced
      return dynamicFns
    }
    let initPath = binding.path
    if (initPath.isVariableDeclarator()) {
      // could be an assignment to an object, array, or function
      initPath = initPath.get('init')
    }
    dynamicFnReducer(dynamicFns, initPath)
  }
  return dynamicFns
}

function isDynamicFunctionWithTheme(path) {
  return path.node && path.node.params && path.node.params.length > 1
}

function looksLike(a, b) {
  return (
    a &&
    b &&
    Object.keys(b).every(bKey => {
      const bVal = b[bKey]
      const aVal = a[bKey]
      if (typeof bVal === 'function') {
        return bVal(aVal)
      }
      return isPrimitive(bVal) ? bVal === aVal : looksLike(aVal, bVal)
    })
  )
}

function isPrimitive(val) {
  // eslint-disable-next-line
  return val == null || /^[sbn]/.test(typeof val);
}
