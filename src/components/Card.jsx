
export default function Card ({name, url}) {

    return (
        <div>
            <img src={url}></img>
            <h2>{name}</h2>
        </div>
    )

}