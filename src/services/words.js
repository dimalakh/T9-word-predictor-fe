export const predictWords = (phraseCode) =>
  fetch(`https://t9-prediction.herokuapp.com/api/predictedWords/${phraseCode}/?list_length=10`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }

      return res.json()
    })
