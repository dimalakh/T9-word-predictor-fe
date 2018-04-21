import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Key extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pressed: false
    }
    this.counter = 0
    this.title = this.props.symbols.substring(0, 1)
    this.subtitle = this.props.symbols.substring(1)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyPress () {
    const { symbols, onKeyPress, onSpacePress } = this.props

    this.setState({ pressed: true })
    onKeyPress(symbols[this.counter])

    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.counter += 1
        if (this.title === '0') {
          onSpacePress()
        } else {
          if (this.counter === symbols.length) {
            this.counter = 0
          }
          onKeyPress(symbols[this.counter])
        }
      }, 500)
    }
  }

  handleKeyUp () {
    this.setState({ pressed: false })
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
    if (this.title === '0' && this.counter === 1) {
      return
    }

    this.props.onKeyUp(this.subtitle)
    this.counter = 0
    this.intervalId = null
  }

  render () {
    return <div className='key' onMouseDown={this.handleKeyPress} onMouseUp={this.handleKeyUp}>
      <div className='key-content'>
        <div className='key-title'>{ this.title }</div>
        <div className='key-subtitle'>{ this.subtitle }</div>
      </div>
    </div>
  }
}

export default Key

Key.propTypes = {
  onKeyUp: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  onSpacePress: PropTypes.func,
  symbols: PropTypes.string.isRequired
}
