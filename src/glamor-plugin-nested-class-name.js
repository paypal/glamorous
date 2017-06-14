const regex = /\.g-\d+-\d+$/
export default nestedClassNamePlugin

// this enables part of the component as selector API:
// const RedDiv = glamorous.div({color: 'red'})
// const BlueDiv = glamorous.div({[RedDiv]: {color: 'blue'}})
// without this plugin you'd have to write that as:
// const BlueDiv = glamorous.div({[`& ${RedDiv}`]: {color: 'blue'}})
// which would be less ergonomic
//
// an important thing to note is that due to the existence of this plugin
// is that this could happen
// const myClassName = glamor.css({
//   color: 'red',
//   '.g-2-4': {
//     color: 'blue',
//   },
//   '.some-other-class-name': {
//     color: 'green',
//   }
// })
// <div className={`${myClassName}`} /> // color: red
// <div className={`${myClassName} some-other-class-name`} /> // color: green
// <div className={`${myClassName} g-2-4`} /> // color: red
//
// Note that this plugin forces all selectors matching the regex to
// be child selectors and it would be impossible to have one behave like
// normal (additional) selectors (like in the `some-other-class-name` case.
// I think this use case is highly unlikely, so it's a good trade-off
function nestedClassNamePlugin({selector, style}) {
  selector = selector
    .split(',')
    .map(sel => {
      if (regex.test(sel)) {
        return sel.replace(regex, ' $&')
      }
      return sel
    })
    .join(',')
  return {selector, style}
}
