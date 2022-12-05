import './Navigation.css'
import { Nav, Navbar, NavDropdown, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <Navbar className='color-nav' expand="lg">
            <Link to="/">
                <Navbar.Brand className='brand-name' as='div'>Rutalia</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/crear-itinerario">
                        <Nav.Link as='div'>Crear ruta</Nav.Link>
                    </Link>
                    <Link to="/lista-eventos">
                        <Nav.Link as='div'>Eventos</Nav.Link>
                    </Link>
                </Nav>
                <Form className="d-flex me-5">
                    <NavDropdown title="Acceso" align="end">
                        <Link to="/registro">
                            <Nav.Link as='div'>Registro</Nav.Link>
                        </Link>
                        <Link to="/iniciar-sesion">
                            <Nav.Link as='div'>Iniciar sesión</Nav.Link>
                        </Link>
                        <NavDropdown.Divider />
                        <Link to="/cerrar-sesion">
                            <Nav.Link as='div'>Cerrar sesión</Nav.Link>
                        </Link>
                    </NavDropdown>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation