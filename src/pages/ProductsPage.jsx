import { useSearchParams } from 'react-router';
import { useGetProductsByCategoryQuery, useGetProductsQuery } from '../store/api/productsApi';

const ProductsPage = () => {
    const [searchedParam] = useSearchParams();
    const category = searchedParam.get('category');

    const { data, isLoading, error } = category
        ? useGetProductsByCategoryQuery(category)
        : useGetProductsQuery();

    console.log(data);
    if (error) {
        return (
            <div>
                <h2>Error: {error.message || 'Failed to load products'}</h2>
            </div>
        );
    }

    return (
        <>
            <h1>Products category</h1>
            <h2>Total:</h2>
        </>
    );
};

export default ProductsPage;
