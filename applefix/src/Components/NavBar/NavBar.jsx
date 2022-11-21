import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logo-sin-fondo.png'

function NavBar() {
    return (
            <Navbar className='NavBar' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} className='NavBar-logo'/>
                    </Navbar.Brand>
                    
                    <Nav className="Nav">
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#">Productos</Nav.Link>
                        <Nav.Link href="#">Contáctanos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    );
}

export default NavBar;