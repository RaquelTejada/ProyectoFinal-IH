import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './ItinerariesType.css'
import { useEffect, useState, useContext } from 'react'
import { ItinerariesContext } from '../../contexts/itinerary.context'
import ItineraryCard from '../ItineraryCard/ItineraryCard'
import { Card } from 'react-bootstrap'
import ItinerariesList from '../ItinerariesList/ItinerariesList'

const ItineraryType = () => {

    const [itinerarySpecs, setItinerarySpecs] = useState({
        city: '',
        category: ''
    })

    const { loadItineraries, resetItineraries } = useContext(ItinerariesContext)

    const { hostcity } = useParams()

    useEffect(() => {
        resetItineraries()
        setItinerarySpecs({ city: hostcity })
    }, [])

    const handleTypeChange = e => {
        const { name } = e.target
        setItinerarySpecs({ ...itinerarySpecs, category: name })
        loadItineraries(itinerarySpecs.city, name)
    }

    const { category, city } = itinerarySpecs

    return (
        <div className='main-div-home-page'>

            <Container>

                <Button name="Arte" onClick={handleTypeChange}>Arte</Button>
                <Button name="Gastronomia" onClick={handleTypeChange}>Gastronomía</Button>
                <Button name="Naturaleza" onClick={handleTypeChange}>Naturaleza</Button>
                <Button name="Ocio nocturno" onClick={handleTypeChange}>Ocio nocturno</Button>
                <Button name="Turismo rural" onClick={handleTypeChange}>Turismo rural</Button>
                <hr />

                <h1>Resultados de itinerarios de {category} en {city}</h1>

                <ItinerariesList />

            </Container>
        </div>
    )
}
export default ItineraryType