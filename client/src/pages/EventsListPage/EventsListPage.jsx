import { useState } from "react"
import { useEffect } from "react"
import eventService from "../../services/events.service"

const EventsListPage = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {

        eventService
            .getEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))

    }, [])

    return (

        events.map(elm => <p>{elm.title}</p>)
    )
}

export default EventsListPage