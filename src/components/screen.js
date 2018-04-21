import './styles.sass'

import React, { Component } from 'react'

import Keyboard from './keyboard'
import InputArea from './inputArea'
import PredictionBar from './predictionBar'
import { predictWords } from '../services/words'

class ScreenComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typedText: '',
      phraseLetters: '',
      phraseLength: 0,
      predictedWords: []
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.getPredictedWords = this.getPredictedWords.bind(this)
  }

  componentDidCatch(error) {
    console.log('error', error)
  }

  getPredictedWords(phrase, phraseLength) {
    predictWords(phrase, phraseLength)
      .then(data => 
        this.setState({ predictedWords: data.realWords })
      )
  }

  handleKeyPress(keyLetters) {
    this.setState({
      phraseLetters: this.state.phraseLetters + keyLetters,
      phraseLength: ++this.state.phraseLength
    })

    this.getPredictedWords(this.state.phraseLetters + keyLetters, ++this.state.phraseLength)
  }

  render() {
    return <div className='screen'>
      <InputArea input={this.state.phraseLetters}/>
      <PredictionBar predictedWords={this.state.predictedWords}/>
      <Keyboard onKeyPress={this.handleKeyPress} />
    </div>
  }
}

export default ScreenComponent
