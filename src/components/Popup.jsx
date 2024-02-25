function Popup ({ fn }) {
    return (
        <div className="popUpBackGround">
            <div className="popUp">
                <h2>Congratulations! You won!</h2>
                <button onClick={fn}>Play again</button>
            </div>
        </div>
    )
}

export { Popup }