export const predictWords = (phraseLetters, phraseLength) =>
  fetch(`https://t9-prediction.herokuapp.com/api/predictedWords/${phraseLetters}/${phraseLength}?list_length=10`)
    .then(res => res.json())
