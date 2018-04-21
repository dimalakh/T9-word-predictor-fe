import './styles.sass'

import React from 'react'
import PropTypes from 'prop-types'

const InputArea = ({ input = 'Text' }) =>
  <div className='input-area'>
    { input }
  </div>

export default InputArea

InputArea.propTypes = {
  input: PropTypes.string.isRequired
}
