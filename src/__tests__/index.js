/* eslint func-style:0, react/prop-types:0 */
import React from 'react'
import * as glamor from 'glamor'
import {render, mount} from 'enzyme'
import {oneLine} from 'common-tags'
import glamorous, {ThemeProvider} from '../'
import {PropTypes} from '../react-compat'
import {CHANNEL} from '../constants'

const nodeEnv = process.env.NODE_ENV

afterEach(() => {
  process.env.NODE_ENV = nodeEnv
})

test('sanity test', () => {
  const Div = glamorous.div({marginLeft: 24})
  expect(render(<Div />)).toMatchSnapshot()
})

test('can use pre-built glamorous components with css attributes', () => {
  expect(
    render(
      <glamorous.A
        display="flex"
        flexDirection="column"
        href="/is-forwarded"
        id="is-forwarded"
        className="is added to classes"
      />,
    ),
  ).toMatchSnapshot()
})

test('can use pre-built glamorous components with css prop', () => {
  const computed = 'background'
  expect(
    render(
      <glamorous.A
        display="flex"
        flexDirection="column"
        href="/is-forwarded"
        id="is-forwarded"
        className="is added to classes"
        css={{
          [computed]: 'blue',
        }}
      />,
    ),
  ).toMatchSnapshot()
})

test('the css prop accepts "GlamorousStyles"', () => {
  const object = {fontSize: 12}
  expect(render(<glamorous.Section css={object} />)).toMatchSnapshot(
    'css prop with an object',
  )

  const array = [
    {marginTop: 1, marginRight: 1},
    {marginRight: 2, marginBottom: 2},
  ]
  expect(render(<glamorous.Section css={array} />)).toMatchSnapshot(
    'css prop with an array',
  )

  // this one's weird, but could enable some Ahead of Time
  // compilation in the future
  const className = `${glamor.css({color: 'red'})} abc-123`
  expect(render(<glamorous.Section css={className} />)).toMatchSnapshot(
    'css prop with a className',
  )

  const fn1 = jest.fn(() => ({padding: 20}))
  const fn2 = jest.fn(() => ({margin: 30}))
  const props = {css: [fn1, fn2], fontSize: 10, theme: {color: 'red'}}
  expect(render(<glamorous.Section {...props} />)).toMatchSnapshot(
    'css prop with a function',
  )
  expect(fn1).toHaveBeenCalledTimes(1)
  expect(fn2).toHaveBeenCalledTimes(1)
  const context = {__glamorous__: undefined}
  expect(fn1).toHaveBeenCalledWith(
    expect.objectContaining(props),
    expect.objectContaining(context),
  )
  expect(fn2).toHaveBeenCalledWith(
    expect.objectContaining(props),
    expect.objectContaining(context),
  )
})

test('merges composed component styles for reasonable overrides', () => {
  const Parent = glamorous.div({
    marginTop: 1,
    marginRight: 1,
    paddingTop: 1,
    paddingRight: 1,
  })
  const Child = glamorous(Parent)({
    marginRight: 2,
    marginBottom: 2,
    paddingTop: 2,
    paddingRight: 2,
  })
  const Grandchild = glamorous(Child)({
    marginBottom: 3,
    marginLeft: 3,
  })
  const otherGlamorStyles1 = glamor.css({
    marginLeft: 4,
    paddingTop: 4,
  })
  const otherGlamorStyles2 = glamor.css({
    paddingTop: 5,
    paddingRight: 5,
  })
  const wrapper = render(
    <Grandchild
      className={oneLine`
          other classes
          ${otherGlamorStyles1}
          are not
          ${otherGlamorStyles2}
          removed
        `}
      css={{
        paddingRight: 6,
      }}
    />,
  )
  const el = wrapper.children()[0]
  // being explicit
  const included = ['other', 'classes', 'are', 'not', 'removed']
  included.forEach(className => {
    expect(el.attribs.class).toContain(className)
  })
  // still using a snapshot though for good measure
  expect(wrapper).toMatchSnapshot()
})

test('merges composed component forwardProps', () => {
  const parent = ({shouldRender, ...rest}) => {
    return shouldRender ? <div {...rest} /> : null
  }
  const Child = glamorous(parent, {forwardProps: ['shouldRender']})()
  const Grandchild = glamorous(Child)()
  const wrapper = render(<Grandchild shouldRender={true} />)
  expect(wrapper).toMatchSnapshot()
})

