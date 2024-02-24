import { useState } from "react"


export default function Card ({name, url, shuffle, type, setPoints, points, setBestScore, bestScore}) {
    const [clicked, setClicked] = useState(false)
    let color 

    switch (type) {
        case "normal":
            color = "#A8A878"
            break;
        
        case "fighting":
            color = "#C03028"
            break;

        case "flying":
            color = "#A890F0"
            break;

        case "poison":
            color = "#A040A0"
            break;

        case "ground":
            color = "#E0C068"
            break;

        case "rock":
            color = "#B8A038"
            break;
        
        case "bug":
            color = "#A8B820"
            break;        
            
        case "ghost":
            color = "#705898"
            break;        
            
        case "steel":
            color = "#B8B8D0"
            break;        
            
        case "fire":
            color = "#F08030"
            break;
        
        case "water":
            color = "#6890F0"
            break;

        case "grass": 
            color = "#78C850"
            break;
        
        case "electric":
            color = "#F8D030"
            break;
        
        case "psychic":
            color = "#F85888"
            break;

        case "ice":
            color = "#98D8D8"
            break;

        case "dragon": 
            color = "#7038F8"
            break;
        
        case "dark": 
            color = "#705848"
            break;

        default:
            color = "#EE99AC"
            break;
    }

    if (points === 0 && clicked === true) {
        setClicked(false)
    }

    


    function clickOnCard () {
        if (clicked === true) {
            if (points > bestScore) {
                setBestScore(points)
            }
            shuffle()
            setPoints(0)
        } else {
            setPoints(points + 1)
            setClicked(true)
            shuffle();    
        }

    }

    return (
        <div className="card" onClick={clickOnCard} style={{backgroundImage: "linear-gradient(135deg, rgba(255,255,255,1) 0%, " +  color + " 35%, rgba(255,255,255,1) 100%)"}}>
            <h2>{name.slice(0, 1).toUpperCase() + name.slice(1)}</h2>
            <div>
                <img src={url}></img>
            </div>

        </div>
    )

}