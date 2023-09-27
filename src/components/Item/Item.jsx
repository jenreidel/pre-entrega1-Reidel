import { Link } from 'react-router-dom';
import './Item.css';
import Card from 'react-bootstrap/Card';


const Item = ({prodSelec}) => {

    return (
        <div>
            <Card className='card'>
                <Card.Img variant="top" src={prodSelec.imagen} alt={prodSelec.nombre}/>
                <Card.Body>
                    <h4>{prodSelec.nombre}</h4>
                    <h5>Precio ${prodSelec.precio}</h5>
                    {/* <Link to={`../../productos.js/${item.id}`}>Ver Detalles</Link> */}
                </Card.Body>
            </Card>
        </div>
        
    )
};

export default Item;