import './Navigation.css'
import { Nav, Navbar, NavDropdown, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'

const Navigation = () => {

    const { user, logoutUser, authenticateUser } = useContext(AuthContext)

    return (
        <Navbar className='color-nav' expand="lg">
            <Link to="/">
                <img className='logo-img' src="https://res.cloudinary.com/drcjyzigg/image/upload/v1670495264/Proyecto%20Final%20IH/LiitLogo.png"></img>
            </Link>
            <Link to="/">
                <Navbar.Brand className='brand-name' as='div'>Liit</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/destinos">
                        <Nav.Link as='div'>Todos los destinos</Nav.Link>
                    </Link>
                    <Link to="/lista-eventos">
                        <Nav.Link as='div'>Eventos</Nav.Link>
                    </Link>
                    <Nav.Link as="div">¡Hola, {!user ? 'invitad@' : user.username}!</Nav.Link>
                </Nav>
                <Form className="d-flex me-5">
                    <NavDropdown title="Acceso" align="end">
                        <Link to="/">
                            {user && <Nav.Link as='div' onClick={authenticateUser}>Perfil</Nav.Link>}
                        </Link>
                        <Link to="/registro">
                            <Nav.Link as='div'>Registro</Nav.Link>
                        </Link>
                        <Link to="/iniciar-sesion">
                            <Nav.Link as='div'>Iniciar sesión</Nav.Link>
                        </Link>
                        <NavDropdown.Divider />
                        <Link to="/">
                            {user && <Nav.Link as='div' onClick={logoutUser}>Cerrar sesión</Nav.Link>}
                        </Link>
                    </NavDropdown>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation