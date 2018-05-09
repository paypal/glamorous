const fs = require('fs')
const path = require('path')

const packageJsonPath = path.resolve(__dirname, '..', 'preact', 'package.json')

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
packageJson.typings = '../typings/preact/glamorous.d.ts'

fs.writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`)
