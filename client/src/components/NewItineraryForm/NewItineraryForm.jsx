import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import itinerariesService from "../../services/itineraries.service"
import { MessageContext } from './../../contexts/userMessage.context'


import { useNavigate } from 'react-router-dom'

const NewItineraryForm = ({ fireFinalActions }) => {

    const [itineraryData, setItineraryData] = useState({
        city: '',
        transport: '',
        category: '',
        title: '',
        duration: '',
        pets: false,
        description: '',
        images: ''
    })

    const { setShowToast, setToastMessage } = useContext(MessageContext)

    const handleInputChange = e => {
        const { name, value } = e.target
        console.log(name, value)
        setItineraryData({ ...itineraryData, [name]: value })
    }

    const handleCheckboxChange = e => {
        console.log(e.target.checked)
        const { name, checked } = e.target
        setItineraryData({ ...itineraryData, [name]: checked })
    }

    const navigate = useNavigate()

    const handleFormSubmit = e => {
        e.preventDefault()

        itinerariesService
            .saveItinerary(itineraryData)
            .then((response) => {
                const { _id: itinerary_id } = response.data
                setShowToast(true)
                setToastMessage('Ruta creada correctamente')
                // fireFinalActions()
                navigate(`/detalles/${itinerary_id}`)
            })
            .catch(err => console.error(err))
    }

    const { city, transport, category, title, duration, pets, description, images } = itineraryData

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" value={city} onChange={handleInputChange} name="city" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Medio de transporte</Form.Label>
                <Form.Select className="mb-3" aria-label="transport" value={transport} onChange={handleInputChange} name="transport">
                    <option>Elige el medio de transporte...</option>
                    <option>Andando</option>
                    <option>En bici</option>
                    <option>En coche</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Categoría</Form.Label>
                <Form.Select className="mb-3" aria-label="category" value={category} onChange={handleInputChange} name="category">
                    <option>Elige la categoría de tu ruta...</option>
                    <option>Arte</option>
                    <option>Gastronomía</option>
                    <option>Naturaleza</option>
                    <option>Ocio nocturno</option>
                    <option>Playas</option>
                    <option>Turismo rural</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Nombre de la ruta</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Duración</Form.Label>
                <Form.Control type="text" value={duration} onChange={handleInputChange} name="duration" />
            </Form.Group>


            <div key={`default-checkbox`} className="mb-3" value={pets}>
                <Form.Check
                    onChange={handleCheckboxChange}
                    type={'checkbox'}
                    id={`default-checkbox`}
                    label={`Se puede realizar con animales`}
                    name='pets'
                />

            </div>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text area" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Imágenes</Form.Label>
                <Form.Control type="file" multiple value={images} onChange={handleInputChange} name="images" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Crear ruta</Button>
            </div>
        </Form>
    )
}

export default NewItineraryForm