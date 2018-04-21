export const predictWords = (phrase, phraseLength) =>
  fetch(`http://localhost:8080/api/${phrase}?length=${phraseLength}`)
    .then(res => res.json())
