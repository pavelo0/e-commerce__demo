import { useSearchParams } from 'react-router';
import ProductsList from '../components/ProductsList.jsx';
import { useGetProductsByCategoryQuery, useGetProductsQuery } from '../store/api/productsApi.js';
import { Container, Box, Typography, CircularProgress, Alert, Chip, Paper } from '@mui/material';

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
        return (
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: 400,
                    }}
                >
                    <CircularProgress size={60} />
                </Box>
            </Container>
        );
    }
    if (error) {
        return (
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Alert severity="error" sx={{ maxWidth: 960, mx: 'auto' }}>
                    {error.message || 'Failed to load products'}
                </Alert>
            </Container>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
            <Box
                sx={{
                    maxWidth: { xs: '100%', sm: 600, md: 1000, lg: 1200 },
                    mx: 'auto',
                    px: { xs: 2, sm: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 2, md: 3 },
                }}
            >
                <Paper
                    elevation={2}
                    sx={{
                        p: { xs: 2, sm: 3 },
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        borderRadius: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 2,
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 600,
                                fontSize: { xs: '1.5rem', sm: '2rem' },
                                wordBreak: 'break-word',
                            }}
                        >
                            {category
                                ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
                                : 'All Products'}
                        </Typography>
                        <Chip
                            label={`${total} items`}
                            sx={{
                                bgcolor: 'rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                fontWeight: 600,
                                fontSize: { xs: '0.875rem', sm: '1rem' },
                            }}
                        />
                    </Box>
                </Paper>
                <ProductsList products={products} />
            </Box>
        </Container>
    );
};

export default ProductsPage;
