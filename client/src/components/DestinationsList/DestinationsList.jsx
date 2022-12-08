import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import DestinationCard from "../DestinationCard/DestinationCard"
import { ItinerariesContext } from '../../contexts/itinerary.context'

const DestinationsList = () => {

    const { itineraries } = useContext(ItinerariesContext)

    return (
        <Row>
            <h1></h1>
            {itineraries.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >
                        <DestinationCard {...elm} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default DestinationsList