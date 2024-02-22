import { useState } from "react"


export default function Card ({name, url, shuffle, setPoints, points, setBestScore, bestScore}) {
    const [clicked, setClicked] = useState(false)

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
        <div className="card" onClick={clickOnCard}>
            <img src={url}></img>
            <h2>{name.slice(0, 1).toUpperCase() + name.slice(1)}</h2>
        </div>
    )

}