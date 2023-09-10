import cart from '../../assets/img/cart.png';

function Cart () {
    return (
        <div>
            <span><img src={cart} alt="carrito de compras by Icons8" style={{ width: '45px', height: 'auto' }}/>+5</span>
        </div>
    )
};

export default Cart;