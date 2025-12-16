import { useGetProductByIdQuery } from '@/store/api/productsApi';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router';
import { cartSlice } from '@/store/cartSlice';
import {
    Container,
    Box,
    Typography,
    Button,
    IconButton,
    TextField,
    Card,
    CardMedia,
    Chip,
    Stack,
    Alert,
    Grid,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
        return (
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Typography variant="h6">Loading...</Typography>
            </Container>
        );
    }
    if (error) {
        return (
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Typography variant="h6">{error.message || 'Failed to load product'}</Typography>
            </Container>
        );
    }
    if (!data) {
        return (
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Typography variant="h6">Product not found</Typography>
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
                <Button
                    component={Link}
                    to="/products"
                    startIcon={<ArrowBackIcon />}
                    color="primary"
                    sx={{ alignSelf: 'flex-start' }}
                >
                    Back to products
                </Button>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: { xs: 1, sm: 2 },
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                            }}
                        >
                            {data.images.map((image) => (
                                <Card
                                    key={image}
                                    sx={{
                                        maxWidth: { xs: '100%', sm: 300 },
                                        width: { xs: '100%', sm: 'auto' },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={image}
                                        alt={data.title}
                                        sx={{
                                            height: { xs: 250, sm: 300 },
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Card>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Stack spacing={3}>
                            <Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 1,
                                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
                                        wordBreak: 'break-word',
                                    }}
                                >
                                    {data.title}
                                </Typography>
                                <Chip label={data.category} color="primary" sx={{ mb: 2 }} />
                                <Typography
                                    variant="h3"
                                    color="primary"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 2,
                                        fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                                    }}
                                >
                                    ${data.price}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{
                                        lineHeight: 1.8,
                                        wordBreak: 'break-word',
                                        fontSize: { xs: '0.875rem', sm: '1rem' },
                                    }}
                                >
                                    {data.description}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: 'background.paper',
                                    borderRadius: 2,
                                    boxShadow: 1,
                                }}
                            >
                                <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
                                    Quantity
                                </Typography>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <IconButton
                                        onClick={handleProdCartDecrement}
                                        color="primary"
                                        disabled={
                                            !productQuantities[id] || productQuantities[id] === 0
                                        }
                                        sx={{ border: 1, borderColor: 'divider' }}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <TextField
                                        value={productQuantities[id] || 0}
                                        inputProps={{
                                            readOnly: true,
                                            style: { textAlign: 'center', fontWeight: 600 },
                                        }}
                                        sx={{ width: 80 }}
                                    />
                                    <IconButton
                                        onClick={handleProdCartIncrement}
                                        color="primary"
                                        sx={{ border: 1, borderColor: 'divider' }}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </Stack>
                            </Box>

                            <Button
                                variant="contained"
                                size="large"
                                fullWidth
                                startIcon={<ShoppingCartIcon />}
                                onClick={handleAddToCart}
                                disabled={!productQuantities[id] || productQuantities[id] === 0}
                                sx={{ py: 1.5 }}
                            >
                                Add to Cart
                            </Button>

                            {errorQuantity && (
                                <Alert severity="error" onClose={() => setErrorQuantity(null)}>
                                    {errorQuantity}
                                </Alert>
                            )}
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ProductPage;
