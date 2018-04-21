import './styles.sass'

import React from 'react'

const PredictionBar = ({ predictedWords = [] }) => {
  const renderPredictedWords = () => predictedWords.map((word, index) => 
    <div className='prediction-bar-item' key={index}>{word}</div>
  )
  
  if (predictedWords.length === 0) return null

  return <div className='prediction-bar'>
    { renderPredictedWords() }
  </div>
}

export default PredictionBar