import './styles.sass'

import React from 'react'
import PropTypes from 'prop-types'

const PredictionBar = ({ predictedWords = [], onSelectPredictedWord }) => {
  const renderPredictedWords = () => predictedWords.map((word, index) =>
    <div
      key={index}
      onClick={() => onSelectPredictedWord(word)}
      className='prediction-bar-item'
    >
      {word}
    </div>
  )

  if (predictedWords.length === 0) return null

  return <div className='prediction-bar'>
    { renderPredictedWords() }
  </div>
}

export default PredictionBar

PredictionBar.propTypes = {
  predictedWords: PropTypes.array.isRequired,
  onSelectPredictedWord: PropTypes.func.isRequired
}
