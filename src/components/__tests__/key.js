import React from 'react'
import { shallow } from 'enzyme'

import KeyButton from '../keyboard/key'

describe('KeyButton', () => {
  it('should render active button on mouseDown event', () => {
    const wrapper = shallow(
      <KeyButton
        onKeyPress={jest.fn()}
        onKeyUp={jest.fn()}
        symbols='1ABC'
      />)

    wrapper.simulate('mouseDown')
    expect(wrapper.find('.key-active')).toHaveLength(1)
  })

  it('should render not-active button on mouseUp event', () => {
    const wrapper = shallow(
      <KeyButton
        onKeyPress={jest.fn()}
        onKeyUp={jest.fn()}
        symbols='1ABC'
      />)

    wrapper.simulate('mouseDown')
    wrapper.simulate('mouseUp')
    expect(wrapper.find('.key')).toHaveLength(1)
  })

  it('should render key button with title and subtitle fields', () => {
    const wrapper = shallow(
      <KeyButton
        onKeyPress={jest.fn()}
        onKeyUp={jest.fn()}
        symbols='1ABC'
      />)

    expect(wrapper.find('.key-title').text()).toBe('1')
    expect(wrapper.find('.key-subtitle').text()).toBe('ABC')
  })

  it('should render key button without any fields, if symbols is empty string', () => {
    const wrapper = shallow(
      <KeyButton
        onKeyPress={jest.fn()}
        onKeyUp={jest.fn()}
        symbols=''
      />)
    expect(wrapper.find('.key-title')).toHaveLength(0)
    expect(wrapper.find('.key-subtitle')).toHaveLength(0)
  })
})
