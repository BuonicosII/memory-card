import Card from "./Card"
import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState({})

  async function fetchData () {
    try {
      const pokemonFetch = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
      const somePokemon = await pokemonFetch.json()
      setPokemon(somePokemon)
    } catch {
      console.log("Nope")
    }
  }

  useEffect(() => {
    fetchData(); 
  }, [])


  return (
    <>
      <Card name={pokemon.name}></Card>
    </>
  )
}

export default App
