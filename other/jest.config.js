const jestConfig = require('kcd-scripts/config').jest

module.exports = Object.assign(jestConfig, {
  roots: ['.'],
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
})
