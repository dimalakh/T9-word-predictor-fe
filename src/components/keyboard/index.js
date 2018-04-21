import './styles.sass'
import React from 'react'

const Key = ({ title, subtitle, onKeyPress }) =>
  <div className='key' onClick={() => onKeyPress(subtitle)}>
    <div className='key-content'>
      <div className='key-title'>{ title }</div>
      <div className='key-subtitle'>{ subtitle }</div>
    </div>
  </div>

const Keyboard = ({ onKeyPress }) => 
  <div className='keyboard'>
    <Key title='1' subtitle='' onKeyPress={onKeyPress} />
    <Key title='2' subtitle='ABC' onKeyPress={onKeyPress} />
    <Key title='3' subtitle='DEF' onKeyPress={onKeyPress} />

    <Key title='4' subtitle='GHI' onKeyPress={onKeyPress} />
    <Key title='5' subtitle='JKL' onKeyPress={onKeyPress} />
    <Key title='6' subtitle='MNO' onKeyPress={onKeyPress} />

    <Key title='7' subtitle='PQRS' onKeyPress={onKeyPress} />
    <Key title='8' subtitle='TUV' onKeyPress={onKeyPress} />
    <Key title='9' subtitle='WXYZ' onKeyPress={onKeyPress} />

    <Key title='*' subtitle='' onKeyPress={onKeyPress} />
    <Key title='0' subtitle=' ' onKeyPress={onKeyPress} />
    <Key title='#' subtitle='' onKeyPress={onKeyPress} />
  </div>

export default Keyboard
