
export default function Card ({name, url, fn}) {

    return (
        <div className="card" onClick={fn}>
            <img src={url}></img>
            <h2>{name.slice(0, 1).toUpperCase() + name.slice(1)}</h2>
        </div>
    )

}