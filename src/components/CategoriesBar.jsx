import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetCategoriesQuery } from '../store/api/productsApi.js';

const CategoriesBar = () => {
    const { data, isLoading, error } = useGetCategoriesQuery();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const currentCategory = searchParams.get('category');

    const handleCategoryClick = (categoryName) => {
        navigate(`/products?category=${categoryName}`);
    };

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error!</h2>;
    }

    return (
        <div style={{ maxWidth: '100vw' }}>
            <ul
                style={{
                    display: 'flex',
                    gap: '12px',
                    overflow: 'scroll',
                    padding: '25px 20px',
                    listStyleType: 'none',
                }}
            >
                {data?.map(({ slug, name }) => (
                    <li key={slug}>
                        <button
                            onClick={() => handleCategoryClick(slug)}
                            style={{
                                backgroundColor: currentCategory === slug ? 'blue' : 'white',
                                color: currentCategory === slug ? 'black' : 'white',
                                padding: '8px 16px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            {name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesBar;
