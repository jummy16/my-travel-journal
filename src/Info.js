import disney from "./assets/disney.jpg";
import fuji from "./assets/fuji.jpg";
import robson from "./assets/robson.jpg";


/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        id: "1",
        title: "Mount Fuji",
        location: "Japan",
        text: <a href="#">view on Google Map</a>,
        startDate: "12 Jan, 2021 - 24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: fuji
    },

    {
        id: "2",
        title: "Mount Robson",
        location: "British",
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        text: <a href="#">view on Google Map</a>,
        startDate: "27 May, 2021 - 8 Jun, 2021",
        description: "Designated as a part of the Canadian Rocky Mountains World Heritage Site by UNESCO in 1990, Mount Robson provides everything from developed, vehicle-accessible camping to remote valleys that seldom see a human footprint. Mount Robson Provincial Park also protects the headwaters of the Fraser River.",
        imageUrl: robson
    },
    {
        id: "3",
        title: "Disneyland",
        location: " California",
        text: <a href="#">view on Google Map</a>,
        startDate: "01 Oct, 2021 - 18 Nov, 2021",
        description: "These parks located all over the world make it easier for most people to experience the magic of Disney. This includes Disneyland in California, Walt Disney World in Orlando, Hong Kong Disneyland, Shanghai Disneyland, Disneyland Paris, Tokyo Disneyland, and the Disney Sea in Japan.",
        imageUrl: disney
    }
]