import './styles.sass'

import React, { Component } from 'react'

import Keyboard from './keyboard'
import InputArea from './inputArea'
import PredictionBar from './predictionBar'
import { predictWords } from '../services/words'

const initialState = {
  currentWord: '',
  currentSymbol: '',
  phraseCode: '',
  predictedWords: []
}
class ScreenComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      typedText: '',
      ...initialState
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.getPredictedWords = this.getPredictedWords.bind(this)
    this.saveToText = this.saveToText.bind(this)
    this.removeLastSymbol = this.removeLastSymbol.bind(this)
  }

  getPredictedWords (phraseCode) {
    predictWords(phraseCode)
      .then(({ data }) =>
        this.setState({ predictedWords: data })
      )
      .catch(err => {
        this.setState({ error: err.message })
      })
  }

  handleKeyPress (currentSymbol = '') {
    this.setState({
      currentSymbol: currentSymbol
    })
  }

  handleKeyUp (keyNumber = '') {
    this.setState({
      currentWord: this.state.currentWord + this.state.currentSymbol,
      phraseCode: this.state.phraseCode + keyNumber,
      currentSymbol: ''
    })

    const phraseCode = this.state.phraseCode + keyNumber

    if (phraseCode) {
      const numberPhraseCode = phraseCode.replace(/\D/g, '')
      console.log(numberPhraseCode)
      this.getPredictedWords(numberPhraseCode)
    }
  }

  saveToText (passedWord) {
    const textToSave = passedWord || this.state.currentWord

    this.setState({
      typedText: this.state.typedText + textToSave + ' ',
      ...initialState
    })
  }

  removeLastSymbol () {
    const text = this.state.typedText + this.state.currentWord + this.state.currentSymbol
    const deleteStep = this.state.currentSymbol ? 2 : 1

    this.setState({
      typedText: text.substring(0, text.length - deleteStep),
      ...initialState
    })
  }

  render () {
    const textToDisplay = this.state.typedText + this.state.currentWord + this.state.currentSymbol

    return <div className='screen'>
      <InputArea input={textToDisplay} />
      <PredictionBar
        predictedWords={this.state.predictedWords}
        onSelectPredictedWord={this.saveToText}
      />
      <Keyboard
        onKeyPress={this.handleKeyPress}
        onKeyUp={this.handleKeyUp}
        onSpacePress={this.saveToText}
        activeSymbol={this.state.currentSymbol}
        removeLastSymbol={this.removeLastSymbol}
      />
    </div>
  }
}

export default ScreenComponent