test('styles can be functions that accept props', () => {
  const MyDiv = glamorous.div({marginTop: 1}, ({margin}) => ({
    marginTop: margin,
  }))
  expect(render(<MyDiv margin={2} />)).toMatchSnapshot()
})

test('style objects can be arrays and glamor will merge those', () => {
  const phoneMediaQuery = '@media (max-width: 640px)'
  const MyDiv = glamorous.div(
    [
      {[phoneMediaQuery]: {lineHeight: 1.2}},
      // this 👇 should win
      {[phoneMediaQuery]: {lineHeight: 1.3}},
    ],
    ({big, square}) => {
      const bigStyles = big ? {[phoneMediaQuery]: {fontSize: 20}} : {}
      const squareStyles = square ?
        {[phoneMediaQuery]: {borderRadius: 0}} :
        {[phoneMediaQuery]: {borderRadius: '50%'}}
      return [bigStyles, squareStyles]
    },
  )
  expect(render(<MyDiv big={true} square={false} />)).toMatchSnapshot()
})

test('falls back to `name` if displayName cannot be inferred', () => {
  const MyDiv = props => <div {...props} />
  const MyComp = glamorous(MyDiv)()
  expect(MyComp.displayName).toBe('glamorous(MyDiv)')
})

test('falls back to `unknown` if name cannot be inferred', () => {
  const MyComp = glamorous(props => <div {...props} />)()
  expect(MyComp.displayName).toBe('glamorous(unknown)')
})

test('allows you to specify a displayName', () => {
  const MyComp = glamorous(props => <div {...props} />, {
    displayName: 'Hi There',
  })()
  expect(MyComp.displayName).toBe('Hi There')
})

test('will not forward `color` to a div', () => {
  expect(render(<glamorous.Div color="red" />)).toMatchSnapshot()
})

test('will forward `color` to an svg', () => {
  expect(render(<glamorous.Svg color="red" />)).toMatchSnapshot()
})

test('allows you to specify the tag rendered by a component', () => {
  const MySvgComponent = props => <svg {...props} />
  const MyStyledSvgComponent = glamorous(MySvgComponent, {rootEl: 'svg'})({
    height: 1,
    width: 1,
  })
  expect(
    render(
      <MyStyledSvgComponent height={2} noForward={true} css={{width: 2}} />,
    ),
  ).toMatchSnapshot()
})

test('forwards props when the GlamorousComponent.rootEl is known', () => {
  // this test demonstrates how to prevent glamorous from forwarding
  // props all the way down to components which shouldn't be getting them
  // (components you have no control over).

  // here's a component you can't change, it renders all props to it's
  // `rootEl` which is a `div` in this case. They probably shouldn't be doing
  // this, but there are use cases for libraries to do this:
  const SomeComponentIHaveNoControlOver = jest.fn(props => <div {...props} />)

  // to prevent glamorous from forwarding non-div attributes to this
  // component, you can make a glamorous version out of it and specify the
  // `rootEl` as `div` (doesn't matter a whole lot, except in the case of
  // `svg`, if it's an `svg`, then definitely put `svg` otherwise, put
  // something else...
  const MyWrappedVersion = glamorous(SomeComponentIHaveNoControlOver, {
    rootEl: 'div',
  })()
  // no need to pass anything. This will just create be a no-op class,
  // no problem
  const MyWrappedVersionMock = jest.fn(props =>
    <MyWrappedVersion {...props} />,
  )

  // from there we can use our wrapped version and it will function the
  // same as the original
  const MyMyWrappedVersion = jest.fn(props =>
    <MyWrappedVersionMock {...props} />,
  )

  // then if we make a parent glamorous, it will forward props down until
  // it hits our wrapper at which time it will check whether the prop is
  // valid for `rootEl === 'div'`, and if it's not then it wont forward the
  // prop along to `SomeComponentIHaveNoControlOver` and we wont have the
  // warning from react about noForward being an invalid property for a
  // `div`. Yay!
  const MyStyledMyMyWrappedVersion = glamorous(MyMyWrappedVersion)({
    padding: 1,
    margin: 1,
  })
  const secretMessage = 'He likes it! Hey Mikey!'
  const ui = render(
    <MyStyledMyMyWrappedVersion noForward={42}>
      {secretMessage}
    </MyStyledMyMyWrappedVersion>,
  )
  const {calls: [[calledProps]]} = SomeComponentIHaveNoControlOver.mock
  expect(calledProps.noForward).toBe(undefined)
  expect(MyWrappedVersionMock).toHaveBeenCalledWith(
    {
      className: expect.anything(),
      children: secretMessage,
      noForward: 42,
    },
    expect.anything(),
    expect.anything(),
  )
  expect(MyMyWrappedVersion).toHaveBeenCalledWith(
    {
      children: secretMessage,
      className: expect.anything(),
      noForward: 42,
    },
    expect.anything(),
    expect.anything(),
  )
  expect(ui).toMatchSnapshot()
})

