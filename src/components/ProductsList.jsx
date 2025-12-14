import Product from './Product';
import { Link } from 'react-router';

const ProductsList = ({ products }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {products.map(({ id, title, price, thumbnail }) => (
                <Link key={id} to={`/products/${id}`}>
                    <Product id={id} title={title} price={price} thumbnail={thumbnail} />
                </Link>
            ))}
        </div>
    );
};

export default ProductsList;
