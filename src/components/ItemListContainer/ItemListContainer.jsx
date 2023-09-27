import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { listaProductos } from '../../productos';

function ItemListContainer ({greeting}) {
    
    const [cargando, setCargando] = useState(true);
    const [products, setProducts] = useState([]);
    const {idCategorias} = useParams();
  
    const getProductos = async () => {
    return await new Promise ((resolve) => {
        setTimeout(()=>{
            idCategorias ?
            resolve(listaProductos.filter((prod) => prod.categoria === idCategorias))
            : resolve(listaProductos)
        }, 2000)
        })
    };

    useEffect(() => {
        setCargando(true);
        getProductos()
        .then((res) => {
            setProducts(res)
            setCargando(false)
        })
    }, [idCategorias]);

    return (
        <>
            <div className='greeting'>
                <h1>{greeting}</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
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