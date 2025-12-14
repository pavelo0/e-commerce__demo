import { useState } from 'react';
import Product from './Product';
import { Link } from 'react-router';

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
                <Link to={`/products/${id}`}>
                    <Product
                        productQuantities={productQuantities}
                        id={id}
                        title={title}
                        price={price}
                        onClickIncrement={handleProdCartIncrement}
                        onClickDecrement={handleProdCartDecrement}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ProductsList;
