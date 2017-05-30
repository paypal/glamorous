const npsUtils = require('nps-utils')

const series = npsUtils.series
const concurrent = npsUtils.concurrent
const rimraf = npsUtils.rimraf

module.exports = {
  scripts: {
    contributors: {
      add: {
        description: 'When new people contribute to the project, run this',
        script: 'all-contributors add',
      },
      generate: {
        description: 'Update the badge and contributors table',
        script: 'all-contributors generate',
      },
    },
    commit: {
      description: 'This uses commitizen to help us generate well formatted commit messages',
      script: 'git-cz',
    },
    test: {
      default: 'jest --coverage',
      watch: 'jest --watch',
      build: {
        description: 'validates the built files',
        script: 'babel-node dist-test/index.js',
      },
    },
    build: {
      description: 'delete the dist directory and run all builds',
      default: series(
        rimraf('dist'),
        concurrent.nps(
          'build.es',
          'build.cjs',
          'build.umd.main',
          'build.umd.min',
          'build.es.tiny',
          'build.cjs.tiny',
          'build.umd.main.tiny',
          'build.umd.min.tiny'
        )
      ),
      es: {
        description: 'run the build with rollup (uses rollup.config.js)',
        script: 'rollup --config --environment FORMAT:es && node other/concat-exports.js',
        tiny: 'rollup --config --environment FORMAT:es,TINY',
      },
      cjs: {
        description: 'run rollup build with CommonJS format',
        script: 'rollup --config --environment FORMAT:cjs',
        tiny: 'rollup --config --environment FORMAT:cjs,TINY',
      },
      umd: {
        min: {
          description: 'run the rollup build with sourcemaps',
          script: 'rollup --config --sourcemap --environment MINIFY,FORMAT:umd',
          tiny: 'rollup --config --sourcemap --environment MINIFY,FORMAT:umd,TINY',
        },
        main: {
          description: 'builds the cjs and umd files',
          script: 'rollup --config --sourcemap --environment FORMAT:umd',
          tiny: 'rollup --config --sourcemap --environment FORMAT:umd,TINY',
        },
      },
      andTest: series.nps('build', 'test.build'),
    },
    lint: {
      description: 'lint the entire project',
      script: 'eslint .',
    },
    examples: {
      withJest: {
        description: 'This jumpstarts and validates the with-jest example.',
        script: series(
          'cd examples/with-jest',
          'yarn install',
          'yarn run test',
          'cd ../../'
        ),
      },
    },
    validate: {
      description: 'This runs several scripts to make sure things look good before committing or on clean install',
      default: concurrent.nps('lint', 'build.andTest', 'test'),
      examples: {
        description: 'Validates the examples folder',
        script: 'nps examples.withJest',
      },
    },
  },
  options: {
    silent: false,
  },
}

// this is not transpiled
/*
  eslint
  max-len: 0,
  comma-dangle: [
    2,
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      functions: 'never'
    }
  ]
 */
