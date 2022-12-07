import { Col, Row } from "react-bootstrap"
import ItineraryCard from "../ItineraryCard/ItineraryCard"
import { useContext } from 'react'
import { ItinerariesContext } from '../../contexts/itinerary.context'


const ItinerariesList = () => {

    const { itineraries } = useContext(ItinerariesContext)

    return (
        <Row>
            {itineraries.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >
                        <ItineraryCard {...elm} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default ItinerariesList