const idArray = [25, 1, 32, 76, 150, 13, 89, 52, 66, 35, 5, 55]

async function fetchData () {

    const pokemonArray = await Promise.all(idArray.map(async (id) => {
        try {
            const pokemonFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            const somePokemon = await pokemonFetch.json()
      
            return {id: somePokemon.id, name: somePokemon.name, url: somePokemon.sprites.other["official-artwork"].front_default}
          } catch {
            console.log("Nope")
          }
    }))

    return pokemonArray

}

export { fetchData }