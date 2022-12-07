import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ItinerariesType.css'
import { Card } from 'react-bootstrap'
import Roma from '../../images/Roma.jpeg'

const ItineraryType = () => {
    return (
        <div className='main-div-home-page'>
            <Container fluid className="margin-card">
                <Row>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Link to="/itinerario/Madrid/Arte">
                                <Card.Img src={Roma} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className='card-title'>Arte</Card.Title>
                                </Card.ImgOverlay>
                            </Link>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Card.Img src={Roma} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='card-title'>Gastronomia</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Card.Img src={Roma} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='card-title'>Naturaleza</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Row>
                        <Container fluid className="margin-card">

                        </Container>
                    </Row>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Card.Img src={Roma} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='card-title'>Ocio Nocturno</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Card.Img src={Roma} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='card-title'>Turismo Rural</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
export default ItineraryType