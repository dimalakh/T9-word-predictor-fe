import './styles.sass'

import React from 'react'
import PropTypes from 'prop-types'

import Key from './key'

const Keyboard = ({ onKeyPress, onKeyUp, onSpacePress }) =>
  <div className='keyboard'>
    <Key symbols='1' onKeyPress={onKeyPress} onKeyUp={onKeyUp} />
    <Key symbols='2ABC' onKeyPress={onKeyPress} onKeyUp={onKeyUp} />
    <Key symbols='3DEF' onKeyPress={onKeyPress} onKeyUp={onKeyUp} />

    <Key symbols='4GHI' onKeyPress={onKeyPress} onKeyUp={onKeyUp} />
    <Key symbols='5JKL' onKeyPress={onKeyPress} onKeyUp={onKeyUp} />
    <Key symbols='6MNO' onKeyPress={onKeyPress} onKeyUp={onKeyUp} />

    <Key symbols='7PQRS' onKeyPress={onKeyPress} onKeyUp={onKeyUp} />
    <Key symbols='8TUV' onKeyPress={onKeyPress} onKeyUp={onKeyUp} />
    <Key symbols='9WXYZ' onKeyPress={onKeyPress} onKeyUp={onKeyUp} />

    <Key symbols='*' onKeyPress={onKeyPress} onKeyUp={onKeyUp} />
    <Key symbols='0' onKeyPress={onKeyPress} onKeyUp={onKeyUp} onSpacePress={onSpacePress} />
    <Key symbols='#' onKeyPress={onKeyPress} onKeyUp={onKeyUp} />
  </div>

export default Keyboard

Keyboard.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  onSpacePress: PropTypes.func
}
