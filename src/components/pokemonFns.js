
async function fetchData (array) {

    const pokemonArray = await Promise.all(array.map(async (id) => {
        try {
            const pokemonFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            const somePokemon = await pokemonFetch.json()
      
            return {id: somePokemon.id, name: somePokemon.name, url: somePokemon.sprites.other["official-artwork"].front_default, mainType: somePokemon.types[0].type.name}
          } catch {
            console.log("Nope")
          }
    }))

    return pokemonArray

}

function randomNumbers () {
  const numbers = []

  for (let i = 0; i < 12; i++) {
    let num = Math.floor(Math.random() * 151) + 1;

    while (numbers.includes(num)) {
      num = Math.floor(Math.random() * 151) + 1;
    }

    numbers.push(num)
  }

  return numbers

}

export { fetchData, randomNumbers }