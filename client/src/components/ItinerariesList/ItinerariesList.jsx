import { Col, Row } from "react-bootstrap"
import ItineraryCard from "../ItineraryCard/ItineraryCard"

const ItinerariesList = ({ itineraries }) => {

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