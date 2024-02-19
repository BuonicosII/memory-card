import Card from "./Card"
import { useState, useEffect } from "react";
import { fetchData } from "./pokemonFns";

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    
    const pokemonArray = fetchData();

    setPokemonList(pokemonArray)
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
