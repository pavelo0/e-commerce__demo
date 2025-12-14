import { useSelector } from 'react-redux';

const CartComp = () => {
    const state = useSelector((state) => state.cart);

    return (
        <div className="">
            <h2>Cart</h2>
            <h3>Total price: ${state.totalPrice.toFixed(2)}</h3>
            <h3>Total products in cart: {state.totalQuantity} pcs</h3>
            {state.items.map((item) => {
                return (
                    <div className="" key={item.id}>
                        <h4>{item.title}</h4>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price.toFixed(2)}</p>
                        <img src={item.image} alt={item.title} width={100} height={100} />
                    </div>
                );
            })}
        </div>
    );
};

export default CartComp;
