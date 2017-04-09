import React from 'react'
import glamorous from 'glamorous'

export function Wrapper(props) {
  const MySection = glamorous.section({
    padding: '4em',
    background: 'papayawhip',
  })
  return <MySection {...props} />
}

export function Title(props) {
  const MyH1 = glamorous.h1({
    fontSize: '1.5em',
    textAlign: 'center',
    color: 'palevioletred',
  })
  return <MyH1 {...props} />
}
