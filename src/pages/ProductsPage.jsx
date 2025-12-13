import { useSearchParams } from 'react-router';
import ProductsList from '../components/ProductsList.jsx';
import { useGetProductsByCategoryQuery, useGetProductsQuery } from '../store/api/productsApi.js';

const ProductsPage = () => {
    const [searchedParam] = useSearchParams();
    const category = searchedParam.get('category');

    const allProducts = useGetProductsQuery(undefined, {
        skip: category,
    });
    const allProdCategory = useGetProductsByCategoryQuery(category, { skip: !category });

    const prodData = category ? allProdCategory.data : allProducts.data;
    const { data, isLoading, error } = category ? allProdCategory : allProducts;

    const products = data?.products || [];
    const total = data?.total || 0;

    console.log(prodData);
    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (error) {
        return (
            <div>
                <h2>Error: {error.message || 'Failed to load products'}</h2>
            </div>
        );
    }

    return (
        <>
            <h1>{category ? `Products of ${category} category` : 'All products'}</h1>
            <h2>Total: {total}</h2>
            <div className="">
                <ProductsList products={products} />
            </div>
        </>
    );
};

export default ProductsPage;
