

export default function Card({ info }) {
    return(
        <div className="card">
            <img className="card-image" src={info.image} alt={info.title} />
            <h3 className="card-title">{info.name}</h3>
            <p className="card-description">{info.street}</p>
            <a href={info.website_url} target="_blank"><button>Go To Website</button></a>
        </div>
    )
}