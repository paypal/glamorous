## FAQ
[How about source mapping in dev tools?](#how-about-source-mapping-in-dev-tools)

---

### How about source mapping in dev tools?

Glamorous is based on glamor which does not support source map. This is unfortunate. However you can generally figure out what component is responsible for what you're looking at easily, especially with the [babel plugin](https://www.npmjs.com/package/babel-plugin-glamorous-displayname) (https://github.com/paypal/glamorous#usedisplaynameinclassname).

### How does semver work here?

Glamorous follows semver with regards to official APIs and type definitions.
If a change needs to be made with regards to how glamorous generates the
classNames, that will be made as a patch or minor release rather than a major
release (as you should not be relying on the generated classNames anyway).
If you're concerned about your Jest snapshots breaking due to changes in
the className, you should use [`jest-glamor-react`](https://github.com/kentcdodds/jest-glamor-react) which
will not be impacted by changes to the className.
