import './ProfilePage.css'
import { useContext, useReducer, useState } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import itineraryService from '../../services/itineraries.service'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'



const ProfilePage = () => {

    const [itinerariesOwned, setItinerariesOwned] = useState()
    const [favItineraries, setFavItineraries] = useState()
    const { user } = useContext(AuthContext)


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


    useEffect(() => {
        filterItineraries()
        getFavs()
    }, [])

    console.log(itinerariesOwned)
    return (
        <>
            <h1>{user.username}</h1 >
            <h1>{user.email}</h1 >
            <img src={user.imageUrl}></img>
            <Row>
                {
                    itinerariesOwned ? itinerariesOwned.map((myItineraries, idx) => {
                        return (
                            <Col md={{ span: 4 }}>
                                <Card className="mb-4" key={idx}>
                                    <p >{myItineraries.title}</p>
                                </Card>
                            </Col>
                        )
                    })
                        :
                        'No has creado ninguna ruta aún.'}
            </Row>
        </>
    )
}

export default ProfilePage