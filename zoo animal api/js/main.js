//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://zoo-animal-api.herokuapp.com/animals/rand'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.image_link
        document.querySelector('#name').innerText = data.name
        document.querySelector('#habitat').innerText = data.habitat
        document.querySelector('#diet').innerText = data.diet
        let statement = `The ${data.name} is found in ${data.geo_range}. It makes its home in the ${data.habitat} habitat. The ${data.name} eats a diet consisting of ${data.diet}.`
        document.querySelector('#statement').innerText = statement
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

