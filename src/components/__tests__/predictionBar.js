import React from 'react'
import { shallow } from 'enzyme'

import PredictionBar from '../predictionBar'

describe('PredictionBar', () => {
  it('should not render prediction bar', () => {
    const wrapper = shallow(
      <PredictionBar
        predictedWords={[]}
        onSelectPredictedWord={jest.fn()}
      />)

    expect(wrapper.find('.prediction-bar-item')).toHaveLength(0)
  })

  it('should render 3 words in prediction bar', () => {
    const wrapper = shallow(
      <PredictionBar
        predictedWords={['test', 'render', 'jest']}
        onSelectPredictedWord={jest.fn()}
      />)

    expect(wrapper.find('.prediction-bar-item')).toHaveLength(3)
  })
})
