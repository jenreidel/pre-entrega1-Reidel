import Item from "../Item/Item"

const ItemList = ({items}) => {

    return (
        <div className='container'>
            {items.map((item) =>
                (
                    <div>
                        <Item key={item.id} prodSelec={item} />
                    </div>
                )
            )}
        </div>
    )
}

export default ItemList;