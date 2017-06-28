## FAQ
[How about source mapping in dev tools?](#how-about-source-mapping-in-dev-tools)

---

### How about source mapping in dev tools?

Glamorous is based on glamor which does not support source map. This is unfortunate. However you can generally figure out what component is responsible for what you're looking at easily, especially with the [babel plugin](https://www.npmjs.com/package/babel-plugin-glamorous-displayname) and [this config](https://github.com/paypal/glamorous#usedisplaynameinclassname).
