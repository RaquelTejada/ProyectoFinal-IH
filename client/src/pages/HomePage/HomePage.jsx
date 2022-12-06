import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HomePage.css'
import { Card } from 'react-bootstrap'
import Madrid from '../../images/Madrid-ABC.jpg'
import Roma from '../../images/Roma.jpg'

const HomePage = () => {
    return (
        <div className='main-div-home-page'>
            <Container fluid className="margin-card">
                <Row>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Link to="/itinerario/Madrid">
                                <Card.Img src={Madrid} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className='card-title'>MADRID</Card.Title>
                                </Card.ImgOverlay>
                            </Link>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Card.Img src={Roma} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='card-title'>ROMA</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Card.Img src={Madrid} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='card-title'>AMSTERDAM</Card.Title>
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
                                <Card.Title className='card-title'>NUEVA YORK</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Card.Img src={Madrid} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='card-title'>MADRID</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="bg-gray card-size">
                            <Card.Img src={Roma} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='card-title'>MADRID</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
export default HomePage