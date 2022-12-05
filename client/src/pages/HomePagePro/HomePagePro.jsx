import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HomePagePro.css'

const HomePagePro = () => {
    return (
        <Container className="Home">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h1>Itineraies App! Versión Pro</h1>
                    <hr />
                    <h3>Proyecto final Ironhack</h3>
                    <Link to="/">
                        <Button variant="dark">Crea tu propia ruta</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}
export default HomePagePro