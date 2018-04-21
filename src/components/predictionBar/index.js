import './styles.sass'

import React from 'react'

const PredictionBar = ({ predictedWords = ['text', 'dog'] }) => {
  const renderPredictedWords = () => predictedWords.map((word, index) => 
    <div className='prediction-bar-item' key={index}>{word}</div>
  )

  return <div className='prediction-bar'>
    { renderPredictedWords() }
  </div>
}

export default PredictionBar