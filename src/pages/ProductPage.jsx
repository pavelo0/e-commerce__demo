import { useGetProductByIdQuery } from '@/store/api/productsApi';
import { Link, useParams } from 'react-router';

const ProductPage = () => {
    const { id } = useParams();

    const { data, isLoading, error } = useGetProductByIdQuery(id);
    console.log(data);

    if (isLoading) {
        return <h2>Loading</h2>;
    }
    if (error) {
        return <h2>{error.message || 'Failed to load product'}</h2>;
    }
    const { title, price, description, images, category } = data;

    return (
        <div>
            <Link to="/products">← Back to products</Link>

            <div className="">
                <h1>{title}</h1>
                <h2>{price}</h2>
                <p>{description}</p>
                <img src={images[0]} alt={title} />
                <p>{category}</p>

                <div className="">
                    <button>{'-'}</button>
                    <input readOnly type="text" name="" id="" value={1} />
                    <button>{'+'}</button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
