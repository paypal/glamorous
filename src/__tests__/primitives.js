import React from 'react'
import {render, mount} from 'enzyme'
import * as jestGlamorReact from 'jest-glamor-react'
import {StyleSheet} from 'react-primitives'
import glamorous from '../primitives/index'

expect.extend(jestGlamorReact.matcher)
expect.addSnapshotSerializer(jestGlamorReact.serializer)

describe('Primitive interfaces', () => {
  test('sanity test', () => {
    const Component = glamorous.view({margin: '10px'})
    expect(<Component />).toMatchSnapshotWithGlamor()
  })

  test('should not throw any error when called', () => {
    glamorous.view({})
  })

  test('should combine with StyleSheet.create() (inline styles)', () => {
    const Component = glamorous.view({
      margin: '10px',
      justifyContent: 'center',
      alignItems: 'center',
    })

    const styles = StyleSheet.create({
      foo: {
        backgroundColor: 'red',
        display: 'flex',
      },
    })

    expect(<Component style={styles.foo} />).toMatchSnapshotWithGlamor()
  })

  test('should attach a displayName', () => {
    const Component = glamorous.view({})
    expect(Component.displayName).toBe('glamorous(View)')
  })

  test('should pass the ref to the component', () => {
    const Component = glamorous.view({})
    const ref = jest.fn()

    const wrapper = mount(<Component innerRef={ref} />)
    const View = wrapper.find('View').first()

    expect(ref).toHaveBeenCalledWith(View.node)
  })

  test('should render a component with theme properties', () => {
    const Component = glamorous.text(
      {
        color: 'red',
      },
      (props, theme) => ({padding: theme.padding}),
    )
    expect(
      render(<Component theme={{padding: '10px'}} />),
    ).toMatchSnapshotWithGlamor()
  })

  test('should pass an updated theme when theme prop changes', () => {
    const Component = glamorous.text(
      {
        color: 'red',
      },
      (props, theme) => ({padding: theme.padding}),
    )
    const wrapper = mount(<Component theme={{padding: 10}} />)
    expect(wrapper).toMatchSnapshotWithGlamor(
      `with theme prop of padding 10px`,
    )
    wrapper.setProps({theme: {padding: 20}})
    expect(wrapper).toMatchSnapshotWithGlamor(
      `with theme prop of padding 20px`,
    )
  })

  test('should render the Native <Image /> component', () => {
    const ReactImage = glamorous.image({padding: '10px'})
    expect(
      <ReactImage source="https://facebook.github.io/react/img/logo_og.png" />,
    ).toMatchSnapshotWithGlamor()
  })

  test('combine inline styles with <Image /> component', () => {
    const styles = StyleSheet.create({
      image: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    })
    const ReactImage = glamorous.image({padding: '10px'})
    expect(
      <ReactImage
        style={styles.image}
        source="https://facebook.github.io/react/img/logo_og.png"
      />,
    ).toMatchSnapshotWithGlamor()
  })

  // test('should support jsx-styled api', () => {
  //   const Comp = glamorous(reactPrimitives['View'])()

  //   expect(
  //     render(
  //       <Comp color="red">Hello !!</Comp>
  //     )
  //   ).toMatchSnapshotWithGlamor()
  // })
})
