import Layout from "../../components/Layout/Layout"
import contacto from '../../assets/img/contacto.png';

const Contacto = () => {
    return (
        <Layout>
            <h1 className="titulo"><strong>CONTACTANOS</strong></h1>
            <div className="contacto-column">
                <img className="img-bordered" src={contacto} alt="informacion de contacto" width="70%"/>
                <hr/>
                <div className="card" style="width: 18rem;">
                    <div className="card-body card-horario">
                        <h5 className="card-title">Horarios de atención</h5>
                        <hr/>
                        <p className="card-text">Lunes a Viernes de 10 a 19hs.</p>
                        <p className="card-text">Sábados de 10 a 16hs.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contacto;