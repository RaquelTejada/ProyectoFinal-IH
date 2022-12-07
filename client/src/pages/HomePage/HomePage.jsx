import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HomePage.css'
import { Card } from 'react-bootstrap'
import Roma from '../../images/Roma.jpeg'

const HomePage = () => {

    return (
        <div className='main-div-home-page'>
            <Container fluid className="margin-card">

                <h1 className='home-page-title'>Empieza tu viaje con Liit</h1>

                <Row>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Link to="/itinerario/Madrid">
                                <Card.Img src={Roma} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className='card-title'>MADRID</Card.Title>
                                </Card.ImgOverlay>
                            </Link>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Link to="/itinerario/Roma">
                                <Card.Img src={Roma} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className='card-title'>ROMA</Card.Title>
                                </Card.ImgOverlay>
                            </Link>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Link to="/itinerario/Amsterdam">
                                <Card.Img src={Roma} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className='card-title'>AMSTERDAM</Card.Title>
                                </Card.ImgOverlay>
                            </Link>
                        </Card>
                    </Col>
                    <Row>
                        <Container fluid className="margin-card">

                        </Container>
                    </Row>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Link to="/itinerario/NuevaYork">
                                <Card.Img src={Roma} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className='card-title'>NUEVA YORK</Card.Title>
                                </Card.ImgOverlay>
                            </Link>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Link to="/itinerario/París">
                                <Card.Img src={Roma} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className='card-title'>PARíS</Card.Title>
                                </Card.ImgOverlay>
                            </Link>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Link to="/itinerario/Londres">
                                <Card.Img src={Roma} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className='card-title'>LONDRES</Card.Title>
                                </Card.ImgOverlay>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
export default HomePage