// Imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget';
import logo from '../../logo-sin-fondo.png'

// Code
const NavBar = () => {
    return (
        // Boostrap Navbar
        <Navbar className='NavBar' bg="dark" variant="dark">
            <Container>
                <div>
                    <img src={logo} className='NavBar__logo' alt='Logo AppleFix' />
                    <Navbar.Brand href="/" className='NavBar__text'>AppleFix Reparaciones</Navbar.Brand>
                </div>
                <Nav className="Nav">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/repuestos">Repuestos</Nav.Link>
                    <Nav.Link href="/equipos">Equipos</Nav.Link>

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