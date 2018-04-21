import './styles/app.sass'

import React from 'react';
import { render } from 'react-dom';

import Screen from './components/screen'

render(
  <Screen />,
  document.querySelector('#root')
);