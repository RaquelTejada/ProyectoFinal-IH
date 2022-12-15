import './ProfilePage.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import itineraryService from '../../services/itineraries.service'
import { useEffect } from 'react'
import { Row, Col, Card, Button, Container } from 'react-bootstrap'
import eventService from '../../services/events.service'
import { Link, useParams } from 'react-router-dom'


const ProfilePage = () => {

    const [itinerariesOwned, setItinerariesOwned] = useState()
    const [favItineraries, setFavItineraries] = useState()
    const [yourEvents, setYourEvents] = useState()

    const { user } = useContext(AuthContext)

    const { itinerary_id } = useParams()

    const filterItineraries = () => {

        itineraryService
            .getOwnedItineraries()
            .then(({ data }) => setItinerariesOwned(data))
            .catch(err => console.log(err))
    }

    const getFavs = () => {

        itineraryService
            .getFavsItineraries()
            .then(({ data }) => setFavItineraries(data))
            .catch(err => console.log(err))
    }

    const printEvent = () => {

        eventService
            .getJoinedEvents()
            .then(({ data }) => setYourEvents(data))
            .catch(console.log)

    }


    useEffect(() => {
        filterItineraries()
        getFavs()
        printEvent()
    }, [])

    return (
        <Container fluid className='profile-container'>

            <Row className='d-flex justify-content-space-around'>
                <Col md={{ span: 3 }}>
                    <h3 className='profile-info-text mt-4 d-flex text-align-left'>INFORMACIÓN PERSONAL</h3>

                    <img className='profile-img' src={user?.imageUrl}></img>
                    <h1 className='profile-info-text'>{user?.username}</h1 >
                    <h1 className='profile-info-text'>{user?.email}</h1 >
                </Col>

                <Col md={{ span: 3 }}>
                    <h3 className='profile-info-text mt-4 d-flex text-align-left'>ITINERARIOS</h3>
                    {
                        itinerariesOwned ? itinerariesOwned.map((myItineraries, idx) => {
                            return (
                                <Card className="mb-4" key={idx}>
                                    <p >{myItineraries.title}</p>
                                    <img src={myItineraries.images}></img>
                                </Card>
                            )
                        })
                            :
                            'No has creado ninguna ruta aún.'}
                </Col>

                <Col md={{ span: 3 }}>

                    <h3 className='profile-info-text mt-4 d-flex text-align-left'>FAVORITOS</h3>
                    {
                        favItineraries ? favItineraries.map((myFavItineraries, idx) => {
                            return (
                                <>
                                    <Card className="mb-4" key={idx}>
                                        <Link to={`/detalles/${itinerary_id}`}>
                                            <div>
                                                <Card.Title><h3>{myFavItineraries.title}</h3></Card.Title>
                                            </div>
                                        </Link>
                                        <img src={myFavItineraries.images}></img>
                                    </Card>
                                </>
                            )
                        })
                            :
                            'No tienes ningún favorito aún.'}
                </Col>

                <h3 className='profile-info-text mt-4 d-flex text-align-left'>EVENTOS</h3>
                {
                    yourEvents ? yourEvents.map((myEvents, idx) => {
                        return (
                            <Col md={{ span: 3 }}>
                                <Card className="mb-4" key={idx}>
                                    <p >{myEvents.title}</p>
                                </Card>
                            </Col>
                        )
                    })
                        :
                        'No te has unido a ningún evento aún.'}
            </Row>
        </Container>
    )
}

export default ProfilePage