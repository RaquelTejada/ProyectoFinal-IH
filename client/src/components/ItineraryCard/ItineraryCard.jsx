import './ItineraryCard.css'
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext } from 'react';

function ItineraryCard({ city, transport, _id, owner, imageUrl, title }) {

    const { user } = useContext(AuthContext)

    return (

        <Card className="mb-4 CoasterCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title><h3>{title}</h3></Card.Title>
                {
                    !owner || owner != user?._id
                        ?
                        <>
                            <Link to={`/detalles/${_id}`}>
                                <div className="d-grid">
                                    <Button variant="dark" size="sm">Ver detalles</Button>
                                </div>
                            </Link>
                        </>
                        :
                        <>
                            <div className="d-grid">
                                <ButtonGroup aria-label="Basic example">
                                    <Link to={`/detalles/${_id}`}>
                                        <Button variant="dark" size="sm">Ver detalles</Button>
                                    </Link>
                                    <Button variant="dark" size="sm" onClick={() => alert('ENLAZAR PÁGINA DE EDITAR')}>Editar</Button>
                                </ButtonGroup>
                            </div>

                        </>

                }


            </Card.Body>
        </Card>
    );
}

export default ItineraryCard;