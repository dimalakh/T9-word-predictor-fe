import './styles.sass'
import React from 'react'

const InputArea = ({ input = 'Text' }) => 
  <div className='input-area'>
    { input }
  </div>

export default InputArea