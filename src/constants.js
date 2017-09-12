/* istanbul ignore next */
import preval from 'preval.macro'

export const CHANNEL = '__glamorous__'
export const isPreact = preval`module.exports = Boolean(process.env.BUILD_PREACT)`
