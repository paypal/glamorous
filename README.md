<h1 align="center">
  <img src="https://github.com/paypal/glamorous/raw/master/other/logo/full.png" alt="glamorous" title="glamorous" width="200">
  <br>
  glamorous 💄
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">Maintainable CSS with React</p>

> Read [the intro blogpost][intro-blogpost] and [the v4 announcement blog post][v4-announcement-blogpost]

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmcharts]
[![MIT License][license-badge]][LICENSE]

[![All Contributors](https://img.shields.io/badge/all_contributors-55-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Chat][chat-badge]][chat]
[![Code of Conduct][coc-badge]][coc]

[![gzip size][gzip-badge]][unpkg-dist]
[![size][size-badge]][unpkg-dist]
[![module formats: umd, cjs, and es][module-formats-badge]][unpkg-dist]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Table of Contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Documentation](#documentation)
- [Related projects](#related-projects)
- [Using glamorous with react-sketchapp](#using-glamorous-with-react-sketchapp)
- [Usage with Stylus](#usage-with-stylus)
- [Users](#users)
- [Inspiration](#inspiration)
- [Other Solutions](#other-solutions)
- [Support](#support)
- [Got Questions?](#got-questions)
- [Swag 👕](#swag-)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Documentation

You will find [tutorials](https://glamorous.rocks/getting-started/),
[examples](https://glamorous.rocks/examples/),
[API documentation](https://glamorous.rocks/api), and more at the glamorous
website:

<h3 align="center">
<a href="https://glamorous.rocks">glamorous.rocks</a>
</h3>

## Related projects

- [`jest-glamor-react`](https://github.com/kentcdodds/jest-glamor-react): Jest utilities for Glamor and React
- [`glamorous-native`](https://github.com/robinpowered/glamorous-native): React Native component styling solved 💄
- [`glamorous-primitives`](https://github.com/nitin42/glamorous-primitives): style primitive interfaces with glamorous 💄
- [`babel-plugin-glamorous-displayname`](https://github.com/bernard-lin/babel-plugin-glamorous-displayname): Automatically adds a `displayName` to your glamorous components for a better debugging experience.
- [`styled-system`](https://github.com/jxnblk/styled-system): Design system utilities for styled-components, glamorous, and other css-in-js libraries
- [`glamorous-pseudo`](https://github.com/tkh44/glamorous-pseudo): Pseudo component to extend built-in GlamorousComponents
- [`preact-glam`](https://github.com/vesparny/preact-glam): A tiny glamorous version for preact
- [`glamorous-jsxstyle`](https://github.com/paulmolluzzo/glamorous-jsxstyle): jsxstyle components generated with glamorous
- [`vscode-glamorous`](https://github.com/nitin42/vscode-glamorous): A vscode extension for `glamorous`, `glamorous-native` and `glamorous-primitives`.
- [`glam-atom`](https://github.com/nitin42/glam-atom): Atom editor extension for `glamorous`, `glamorous-native` and `glamorous-primitives`.
- [`css-in-js`](https://atom.io/packages/css-in-js): Atom editor extension making it easy to convert normal CSS format to CSS in JS format.
- [Convert CSS-in-JS](https://marketplace.visualstudio.com/items?itemName=paulmolluzzo.convert-css-in-js): VSCode extension making it easy to convert normal CSS format to CSS in JS format.
- [`glamorous-redocx`](https://github.com/nitin42/glamorous-redocx): style [redocx](https://github.com/nitin42/redocx) components with glamorous 💄

## Using glamorous with react-sketchapp

<p align="center">
  <img src="https://i.gyazo.com/f599a760dbe18aaefbeecc40f9146dd8.png">
</p>

With the release of [`glamorous-primitives`](https://github.com/nitin42/glamorous-primitives), now you can use glamorous with [react-sketchapp](https://github.com/airbnb/react-sketchapp) to manage design systems and use React components for designs.

You can find documentation and related examples [here](https://github.com/airbnb/react-sketchapp/tree/master/examples/glamorous).

## Usage with Stylus

You can use [glamorous-stylus](https://github.com/nitin42/glamorous-stylus) for styling React components with Stylus. Find detailed documentation [here](https://github.com/nitin42/glamorous-stylus#api-reference).

## Users

Who uses `glamorous`? See [other/USERS.md](https://github.com/paypal/glamorous/blob/master/other/USERS.md) and add yourself if you use `glamorous`!

## Inspiration

This package was inspired by the work from people's work on the following
projects:

- [styled-components](https://github.com/styled-components/styled-components)
- [jsxstyle](https://github.com/smyte/jsxstyle)

## Other Solutions

There are actually quite a few solutions to the general problem of styling in
React. This isn't the place for a full-on comparison of features, but I'm
unaware of any which supports _all_ of the features which this library supports.

## Support

If you need help, please fork [this CodeSandbox][help-sandbox] and bring it up
in [the chat][chat]

## Got Questions?

Check out the [FAQ](other/FAQ.md).

## Swag 👕

You can pick up [glamorous stickers][stickers] from
[unixstickers.com](https://www.unixstickers.com)! A portion of all purchases
will be donated to [Girls Who Code][gwc]! 🎉

<a href="https://www.unixstickers.com/stickers/coding_stickers/glamorous-hexagon-sticker" title="link to glamorous sticker listing on unixstickers">
  <img src="https://github.com/paypal/glamorous/raw/master/other/swag/sticker-hex.png" alt="glamorous Hex Sticker" title="glamorous Hex Sticker" width="200" />
</a>

<a href="https://www.unixstickers.com/stickers/coding_stickers/glamorous-square-sticker" title="link to glamorous sticker listing on unixstickers">
  <img src="https://github.com/paypal/glamorous/raw/master/other/swag/sticker-square.png" alt="glamorous Square Sticker" title="glamorous Square Sticker" width="200" />
</a>

In addition, a community member created this awesome t-shirt, and they're now
available on Amazon! For every shirt purchased, GSM Studio will donate $1 to
[Girls Who Code][gwc] to support the next generation of programmers. The shirts
come in various colors and sizes. In addition you can check out other clever
t-shirts by [GSM Studio](http://amzn.to/2rxvB1T).

<a href="https://www.amazon.com/dp/B0714JQW67" title="link to glamorous shirt listing on amazon">
  <img src="https://github.com/paypal/glamorous/raw/master/other/swag/shirt-light.png" alt="glamorous Logo T-Shirt (light)" title="glamorous Logo T-Shirt (light)" width="200" />
</a>

<a href="https://www.amazon.com/dp/B072LV68S2" title="link to glamorous shirt listing on amazon">
  <img src="https://github.com/paypal/glamorous/raw/master/other/swag/shirt-dark.png" alt="glamorous Logo T-Shirt (dark)" title="glamorous Logo T-Shirt (dark)" width="200" />
</a>

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub>Kent C. Dodds</sub>](https://kentcdodds.com)<br />[💻](https://github.com/paypal/glamorous/commits?author=kentcdodds "Code") [📖](https://github.com/paypal/glamorous/commits?author=kentcdodds "Documentation") [🚇](#infra-kentcdodds "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/paypal/glamorous/commits?author=kentcdodds "Tests") [👀](#review-kentcdodds "Reviewed Pull Requests") | [<img src="https://avatars0.githubusercontent.com/u/587016?v=3" width="100px;"/><br /><sub>Ives van Hoorne</sub>](http://ivesvh.com)<br />[💡](#example-CompuIves "Examples") | [<img src="https://avatars3.githubusercontent.com/u/4614574?v=3" width="100px;"/><br /><sub>Gerardo Nardelli</sub>](https://gnardelli.com)<br />[📖](https://github.com/paypal/glamorous/commits?author=patitonar "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/14236753?v=3" width="100px;"/><br /><sub>Chandan Rai</sub>](https://github.com/crowchirp)<br />[📖](https://github.com/paypal/glamorous/commits?author=crowchirp "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/16726210?v=3" width="100px;"/><br /><sub>BinHong Lee</sub>](https://binhonglee.github.io)<br />[📖](https://github.com/paypal/glamorous/commits?author=binhonglee "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/737065?v=3" width="100px;"/><br /><sub>Paul Molluzzo</sub>](https://paul.molluzzo.com)<br />[📖](https://github.com/paypal/glamorous/commits?author=paulmolluzzo "Documentation") [💡](#example-paulmolluzzo "Examples") | [<img src="https://avatars0.githubusercontent.com/u/450559?v=3" width="100px;"/><br /><sub>Sriram Thiagarajan</sub>](http://tsriram.in)<br />[💻](https://github.com/paypal/glamorous/commits?author=tsriram "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/417268?v=3" width="100px;"/><br /><sub>Pavithra Kodmad</sub>](https://github.com/pksjce)<br />[💡](#example-pksjce "Examples") | [<img src="https://avatars0.githubusercontent.com/u/82070?v=3" width="100px;"/><br /><sub>Alessandro Arnodo</sub>](http://alessandro.arnodo.net)<br />[💻](https://github.com/paypal/glamorous/commits?author=vesparny "Code") [📖](https://github.com/paypal/glamorous/commits?author=vesparny "Documentation") [⚠️](https://github.com/paypal/glamorous/commits?author=vesparny "Tests") | [<img src="https://avatars1.githubusercontent.com/u/105127?v=3" width="100px;"/><br /><sub>Jason Miller</sub>](https://jasonformat.com)<br />[👀](#review-developit "Reviewed Pull Requests") | [<img src="https://avatars0.githubusercontent.com/u/1295580?v=3" width="100px;"/><br /><sub>Kyle Welch</sub>](http://www.krwelch.com)<br />[👀](#review-kwelch "Reviewed Pull Requests") [💡](#example-kwelch "Examples") | [<img src="https://avatars0.githubusercontent.com/u/1634922?v=3" width="100px;"/><br /><sub>Javi Velasco</sub>](http://javivelasco.com)<br />[👀](#review-javivelasco "Reviewed Pull Requests") | [<img src="https://avatars1.githubusercontent.com/u/6886061?v=3" width="100px;"/><br /><sub>Brandon Dail</sub>](https://twitter.com/aweary)<br />[👀](#review-aweary "Reviewed Pull Requests") | [<img src="https://avatars2.githubusercontent.com/u/1714673?v=3" width="100px;"/><br /><sub>Jason Brown</sub>](http://browniefed.com)<br />[👀](#review-browniefed "Reviewed Pull Requests") |
| [<img src="https://avatars3.githubusercontent.com/u/25375401?v=3" width="100px;"/><br /><sub>jackyho112</sub>](https://github.com/jackyho112)<br />[💻](https://github.com/paypal/glamorous/commits?author=jackyho112 "Code") [⚠️](https://github.com/paypal/glamorous/commits?author=jackyho112 "Tests") | [<img src="https://avatars0.githubusercontent.com/u/3629876?v=3" width="100px;"/><br /><sub>Kurtis Kemple</sub>](https://twitter.com/kurtiskemple)<br />[💻](https://github.com/paypal/glamorous/commits?author=kkemple "Code") [⚠️](https://github.com/paypal/glamorous/commits?author=kkemple "Tests") [📖](https://github.com/paypal/glamorous/commits?author=kkemple "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/38172?v=3" width="100px;"/><br /><sub>Bernardo Raposo</sub>](http://bernardoraposo.com)<br />[📖](https://github.com/paypal/glamorous/commits?author=braposo "Documentation") [💡](#example-braposo "Examples") | [<img src="https://avatars2.githubusercontent.com/u/6325382?v=3" width="100px;"/><br /><sub>Ryan Delaney</sub>](http://rdel.io)<br />[💻](https://github.com/paypal/glamorous/commits?author=rrdelaney "Code") | [<img src="https://avatars2.githubusercontent.com/u/14035529?v=3" width="100px;"/><br /><sub>Anthony Ng</sub>](http://anthonyng.me)<br />[📖](https://github.com/paypal/glamorous/commits?author=newyork-anthonyng "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/37633?v=3" width="100px;"/><br /><sub>Matthew Crutchfield</sub>](http://cnn.com)<br />[💡](#example-mtcrutch "Examples") | [<img src="https://avatars1.githubusercontent.com/u/662750?v=3" width="100px;"/><br /><sub>Kye Hohenberger</sub>](https://github.com/tkh44)<br />[💻](https://github.com/paypal/glamorous/commits?author=tkh44 "Code") [⚠️](https://github.com/paypal/glamorous/commits?author=tkh44 "Tests") [📖](https://github.com/paypal/glamorous/commits?author=tkh44 "Documentation") |
| [<img src="https://avatars3.githubusercontent.com/u/16327281?v=3" width="100px;"/><br /><sub>Bernard Lin</sub>](https://github.com/bernard-lin)<br />[📖](https://github.com/paypal/glamorous/commits?author=bernard-lin "Documentation") [🔌](#plugin-bernard-lin "Plugin/utility libraries") | [<img src="https://avatars2.githubusercontent.com/u/11799597?v=3" width="100px;"/><br /><sub>Miguel Correa</sub>](http://miguelc1221.github.io/)<br />[💻](https://github.com/paypal/glamorous/commits?author=miguelc1221 "Code") | [<img src="https://avatars2.githubusercontent.com/u/769339?v=3" width="100px;"/><br /><sub>Brian Hough</sub>](http://rallypoint.gg)<br />[💡](#example-bhough "Examples") | [<img src="https://avatars3.githubusercontent.com/u/4950425?v=3" width="100px;"/><br /><sub>Erik Cupal</sub>](https://github.com/ErikCupal)<br />[💻](https://github.com/paypal/glamorous/commits?author=ErikCupal "Code") | [<img src="https://avatars1.githubusercontent.com/u/9153498?v=3" width="100px;"/><br /><sub>Kok J Sam</sub>](https://github.com/sammkj)<br />[💻](https://github.com/paypal/glamorous/commits?author=sammkj "Code") | [<img src="https://avatars2.githubusercontent.com/u/14885189?v=3" width="100px;"/><br /><sub>Oleg Proskurin</sub>](http://twitter.com/#!/usulpro)<br />[📖](https://github.com/paypal/glamorous/commits?author=UsulPro "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/848525?v=3" width="100px;"/><br /><sub>Luke John</sub>](https://github.com/luke-john)<br />[💻](https://github.com/paypal/glamorous/commits?author=luke-john "Code") |
| [<img src="https://avatars2.githubusercontent.com/u/4118089?v=3" width="100px;"/><br /><sub>FredericH</sub>](http://fr.linkedin.com/in/fredericheem)<br />[💡](#example-FredericHeem "Examples") | [<img src="https://avatars3.githubusercontent.com/u/656630?v=3" width="100px;"/><br /><sub>Atticus White</sub>](https://atticuswhite.com)<br />[📖](https://github.com/paypal/glamorous/commits?author=ajwhite "Documentation") [🔌](#plugin-ajwhite "Plugin/utility libraries") | [<img src="https://avatars0.githubusercontent.com/u/13483453?v=3" width="100px;"/><br /><sub>marzelin</sub>](https://github.com/marzelin)<br />[💻](https://github.com/paypal/glamorous/commits?author=marzelin "Code") | [<img src="https://avatars2.githubusercontent.com/u/4074973?v=3" width="100px;"/><br /><sub>iwantmyname</sub>](https://iwantmyname.com/)<br />[🚇](#infra-iwantmyname "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars1.githubusercontent.com/u/11809142?v=3" width="100px;"/><br /><sub>Ethan Godt</sub>](http://ethangodt.com)<br /> | [<img src="https://avatars3.githubusercontent.com/u/2175447?v=3" width="100px;"/><br /><sub>Zill Ding</sub>](https://github.com/zillding)<br />[💻](https://github.com/paypal/glamorous/commits?author=zillding "Code") | [<img src="https://avatars3.githubusercontent.com/u/411643?v=3" width="100px;"/><br /><sub>Dan Bradley</sub>](https://github.com/debradley)<br />[💻](https://github.com/paypal/glamorous/commits?author=debradley "Code") |
| [<img src="https://avatars3.githubusercontent.com/u/22868432?v=3" width="100px;"/><br /><sub>Lufty Wiranda</sub>](http://instagram.com/luftywiranda13)<br />[💻](https://github.com/paypal/glamorous/commits?author=luftywiranda13 "Code") | [<img src="https://avatars3.githubusercontent.com/u/3208863?v=3" width="100px;"/><br /><sub>Ansuman Shah</sub>](https://github.com/ansumanshah)<br />[💻](https://github.com/paypal/glamorous/commits?author=ansumanshah "Code") [📖](https://github.com/paypal/glamorous/commits?author=ansumanshah "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/11598?v=3" width="100px;"/><br /><sub>Travis LaDuke</sub>](http://-)<br />[💡](#example-laduke "Examples") | [<img src="https://avatars2.githubusercontent.com/u/11290953?v=3" width="100px;"/><br /><sub>Aydın Çağrı Dumlu</sub>](https://github.com/acgrdumlu)<br />[🐛](https://github.com/paypal/glamorous/issues?q=author%3Aacgrdumlu "Bug reports") [💻](https://github.com/paypal/glamorous/commits?author=acgrdumlu "Code") | [<img src="https://avatars2.githubusercontent.com/u/1383861?v=3" width="100px;"/><br /><sub>Maja Wichrowska</sub>](https://github.com/majapw)<br />[🐛](https://github.com/paypal/glamorous/issues?q=author%3Amajapw "Bug reports") | [<img src="https://avatars3.githubusercontent.com/u/6845263?v=3" width="100px;"/><br /><sub>Tom Liu</sub>](https://github.com/gt3240)<br />[📖](https://github.com/paypal/glamorous/commits?author=gt3240 "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/1863771?v=3" width="100px;"/><br /><sub>Siddharth Kshetrapal</sub>](https://github.com/siddharthkp)<br />[⚠️](https://github.com/paypal/glamorous/commits?author=siddharthkp "Tests") [🔧](#tool-siddharthkp "Tools") |
| [<img src="https://avatars2.githubusercontent.com/u/5257243?v=3" width="100px;"/><br /><sub>WillowHQ</sub>](https://github.com/WillowHQ)<br />[📖](https://github.com/paypal/glamorous/commits?author=WillowHQ "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/12202757?v=4" width="100px;"/><br /><sub>Mohammad Rajabifard</sub>](https://tarino.ir)<br />[🐛](https://github.com/paypal/glamorous/issues?q=author%3Amorajabi "Bug reports") [📖](https://github.com/paypal/glamorous/commits?author=morajabi "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/17005317?v=3" width="100px;"/><br /><sub>Omar Albacha</sub>](https://github.com/Oalbacha)<br />[💻](https://github.com/paypal/glamorous/commits?author=Oalbacha "Code") [📖](https://github.com/paypal/glamorous/commits?author=Oalbacha "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/28659384?v=3" width="100px;"/><br /><sub>tdeschryver</sub>](https://github.com/tdeschryver)<br />[💻](https://github.com/paypal/glamorous/commits?author=tdeschryver "Code") [⚠️](https://github.com/paypal/glamorous/commits?author=tdeschryver "Tests") | [<img src="https://avatars0.githubusercontent.com/u/4955191?v=4" width="100px;"/><br /><sub>Dylan Mozlowski</sub>](https://github.com/DylanMoz)<br />[💻](https://github.com/paypal/glamorous/commits?author=DylanMoz "Code") | [<img src="https://avatars2.githubusercontent.com/u/3275424?v=4" width="100px;"/><br /><sub>andretshurotshka</sub>](https://github.com/goodmind)<br />[💻](https://github.com/paypal/glamorous/commits?author=goodmind "Code") [⚠️](https://github.com/paypal/glamorous/commits?author=goodmind "Tests") | [<img src="https://avatars3.githubusercontent.com/u/12836237?v=4" width="100px;"/><br /><sub>Danila</sub>](https://github.com/O4epegb)<br />[⚠️](https://github.com/paypal/glamorous/commits?author=O4epegb "Tests") |
| [<img src="https://avatars3.githubusercontent.com/u/12473268?v=4" width="100px;"/><br /><sub>Junyoung Clare Jang</sub>](http://ailrun.github.io/)<br />[💻](https://github.com/paypal/glamorous/commits?author=Ailrun "Code") [⚠️](https://github.com/paypal/glamorous/commits?author=Ailrun "Tests") | [<img src="https://avatars2.githubusercontent.com/u/897575?v=4" width="100px;"/><br /><sub>Björn Ricks</sub>](https://twitter.com/bjoernricks)<br />[🐛](https://github.com/paypal/glamorous/issues?q=author%3Abjoernricks "Bug reports") [💻](https://github.com/paypal/glamorous/commits?author=bjoernricks "Code") [📖](https://github.com/paypal/glamorous/commits?author=bjoernricks "Documentation") [⚠️](https://github.com/paypal/glamorous/commits?author=bjoernricks "Tests") | [<img src="https://avatars0.githubusercontent.com/u/4934193?v=4" width="100px;"/><br /><sub>Tyler Deitz</sub>](http://tylerdeitz.com)<br />[💻](https://github.com/paypal/glamorous/commits?author=tvler "Code") | [<img src="https://avatars2.githubusercontent.com/u/16104985?v=4" width="100px;"/><br /><sub>Shovan Chatterjee</sub>](https://twitter.com/shovan_ch)<br />[📖](https://github.com/paypal/glamorous/commits?author=shovanch "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/6839660?v=4" width="100px;"/><br /><sub>johnjessewood</sub>](https://github.com/johnjesse)<br />[💻](https://github.com/paypal/glamorous/commits?author=johnjesse "Code") | [<img src="https://avatars3.githubusercontent.com/u/856386?v=4" width="100px;"/><br /><sub>Daniel</sub>](https://www.danielberndt.net)<br />[💻](https://github.com/paypal/glamorous/commits?author=danielberndt "Code") [⚠️](https://github.com/paypal/glamorous/commits?author=danielberndt "Tests") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/paypal/glamorous.svg?style=flat-square
[build]: https://travis-ci.org/paypal/glamorous
[coverage-badge]: https://img.shields.io/codecov/c/github/paypal/glamorous.svg?style=flat-square
[coverage]: https://codecov.io/github/paypal/glamorous
[version-badge]: https://img.shields.io/npm/v/glamorous.svg?style=flat-square
[package]: https://www.npmjs.com/package/glamorous
[downloads-badge]: https://img.shields.io/npm/dm/glamorous.svg?style=flat-square
[npmcharts]: https://npmcharts.com/compare/glamorous
[license-badge]: https://img.shields.io/npm/l/glamorous.svg?style=flat-square
[license]: https://github.com/paypal/glamorous/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[chat]: https://gitter.im/paypal/glamorous
[chat-badge]: https://img.shields.io/gitter/room/paypal/glamorous.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/paypal/glamorous/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/paypal/glamorous.svg?style=social
[github-watch]: https://github.com/paypal/glamorous/watchers
[github-star-badge]: https://img.shields.io/github/stars/paypal/glamorous.svg?style=social
[github-star]: https://github.com/paypal/glamorous/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20glamorous!%20https://github.com/paypal/glamorous%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/paypal/glamorous.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[gzip-badge]: http://img.badgesize.io/https://unpkg.com/glamorous/dist/glamorous.umd.min.js?compression=gzip&label=gzip%20size&style=flat-square
[size-badge]: http://img.badgesize.io/https://unpkg.com/glamorous/dist/glamorous.umd.min.js?label=size&style=flat-square
[unpkg-dist]: https://unpkg.com/glamorous/dist/
[module-formats-badge]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20es-green.svg?style=flat-square
[intro-blogpost]: https://medium.com/p/fb3c9f4ed20e
[help-sandbox]: http://kcd.im/glamorous-help
[gwc]: https://girlswhocode.com/
[stickers]: https://www.unixstickers.com/tag/glamorous
[v4-announcement-blogpost]: https://blog.kentcdodds.com/glamorous-v4-is-here-c678fe02a39a
