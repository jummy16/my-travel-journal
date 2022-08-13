export default function App(props) {
    return(
        <div >
        <h3 className="fuji--title">{props.travel.title}</h3>
        <p className="fuji--location">{props.travel.location}</p>
        <img className="fuji--img1" src={`${props.travel.googleMapsUrl}`}alt=""/>
        <p className="fuji--text">{props.travel.text}</p>
        <p className="fuji--date">{props.travel.startDate}</p>
        <p className="fuji--describe">{props.travel.description}</p>
        <img className="fuji" src={`${props.travel.imageUrl}`}alt="" />
    
        <h3 className="sydney--title">{props.travel.title}</h3>
        <p className="sydney--location">{props.travel.location}</p>
        <img className="sydney--img1" src={`${props.travel.googleMapsUrl}`}alt=""/>
        <p className="sydney--text">{props.travel.text}</p>
        <p className="sydney--date">{props.travel.startDate}</p>
        <p className="sydney--describe">{props.travel.description}</p>
        <img className="sydney" src={`${props.travel.imageUrl}`}alt="" />

        <h3 className="norway--title">{props.travel.title}</h3>
        <p className="norway--location">{props.travel.location}</p>
        <img className="norway--img1" src={`${props.travel.googleMapsUrl}`}alt=""/>
        <p className="norway--text">{props.travel.text}</p>
        <p className="norway--date">{props.travel.startDate}</p>
        <p className="norway--describe">{props.travel.description}</p>
        <img className="norway" src={`${props.travel.imageUrl}`}alt="" />
        </div>

    )
}