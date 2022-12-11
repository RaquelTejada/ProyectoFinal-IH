import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import itinerariesService from "../../services/itineraries.service"
import { MessageContext } from './../../contexts/userMessage.context'
import uploadServices from "../../services/upload.service"
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng, } from 'react-places-autocomplete';
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import SelectSupplier from "../SelectSupplier/SelectSupplier"

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
        images: '',
        lat: 0,
        lng: 0

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
    const [errors, setErrors] = useState([])

    const handleFormSubmit = e => {
        e.preventDefault()

        itinerariesService
            .saveItinerary({ ...itineraryData, coordinates: itineryLocations })
            .then((response) => {
                const { _id: itinerary_id } = response.data
                setShowToast(true)
                setToastMessage('Ruta creada correctamente')
                // fireFinalActions()
                navigate(`/detalles/${itinerary_id}`)
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const [loadingImage, setLoadingImage] = useState(false)

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setItineraryData({ ...itineraryData, images: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const { city, transport, category, title, duration, pets, description, images, lat, lng } = itineraryData
    const [autocompleteCity, setAutocompleteCity] = useState('')
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })
    const handleSelect = async value => {
        const result = await geocodeByAddress(value)
        const latLng = await getLatLng(result[0])
        setAutocompleteCity(value)
        setCoordinates(latLng)
        setItineraryData({ ...itineraryData, ['city']: value })

    }
    const [itineryLocations, setItineraryLocations] = useState([])
    const handleItinerary = async value => {
        const result = await geocodeByAddress(value)
        const latLng = await getLatLng(result[0])
        setCoordinates(latLng)
        setItineraryLocations([value, latLng.lat, latLng.lng])
        console.log([latLng])
    }


    return (
        <Form onSubmit={handleFormSubmit}>
            <PlacesAutocomplete
                value={autocompleteCity}
                onChange={setAutocompleteCity}
            // onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>

                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Ciudad</Form.Label>
                            <input {...getInputProps({ placeholder: "Escriba la ciudad" })} className="form-control" />
                        </Form.Group>
                        <div>
                            {loading ? <div>...Cargando</div> : null}
                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#F5EBE0" : '#fff'
                                }
                                return <div {...getSuggestionItemProps(suggestion, { style })}>
                                    {suggestion.description}
                                </div>
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
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
            <PlacesAutocomplete
                value={itineryLocations}
                onChange={setItineraryLocations}
                onSelect={handleItinerary}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>

                        <Form.Group className="mb-3" controlId="name">
                            <Button onClick={handleItinerary} variant="dark" className='form-label'>Añadir paradas</Button>
                            <input {...getInputProps({ placeholder: "Escriba la parada" })} className="form-control" />
                        </Form.Group>
                        <div>
                            {loading ? <div>...Cargando</div> : null}
                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#F5EBE0" : '#fff'
                                }
                                return <div {...getSuggestionItemProps(suggestion, { style })}>
                                    {suggestion.description}
                                </div>
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>

            {errors.length ? <ErrorMessage>{errors.map(elm => <p key={elm}>{elm}</p>)}</ErrorMessage> : undefined}

            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Subiendo imagen...' : 'Crear ruta'}</Button>
            </div>
        </Form >
    )
}

export default NewItineraryForm