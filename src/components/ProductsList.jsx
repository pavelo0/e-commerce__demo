import { useState } from 'react';

const ProductsList = ({ products }) => {
    const [productQuantities, setProductQuantities] = useState({});
    const handleProdCartIncrement = (id) => {
        setProductQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    };
    const handleProdCartDecrement = (id) => {
        setProductQuantities((prev) => {
            if (!prev[id] || prev[id] === 0) return prev;

            return { ...prev, [id]: prev[id] - 1 };
        });
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {products.map(({ id, title, price }) => (
                <div
                    key={id}
                    style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}
                >
                    <h3>{title}</h3>
                    <h4>${price}</h4>

                    <button>View</button>
                    <button>Add to cart</button>

                    <div className="">
                        <button onClick={() => handleProdCartDecrement(id)}>{'<-'}</button>
                        <input
                            readOnly
                            type="text"
                            name=""
                            id=""
                            value={productQuantities[id] || 0}
                        />
                        <button onClick={() => handleProdCartIncrement(id)}>{'->'}</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
