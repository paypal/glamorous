const jestConfig = require('kcd-scripts/jest')

function push(prop, ...vals) {
  jestConfig[prop] = jestConfig[prop] || []
  jestConfig[prop].push(...vals)
}

push('coveragePathIgnorePatterns', '/src/.*-entry.js$', '/src/constants.js$')
push('snapshotSerializers', 'enzyme-to-json/serializer', 'jest-glamor-react')
push('setupFiles', '<rootDir>/other/setup-tests.js')

module.exports = jestConfig
