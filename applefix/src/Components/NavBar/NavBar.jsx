// Imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';
import logo from '../../logo-sin-fondo.png'

// Code
const NavBar = () => {
    return (
        <Navbar className='NavBar' bg="dark" variant="dark">
            <Container>
                <div>
                    <img src={logo} className='NavBar__logo' alt='Logo AppleFix' />
                    <Navbar.Brand href="#" className='NavBar__text'>AppleFix Reparaciones</Navbar.Brand>
                </div>
                <Nav className="Nav">
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Repuestos</NavDropdown.Item>
                        <NavDropdown.Item href="#">Herramientas</NavDropdown.Item>
                        <NavDropdown.Item href="#">Licencias</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Equipos</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">Contáctanos</Nav.Link>

                    {/* CartWidget */}
                    <button className='NavBar__button__CartWidget'>
                        <CartWidget />
                    </button>
                </Nav>
            </Container>
        </Navbar>
    );
}

// Exports
export default NavBar;