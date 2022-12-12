import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import eventService from './../../services/events.service'

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

// const events = [
//     {
//         title: "Big Meeting",
//         allDay: true,
//         start: new Date(2022, 6, 0),
//         end: new Date(2022, 6, 0),
//     },
// ];

const EventCalendar = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {

        eventService
            .getEvents()
            .then(data => {
                data = data.data.map(event => {
                    return {
                        title: event.title,
                        start: new Date(event.date),
                        end: new Date(event.date),
                        allDay: true
                    }
                })
                setEvents(data)
            })
    }, [])


    return (
        <div className="App">
            <h1>Eventos</h1>
            <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default EventCalendar;
