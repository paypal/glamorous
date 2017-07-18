/* eslint max-len:0 */
// this is really handy with: console.log(printAST(node))
// const printAST = require('ast-pretty-print')

module.exports = glamorousThemeCodemod

function glamorousThemeCodemod(babel) {
  const {types: t} = babel
  const identifiers = []

  return {
    name: 'glamorous-theme-move-codemod',
    visitor: {
      ImportDeclaration(path) {
        // find imports of glamorous and add the references
        const defaultSpecifierPath = path.get('specifiers')[0]
        if (
          path.node.source.value !== 'glamorous' ||
          !t.isImportDefaultSpecifier(defaultSpecifierPath)
        ) {
          return
        }
        const {node: {local: {name}}} = defaultSpecifierPath
        const {referencePaths = []} = path.scope.getBinding(name) || {}
        identifiers.push(...referencePaths)
      },
      VariableDeclarator(path) {
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
        identifiers.push(...referencePaths)
      },
      Program: {
        exit() {
          // now that we've traversed everything, we can go through each of them
          // and convert the ones that need to be converted
          identifiers.forEach(identifier => {
            const isBuiltInCall = t.isMemberExpression(identifier.parent)
            let callExpression = identifier.findParent(t.isCallExpression)
            if (!isBuiltInCall) {
              callExpression = callExpression.findParent(t.isCallExpression)
            }
            callExpression
              .get('arguments')
              .filter(
                dynamicFn =>
                  dynamicFn.node.params && dynamicFn.node.params.length > 1,
              )
              .forEach(handleDynamicFunction)
          })
        },
      },
    },
  }

  function handleDynamicFunction(dynamicFn) {
    const [propsArg, themeArg, ...restArgs] = dynamicFn.node.params
    const propsIsDestructured = t.isObjectPattern(propsArg)
    const themeIsDestructured = t.isObjectPattern(themeArg)

    if (propsIsDestructured) {
      if (themeIsDestructured) {
        const themeArgProperties = t.objectProperty(
          t.identifier('theme'),
          t.objectExpression(themeArg.properties),
        )
        propsArg.properties = [...propsArg.properties, themeArgProperties]
        dynamicFn.node.params = [propsArg, ...restArgs]
      } else {
        propsArg.properties = [
          ...propsArg.properties,
          propertyFactory(themeArg.name),
        ]
        dynamicFn.node.params = [propsArg, ...restArgs]
      }
    } else if (themeIsDestructured) {
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
  }

  function propertyFactory(name) {
    const key = t.identifier(name)
    const prop = t.objectProperty(key, key)
    prop.shorthand = true
    return prop
  }
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
