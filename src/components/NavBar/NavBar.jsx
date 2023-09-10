import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import logo from '../../assets/img/logojardininterior.jpg';

function Navegador() {
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container className="navbar">
                    <Navbar.Brand>
                        <img src={logo} alt="logo de tu jardin interior" style={{ width: '150px', height: 'auto' }} />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Plantas de Interior</Nav.Link>
                        <Nav.Link href="#features">Macetas</Nav.Link>
                        <Nav.Link href="#pricing">Accesorios</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav> 
                </Container>
            </Navbar>
        </div>
    );
}

export default Navegador;