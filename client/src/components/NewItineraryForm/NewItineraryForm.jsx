import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import itinerariesService from "../../services/itineraries.service"

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

    const handleInputChange = e => {
        const { name, value } = e.target
        setItineraryData({ ...itineraryData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        itinerariesService
            .saveItinerary(itineraryData)
            .then(() => {
                fireFinalActions()
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

            {/* <Form.Label>Medio de transporte</Form.Label>
            <Form.Select className="mb-3" aria-label="Default select example">
                <Form.Control type="text" value={transport} onChange={handleInputChange} name="transport" />
                <option>Andando</option>
                <option>En bici</option>
                <option>En coche</option>
            </Form.Select> */}

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Categoría</Form.Label>
                <Form.Control type="text" value={category} onChange={handleInputChange} name="category" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Nombre de la ruta</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Duración</Form.Label>
                <Form.Control type="text" value={duration} onChange={handleInputChange} name="duration" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>¿Se puede hacer con animales?</Form.Label>
                <Form.Control type="radio" value={pets} onChange={handleInputChange} name="pets" />
            </Form.Group>

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