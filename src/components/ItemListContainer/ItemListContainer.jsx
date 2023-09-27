import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { listaProductos } from '../../productos';

function ItemListContainer ({greeting, productos}) {
    
    const [cargando, setCargando] = useState(true);
    const [products, setProducts] = useState([]);
  
    const getProductos = async () => {
    return await new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(listaProductos)
        }, 2000)
        })
    };

    useEffect(() => {
        getProductos()
        .then((res) => {
            setProducts(res)
            setCargando(false)
        })
    }, []);

    return (
        <>
            <div className='greeting'>
                <h1>{greeting}</h1>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                {
                    cargando ? (
                        <div style={{margin: 20, display: "flex", justifyContent: 'center', alignItems: 'center'}}> 
                        Cargando... 
                        </div>
                    ) : (<ItemList items={products}/>)
                }
            </div>
        </>
    )
}

export default ItemListContainer; 