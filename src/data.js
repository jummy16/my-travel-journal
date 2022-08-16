
export default function Data(props) {

    return (

        <div className="data-card">

            <div className="card-img-wrapper">
                <img className="card-img" src={`${props.travel.imageUrl}`} alt="" />
            </div>

            <div className="card-info-wrapper">
                <h3 className="card-title">{props.travel.title}</h3>
                <p className="card-location">{props.travel.location}</p>
                <p className="card-text">{props.travel.text}</p>
                <p className="card-date">{props.travel.startDate}</p>
                <p className="card-describe">{props.travel.description}</p>
                <img className="card-img1" src={`${props.travel.googleMapsUrl}`} alt="" />
            </div>

        </div>

    )
}