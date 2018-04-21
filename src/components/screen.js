import './styles.sass'

import React from 'react'
import Keyboard from './keyboard'
import InputArea from './inputArea'
import PredictionBar from './predictionBar'

const Screen = () =>
  <div className='screen'>
    <InputArea />
    <PredictionBar />
    <Keyboard />
  </div>

export default Screen
