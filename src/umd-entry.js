import * as glamorousStar from './'

const glamorous = glamorousStar.default

Object.assign(
  glamorous,
  Object.keys(glamorousStar).reduce(
    (e, prop) => {
      if (prop !== 'default') {
        // eslint-disable-next-line import/namespace
        e[prop] = glamorousStar[prop]
      }
      return e
    },
    {},
  ),
)

export default glamorous
