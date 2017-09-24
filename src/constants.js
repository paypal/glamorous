/* istanbul ignore next */
import preval from 'preval.macro'

export const CHANNEL = '__glamorous__'
export const isPreact = preval`module.exports = process.env.BUILD_PREACT === 'true'`
