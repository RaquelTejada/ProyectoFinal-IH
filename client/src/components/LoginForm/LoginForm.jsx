import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../contexts/auth.context"
import { MessageContext } from './../../contexts/userMessage.context'
import authService from "../../services/auth.service"


const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }


    const navigate = useNavigate()
    const { storeToken, authenticateUser } = useContext(AuthContext)
    const { setShowToast, setToastMessage } = useContext(MessageContext)

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                const tokenFromServe = data.authToken
                storeToken(tokenFromServe)
                authenticateUser()
                setShowToast(true)
                setToastMessage('Usuario creado correctamente')
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const { password, email } = loginData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Acceder</Button>
            </div>

        </Form>
    )
}

export default LoginForm