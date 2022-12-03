import './Navigation.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
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
                    <Link to="/itinerary/create">
                        <Nav.Link as='div'>Crear ruta</Nav.Link>
                    </Link>
                    <Link to="/events/list">
                        <Nav.Link as='div'>Eventos</Nav.Link>
                    </Link>
                    <NavDropdown title="Acceso" id="basic-nav-dropdown">
                        <Link to="/sign-up">
                            <Nav.Link as='div'>Registro</Nav.Link>
                        </Link>
                        <Link to="/log-in ">
                            <Nav.Link as='div'>Iniciar sesión</Nav.Link>
                        </Link>
                        <NavDropdown.Divider />
                        <Link to="/log-out ">
                            <Nav.Link as='div'>Cerrar sesión</Nav.Link>
                        </Link>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation