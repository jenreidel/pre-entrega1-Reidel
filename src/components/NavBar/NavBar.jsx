import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import logo from '../../assets/img/logojardininterior.jpg';
import Cart from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function Navegador() {
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container className="navbar">
                    <Navbar.Brand>
                        <img src={logo} alt="logo de tu jardin interior" style={{ width: '150px', height: 'auto' }} />
                    </Navbar.Brand>
                    <Nav>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/categorias/Planta"}>Plantas de Interior</Link>
                        <Link to={"/categorias/Maceta"}>Macetas</Link>
                        <Link to={"/categorias/Accesorio"}>Accesorios</Link>
                        <Link to={"/contacto"}>Contacto</Link>
                    </Nav>
                    <Cart />
                </Container>
        </Navbar>
        </div>
    );
}

export default Navegador;