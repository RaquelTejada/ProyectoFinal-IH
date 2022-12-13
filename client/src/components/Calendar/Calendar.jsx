import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import { Modal, Button } from "react-bootstrap";


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


const EventCalendar = ({ filterEvent, events }) => {

    useEffect(() => {
        filterEvent()

    }, [])

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
        filterEvent()
    }


    return (
        <div className="App">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px" }}
                onDoubleClickEvent={openModal}
            />
            < Modal show={showModal} onHide={closeModal} >
                <Modal.Header closeButton>
                    <Modal.Title className="calendar-event-title">Datos de tu evento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2 className="calendar-event-title">{events[0].title}</h2>
                    <Button onClick={openModal} variant="dark" size="sm">Unirse evento</Button>
                    {/* <EventJoinModal fireFinalActions={fireFinalActions} /> */}
                </Modal.Body>
            </Modal >
        </div>
    );
}

export default EventCalendar;
