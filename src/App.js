import Data from "./data"
import Info from "./Info"
import Navbar from "./Navbar"
import "./style.css";


export default function App() {
    const mountain = Info.map(travel => {
        return (
            <Data
                key={travel.id}
                travel={travel}
            //     title={travel.title}
            //   location={travel.location}
            //   text={travel.text}
            //   startDate={travel.startDate}
            //   description={travel.description}
            //   imageUrl={travel.imageUrl}
            //   googleMapsUrl={travel.googleMapsUrl}
            />
        )
    })

    return (
        <div>
            <Navbar />

            {mountain}
        </div>
    )

}