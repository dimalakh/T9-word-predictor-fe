import React from 'react'
import { shallow } from 'enzyme'
import PhoneKeyboard from '../PhoneKeyboard'

describe('screen', () => {
  const predictedWords = ['work', 'abc', 'tree']
  const wordsService = require('../../services/words')
  wordsService.predictWords = jest.fn()
  wordsService.predictWords.mockImplementation(() => Promise.resolve({ data: predictedWords }))

  it('should set 1 to currentSymbol', () => {
    const wrapper = shallow(<PhoneKeyboard />)
    wrapper.find('Keyboard').dive().find('Key').at(0).dive().simulate('mouseDown')

    expect(wrapper.state().currentSymbol).toBe('1')
  })

  it('should set 5 to currentWord and reset currentSymbol', () => {
    const wrapper = shallow(<PhoneKeyboard />)

    wrapper.find('Keyboard').dive().find('Key').at(4).dive().simulate('mouseDown')
    wrapper.find('Keyboard').dive().find('Key').at(4).dive().simulate('mouseUp')

    expect(wrapper.state().currentSymbol).toBe('')
    expect(wrapper.state().currentWord).toBe('5')
  })

  it('should set predicted word to typedText', () => {
    const wrapper = shallow(<PhoneKeyboard />)

    wrapper.setState({ predictedWords })
    wrapper.find('PredictionBar').dive().find('.prediction-bar-item').at(0).simulate('click')

    expect(wrapper.state().typedText).toBe('work ')
  })
})
