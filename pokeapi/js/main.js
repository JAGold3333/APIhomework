//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.sprites.front_default
        if(data.types.length < 2){
          const info = `This pokemon is ${data.name.charAt(0).toUpperCase()+data.name.slice(1)}. It has the type ${data.types[0].type.name}. ${data.name.charAt(0).toUpperCase()+data.name.slice(1)} starts with the abilities ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}.`
          document.querySelector('#info').innerText = info
        }else{
          const info = `This pokemon is ${data.name.charAt(0).toUpperCase()+data.name.slice(1)}. It has the types ${data.types[0].type.name} and ${data.types[1].type.name}. ${data.name.charAt(0).toUpperCase()+data.name.slice(1)} starts with the abilities ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}.`
          document.querySelector('#info').innerText = info 
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

