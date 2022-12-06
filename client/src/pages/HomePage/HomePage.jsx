import { Container, Row, Col, Button } from 'react-bootstrap'
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
                    <Col >
                        <Card className="bg-gray card-size">
                            <Card.Img src={Madrid} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='card-title'>MADRID</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Row>
                        <Container fluid className="margin-card">

                        </Container>
                    </Row>
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
                            <Card.Img src={Madrid} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='card-title'>MADRID</Card.Title>
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
                </Row>
            </Container>
        </div>
    )
}
export default HomePage

            // <Container className="Home">
            //     <Row>
            //         <Col md={{ span: 8, offset: 2 }}>
            //             <h1>Itineraies App!</h1>
            //             <hr />
            //             <h3>Proyecto final Ironhack</h3>
            //             {/* <Link to="/galeria">
            //             <Button variant="dark">Ir a la galería</Button>
            //         </Link> */}
            //         </Col>
            //     </Row>
            // </Container>