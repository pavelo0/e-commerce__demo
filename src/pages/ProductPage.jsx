import { useGetProductByIdQuery } from '@/store/api/productsApi';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router';
import { cartSlice } from '@/store/cartSlice';

const ProductPage = () => {
    const dispatch = useDispatch();

    const [errorQuantity, setErrorQuantity] = useState(null);
    const [productQuantities, setProductQuantities] = useState({});
    const { id } = useParams();

    const { data, isLoading, error } = useGetProductByIdQuery(id);

    const handleProdCartIncrement = useCallback(() => {
        setProductQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    }, [id]);

    const handleProdCartDecrement = useCallback(() => {
        setProductQuantities((prev) => {
            if (!prev[id] || prev[id] === 0) return prev;
            return { ...prev, [id]: prev[id] - 1 };
        });
    }, [id]);

    const handleAddToCart = useCallback(() => {
        if (productQuantities[id] <= 0) {
            setErrorQuantity('Quantity must be greater than 0');
            return;
        }
        if (!data) return;
        dispatch(
            cartSlice.actions.addToCart({
                id,
                title: data.title,
                price: data.price,
                quantity: productQuantities[id],
                image: data.images[0],
            })
        );
        setErrorQuantity(null);
    }, [dispatch, id, data, productQuantities]);

    if (isLoading) {
        return <h2>Loading</h2>;
    }
    if (error) {
        return <h2>{error.message || 'Failed to load product'}</h2>;
    }
    if (!data) {
        return <h2>Product not found</h2>;
    }

    return (
        <div>
            <Link to="/products">← Back to products</Link>

            <div className="">
                <h1>{data.title}</h1>
                <h2>${data.price}</h2>
                <p>{data.description}</p>
                {data.images.map((image) => (
                    <img key={image} src={image} alt={data.title} />
                ))}
                <p>{data.category}</p>

                <div className="">
                    <button onClick={handleProdCartDecrement}>{'-'}</button>
                    <input readOnly type="text" name="" id="" value={productQuantities[id] || 0} />
                    <button onClick={handleProdCartIncrement}>{'+'}</button>
                </div>

                <button onClick={handleAddToCart}>Add to cart</button>
                {errorQuantity && <p className="error">{errorQuantity}</p>}
            </div>
        </div>
    );
};

export default ProductPage;
