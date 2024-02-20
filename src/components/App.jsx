import Card from "./Card"
import { useState, useEffect } from "react";
import { fetchData } from "./pokemonFns";

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {

    (async () => {
      const pokemonArray = await fetchData();

      setPokemonList(pokemonArray)
    })()
    

  }, [])


  return (
    <>
      {pokemonList.map( (pokemon)  => {
        return  (
        <Card key={pokemon.id} name={pokemon.name} url={pokemon.url}></Card>
      )
      })}
    </>
  )
}

export default App
