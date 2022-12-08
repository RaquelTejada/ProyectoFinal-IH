import './DestinationCard.css'
import { Button, ButtonGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from '../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext } from 'react';

function DestinationCard({ city, transport, _id, owner, images, title }) {

    const { user } = useContext(AuthContext)

    return (

        <Card className="mb-4 DestinationCard">
            <Card.Img variant="top" src={images} />
            <Card.Body>
                <Card.Title><h3>{city}</h3></Card.Title>
                <Card.Text>
                    <h4>{title}</h4>
                    <h5>{transport}</h5>
                </Card.Text>

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

export default DestinationCard;