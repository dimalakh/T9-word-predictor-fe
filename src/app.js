import './styles/app.sass'

import React from 'react'
import { render } from 'react-dom'

import PhoneKeyboard from './components/screen'

render(
  <PhoneKeyboard />,
  document.querySelector('#root')
)
