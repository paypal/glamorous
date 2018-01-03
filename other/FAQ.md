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

### What does glamorous do that CSS-modules can't do?

The biggest difference between glamorous and CSSModules is having semantic and declarative render methods. Without glamorous you often rely on
class names or inline styles to style your components. Glamorous gives you a small abstraction around creating components that carry their styles with them.
This small abstraction helps avoid boilerplate and assists in breaking down components into smaller and more declarative components. There are a lot of
additional features that help differentiate glamorous to CSSModules check out the [getting started page](https://glamorous.rocks/getting-started/) or
the [examples](https://glamorous.rocks/examples/).
And for more information, you can see [Kent](https://twitter.com/kentcdodds) (author of glamorous) [talk more about glamorous vs CSSModules](https://youtu.be/biewJRnEiwU?list=PLV5CVI1eNcJh5CTgArGVwANebCrAh2OUE).
