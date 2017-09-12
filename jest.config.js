const jest = require('kcd-scripts/config').jest

jest.coveragePathIgnorePatterns = jest.coveragePathIgnorePatterns || []
jest.coveragePathIgnorePatterns.push('/src/.*-entry.js$', '/src/constants.js$')

module.exports = Object.assign({}, jest, {
  snapshotSerializers: ['enzyme-to-json/serializer', 'jest-glamor-react'],
})
