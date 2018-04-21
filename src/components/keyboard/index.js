import './styles.sass'
import React from 'react'

const Key = ({ title, subtitle }) => 
  <div className='key'>
    <div className='key-content'>
      <div className='key-title'>{ title }</div>
      <div className='key-subtitle'>{ subtitle }</div>
    </div>
  </div>
const Keyboard = () => 
  <div className='keyboard'>
    <Key title='1' subtitle=''/>
    <Key title='2' subtitle='ABC' />
    <Key title='3' subtitle='DEF' />

    <Key title='4' subtitle='GHI'/>
    <Key title='5' subtitle='JKL'/>
    <Key title='6' subtitle='MNO'/>

    <Key title='7' subtitle='PQRS' />
    <Key title='8' subtitle='TUV'/>
    <Key title='9' subtitle='WXYZ'/>
  </div>

export default Keyboard