import Card from "./Card"
import { useState, useEffect } from "react";
import { fetchData, randomNumbers } from "./pokemonFns";

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [points, setPoints] = useState(0);
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {

    (async () => {
      const pokemonArray = await fetchData(randomNumbers());

      setPokemonList(pokemonArray)
    })()
    

  }, [])

  function shuffleCards() {
    //implement Durstenfeld Shuffle
    for (let i = pokemonList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [pokemonList[i], pokemonList[j]] = [pokemonList[j], pokemonList[i]]
    }

    const shuffledArray = pokemonList.map(object => object)

    setPokemonList(shuffledArray)
  }


  return (
    <>
      <div id="scoreBoard">
        <h2>Score: {points}</h2>
        <h2>BestScore: {bestScore}</h2>
      </div>
      <div className="cardHolder">
        {pokemonList.map( (pokemon)  => {
          return  (
          <Card 
            key={pokemon.id} 
            name={pokemon.name} 
            url={pokemon.url}
            type={pokemon.mainType} 
            shuffle={shuffleCards}
            points={points} 
            setPoints={setPoints}
            bestScore={bestScore} 
            setBestScore={setBestScore}>
          </Card>
        )
        })}
      </div>
    </>

  )
}

export default App
