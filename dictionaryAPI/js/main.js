//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#define').innerText = data[0].meanings[0].definitions[0].definition
        document.querySelector('audio').src = data[0].phonetics[0].audio
        document.querySelector('#syn').innerText = data[0].meanings[0].synonyms.toString().split(',').join(', ')
        document.querySelector('#ant').innerText = data[0].meanings[0].antonyms.toString().split(',').join(', ')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

