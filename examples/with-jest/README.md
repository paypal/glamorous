## Example for `glamorous` with `jest` and `enzyme`

### Steps to run

```bash
git clone https://github.com/paypal/glamorous.git
cd glamorous/examples/with-jest
npm install
npm run test
```

### Jest tests

#### Snapshot

Relative to [Jest documentation][jest-snapshot-documentation], you don't need to create snapshot manually.

### Outputting CSS to snapshots

If you are using Jest and Glamorous, you should also consider using [jest-glamor-react] so that your CSS gets outputted to snapshots and not just a hashed class.


#### Create react app

Using [Create react app][cra-repository], you won't be able to set `setupTestFrameworkScriptFile` configuration for Jest.

See [how to][cra-test-environment] use `testSetup.js` file in the CRA test environment.

[cra-repository]: https://github.com/facebookincubator/create-react-app
[cra-test-environment]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#initializing-test-environment
[jest-snapshot-documentation]: https://facebook.github.io/jest/docs/en/snapshot-testing.html
[jest-glamor-react]: https://github.com/kentcdodds/jest-glamor-react
