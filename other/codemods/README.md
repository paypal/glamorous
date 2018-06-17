<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

* [glamorous codemods](#glamorous-codemods)
  * [Running Codemods](#running-codemods)
  * [Available codemods](#available-codemods)
    * [`theme-move`](#theme-move)
    * [`glamorous-to-emotion`](#glamorous-to-emotion)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# glamorous codemods

This is where we'll develop and release codemods for `glamorous`. We hopefully
wont have to do it all that much 😄

## Running Codemods

First, you'll need to clone the glamorous repo somewhere:

```bash
git clone https://github.com/paypal/glamorous.git
```

The codemods will then be available to you in `glamorous/other/codemods`

To run the codemods, you'll need to run `babel-codemod`. You can install that
package globally, or you can use `npx` (which comes pre-installed with npm@5.2.0
or greater). Here's how you use it with `npx`:

```bash
npx babel-codemod --plugin ./glamorous/other/codemods/{CODEMOD_NAME}.js "src/**/*.js"
```

Where `CODEMOD_NAME` is the filename of the codemod and `src/**/*.js` is a glob
that matches the files you want to run the codemods on.

> If you don't have `npx` installed, you can install `babel-codemod` globally
> and run the same script without the `npx` prefix.

## Available codemods

### `theme-move`

In glamorous v4 the dynamic props API changed from:

```javascript
function(props, theme, context) {}
```

To

```javascript
function(props, context) {}
```

Where `props` has a `theme` property.

This codemod updates your code to use the `theme` from props and remove the
`theme` argument.

### `glamorous-to-emotion`

[This codemod](https://github.com/TejasQ/babel-plugin-glamorous-to-emotion) helps migrate an existing codebase from glamorous to emotion.
