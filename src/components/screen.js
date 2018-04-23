import './styles.sass'

import React, { Component } from 'react'

import Keyboard from './keyboard'
import InputArea from './inputArea'
import PredictionBar from './predictionBar'
import { predictWords } from '../services/words'

class ScreenComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      typedText: '',
      currentWord: '',
      currentSymbol: '',
      phraseLetters: '',
      phraseLength: 0,
      predictedWords: []
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.getPredictedWords = this.getPredictedWords.bind(this)
    this.saveToText = this.saveToText.bind(this)
  }

  getPredictedWords (phrase, phraseLength) {
    predictWords(phrase, phraseLength)
      .then(({ data }) =>
        this.setState({ predictedWords: data })
      )
  }

  handleKeyPress (currentSymbol = '') {
    this.setState({
      currentSymbol: currentSymbol
    })
  }

  handleKeyUp (keyLetters = '') {
    this.setState({
      currentWord: this.state.currentWord + this.state.currentSymbol,
      phraseLength: ++this.state.phraseLength,
      phraseLetters: this.state.phraseLetters + keyLetters,
      currentSymbol: ''
    })

    const phraseLetters = this.state.phraseLetters + keyLetters

    if (phraseLetters) {
      this.getPredictedWords(
        this.state.phraseLetters + keyLetters, this.state.phraseLength
      )
    }
  }

  saveToText (passedWord) {
    const textToSave = passedWord || this.state.currentWord

    this.setState({
      typedText: this.state.typedText + textToSave + ' ',
      currentWord: '',
      currentSymbol: '',
      phraseLength: 0,
      phraseLetters: '',
      predictedWords: []
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
      />
    </div>
  }
}

export default ScreenComponent
