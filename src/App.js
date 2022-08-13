import "./style.css";
import Data from "./data"
import Info from "./Info"
import Navbar from "./Navbar"


export default function App() {
    const mountain= Info.map(travel => {
    })

    return(
        <div>
            <Navbar />
            {mountain}

            <Data
            key={travel.id} 
            travel={travel}/>
        </div>
    )
}