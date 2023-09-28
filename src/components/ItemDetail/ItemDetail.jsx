import './ItemDetail.css';
import Layout from '../Layout/Layout';


const ItemDetail = ({item}) => {
    
    return (
        <>
            <Layout>
                <div>
                    <img src={item.imagen} alt={item.nombre} />
                    <div>
                        <h3 className='txt-normal'>{item.nombre}</h3>
                        <h5 className='txt-normal'>${item.precio}</h5>
                        <h6 className='txt-normal'>${item.descripcion}</h6>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ItemDetail;