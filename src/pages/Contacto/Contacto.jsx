import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Layout from "../../components/Layout/Layout"
import contacto from '../../assets/img/contacto.png';
import './Contacto.css';

const Contacto = () => {
    return (
        <Layout>
            <h1 className="titulo"><strong>CONTACTANOS</strong></h1>
            <div className="contacto-column">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ingresa tu e-mail</Form.Label>
                        <Form.Control type="email" placeholder="E-mail" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Dejanos tu mensaje</Form.Label>
                        <Form.Control type="message" placeholder="Mensaje" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Enviar
                    </Button>
                </Form>
                <img className="img-bordered" src={contacto} alt="informacion de contacto" width="60%"/>
                <hr/>
                <div className="card">
                    <div className="card-body card-horario">
                        <h5>Horarios de atención</h5>
                        <hr/>
                        <p>Lunes a Viernes de 10 a 19hs.</p>
                        <p>Sábados de 10 a 16hs.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contacto;