import './ItemListContainer.css';

function ItemListContainer (prop) {
    const {greeting} = prop

    return (
        <div className='greeting'>
            <span>{greeting}</span>
        </div>
    )
}

export default ItemListContainer;