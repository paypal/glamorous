# Migrating

This is for those migrating to [emotion-js](https://github.com/emotion-js/emotion) from glamorous.

## Installing

```
yarn add emotion

# React
yarn add react-emotion

# Preact
yarn add preact-emotion

# you will need this(recomended)
yarn add babel-plugin-emotion

# if you use ThemeProvider
yarn add emotion-theming
```

You will need to make some adjustments to your `.babelrc`.

This is the recomended config

```
{
  "env": {
    "production": {
      "plugins": [["emotion", { "hoist": true }]]
    },
    "development": {
      "plugins": [
        ["emotion", { "sourceMap": true, "autoLabel": true }]
      ]
    }
  }
}
```

If you need more details see [Install Emotion](https://emotion.sh/docs/install)

## Imports

If you are in react `import glamorous from 'glamorous'` becomes `import styled from 'react-emotion'`

If you use `<ThemeProvider>` `import { ThemeProvider } from "glamorous"` becomes `import { ThemeProvider } from "emotion-theming"` which is a seperate package [emotion-theming](https://github.com/emotion-js/emotion/tree/master/packages/emotion-theming)

If your using css.keyframes(glamor) you can adjust them to use `import { keyframes } from "react-emotion"`

## Possible Gotchas

This list is not comprehensive please feel free to make adjustments or additions.

##### Object Syntax

If moving to emotion you will need their [babel-plugin-emotion](https://github.com/emotion-js/emotion/tree/master/packages/babel-plugin-emotion). Otherwise you will need to use template strings(that's a lot of work don't do that) and most likely change your syntax a lot of places.

You will need to replace

`export const StyledElement = glamorous.div({ styles here })`

with

`export const StyledElement = styled.div({ styles here })`

Find and replace `glamorous.` ftw.

If you use `css={{ backgroundColor: "purple" }}` you should be good.. but you will need to replace any glamorous objects like `import { Div, Span, Img } from 'glamorous'` with good ol' divs and elements. Also `<glamorous.Div>` needs to become `<div>` etc.

One thing to watch out for `` content: `""` ``(backticks) should become `content: '""'` (replace with single ticks) or you will be missing some pseudo elements that are most likely important ;).

## Thanks!

Glamorous is great, emotion is great.. Happy migrating!
