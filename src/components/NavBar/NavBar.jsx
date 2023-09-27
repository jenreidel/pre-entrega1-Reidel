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
            <Navbar className='bg-color' data-bs-theme="light">
                <Container className="navbar">
                    <Navbar.Brand>
                        <img src={logo} alt="logo de tu jardin interior" style={{ width: '150px', height: 'auto' }} />
                    </Navbar.Brand>
                    <Nav>
                        <Link className='nav-item' to={"/"}>Inicio</Link>
                        <Link className='nav-item' to={"/categorias/Planta"}>Plantas de Interior</Link>
                        <Link className='nav-item' to={"/categorias/Maceta"}>Macetas</Link>
                        <Link className='nav-item' to={"/categorias/Accesorio"}>Accesorios</Link>
                        <Link className='nav-item' to={"/contacto"}>Contacto</Link>
                    </Nav>
                    <Cart />
                </Container>
            </Navbar>
        </div>
    );
}

export default Navegador;