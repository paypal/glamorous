// @flow
import type {Component, Element} from 'react'

export type FunctionalComponent = (
  {[key: string]: any}, // props
  ?{[key: string]: any}, // context
) => Element<*> | null;

// eslint-disable-next-line no-undef
export type ComponentClass = Class<Component<*, *, *>>;

export type RefCallback<Instance> = (Instance | null) => void;
