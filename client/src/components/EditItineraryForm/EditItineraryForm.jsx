import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import uploadServices from "../../services/upload.service"

const EditItineraryForm = ({ itinerary, setItinerary, handleFormSubmit }) => {
    console.log(itinerary)
    const handleInputChange = e => {
        const { name, value } = e.target
        console.log(name, value)
        setItinerary({ ...itinerary, [name]: value })
    }

    const handleCheckboxChange = e => {
        console.log(e.target.checked)
        const { name, checked } = e.target
        setItinerary({ ...itinerary, [name]: checked })
    }

    const [loadingImage, setLoadingImage] = useState(false)

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setItinerary({ ...itinerary, images: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }

    const { city, transport, category, title, duration, pets, description, images } = itinerary

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
                    <option>Gastronomia</option>
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
                <Form.Control type="file" multiple onChange={handleFileUpload} />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Subiendo imagen...' : 'Crear ruta'}</Button>
            </div>

        </Form>
    )
}

export default EditItineraryForm