test('renders a component with theme properties', () => {
  const Comp = glamorous.div(
    {
      color: 'red',
    },
    ({theme}) => ({padding: theme.padding}),
  )
  expect(render(<Comp theme={{padding: '10px'}} />)).toMatchSnapshot()
})

test('passes an updated theme when theme prop changes', () => {
  const Comp = glamorous.div(
    {
      color: 'red',
    },
    ({theme}) => ({padding: theme.padding}),
  )
  const wrapper = mount(<Comp theme={{padding: 10}} />)
  expect(wrapper).toMatchSnapshot(`with theme prop of padding 10px`)
  wrapper.setProps({theme: {padding: 20}})
  expect(wrapper).toMatchSnapshot(`with theme prop of padding 20px`)
})

test('passes `theme` to the css prop if it is a function', () => {
  const Comp = glamorous.div()
  const css = jest.fn()
  const props = {css}
  const theme = {color: 'blue'}
  mount(
    <ThemeProvider theme={theme}>
      <Comp {...props} />
    </ThemeProvider>,
  )
  expect(css).toHaveBeenCalledTimes(1)
  const context = expect.objectContaining({[CHANNEL]: expect.any(Object)})
  expect(css).toHaveBeenCalledWith({...props, theme}, context)
})

test('allows you to pass custom props that are allowed', () => {
  const MyComponent = jest.fn(function MyComponent({shouldRender, ...rest}) {
    return shouldRender ? <div {...rest} /> : null
  })
  const MyStyledComponent = glamorous(MyComponent, {
    forwardProps: ['shouldRender'],
    rootEl: 'div',
  })({
    padding: 1,
  })
  expect(
    render(
      <MyStyledComponent shouldRender={true} otherThing={false} id="hello" />,
    ),
  ).toMatchSnapshot()
  expect(MyComponent).toHaveBeenCalledTimes(1)
  expect(MyComponent).toHaveBeenCalledWith(
    {
      shouldRender: true,
      id: 'hello',
      className: expect.any(String),
    },
    expect.any(Object),
    expect.any(Object),
  )
})

test('should receive inner ref if specified', () => {
  const getRef = jest.fn()
  const Comp = glamorous.div({
    marginLeft: '24px',
  })

  mount(<Comp innerRef={getRef} />)

  expect(getRef).toHaveBeenCalled()
})

test('can accept classNames instead of style objects', () => {
  // this is to support a babel plugin to pre-compile static styles
  const className1 = glamor.css({paddingTop: 1, paddingRight: 1}).toString()
  const styles2 = {paddingRight: 2, paddingBottom: 2}
  const className3 = glamor
    .css({paddingBottom: 3, paddingLeft: 3})
    .toString()
  const styles4 = {paddingLeft: 4}
  const Comp = glamorous.div(
    className1,
    styles2,
    className3,
    styles4,
    'extra-thing',
  )
  expect(render(<Comp />)).toMatchSnapshot()
})

test('can accept functions which return string class names', () => {
  const styles1 = {paddingRight: 2, paddingBottom: 2}
  const styles2 = props => (props.active ? 'is-active' : '')
  const Comp = glamorous.div(styles1, styles2, 'extra-thing')
  expect(render(<Comp active />)).toMatchSnapshot()
})

test('should accept user defined contextTypes', () => {
  const dynamicStyles = jest.fn()
  const Child = glamorous.div(dynamicStyles)
  Child.contextTypes = {fontSize: PropTypes.number}

  const context = {fontSize: 24}

  render(<Child />, {context})
  expect(dynamicStyles).toHaveBeenCalledTimes(1)
  const theme = {}
  const props = {theme}
  expect(dynamicStyles).toHaveBeenCalledWith(props, context)
})
