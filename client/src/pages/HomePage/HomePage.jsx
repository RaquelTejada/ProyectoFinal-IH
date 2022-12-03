import { Container, Row, Col, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
    return (
        <Container className="Home">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h1>Itineraies App!</h1>
                    <hr />
                    <h3>Proyecto final Ironhack</h3>
                    {/* <Link to="/galeria">
                        <Button variant="dark">Ir a la galería</Button>
                    </Link> */}
                </Col>
            </Row>
        </Container>
    )
}
export default HomePage