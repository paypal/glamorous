import createGlamorous from './create-glamorous'

function splitProps({
  css: cssOverrides = {},
  className, // eslint-disable-line
  innerRef, // eslint-disable-line
  glam, // eslint-disable-line
  ...rest
}) {
  return {toForward: rest, cssOverrides}
}

const glamorous = createGlamorous(splitProps)

export default glamorous
