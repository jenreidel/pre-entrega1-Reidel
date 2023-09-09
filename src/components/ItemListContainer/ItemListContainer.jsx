import './ItemListContainer.css';

function ItemListContainer (prop) {
    const {greeting} = prop

    return (
        <span>{greeting}</span>
    )
}

export default ItemListContainer;