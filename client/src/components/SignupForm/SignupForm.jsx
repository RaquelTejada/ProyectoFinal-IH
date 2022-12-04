import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"

// import { useNavigate } from 'react-router-dom'

// import { MessageContext } from './../../contexts/userMessage.context'


const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        ImageUrl: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    // const { setShowToast, setToastMessage } = useContext(MessageContext)

    // const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .signup(signupData)
            .then(res => console.log('EL USUARIO ESTÁ CREADO', signupData))
            // setShowToast(true)
            // setToastMessage('Usuario creado correctamente')
            // navigate('/')

            .catch(err => console.log(err))
    }



    const { username, password, email, ImageUrl } = signupData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ImageUrl">
                <Form.Label>Foto de perfil</Form.Label>
                <Form.Control type="file" value={ImageUrl} onChange={handleInputChange} name="ImageUrl" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Registrarme</Button>
            </div>

        </Form>
    )
}

export default SignupForm