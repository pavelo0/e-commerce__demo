import { useSelector } from 'react-redux';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Divider,
    Chip,
} from '@mui/material';

const CartComp = () => {
    const state = useSelector((state) => state.cart);

    if (state.items.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h5" color="text.secondary">
                    Your cart is empty
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                    p: 2,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 1,
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Total Items: <Chip label={state.totalQuantity} color="primary" size="small" />
                </Typography>
                <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>
                    Total: ${state.totalPrice.toFixed(2)}
                </Typography>
            </Box>

            <Stack spacing={2}>
                {state.items.map((item) => (
                    <Card key={item.id} sx={{ display: 'flex', boxShadow: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                        <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.title}
                            sx={{
                                width: { xs: '100%', sm: 150 },
                                height: { xs: 200, sm: 150 },
                                objectFit: 'cover',
                            }}
                        />
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    mb: 1,
                                    wordBreak: 'break-word',
                                    fontSize: { xs: '1rem', sm: '1.25rem' },
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Box
                                sx={{
                                    mt: 'auto',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: 1,
                                }}
                            >
                                <Typography variant="body2" color="text.secondary">
                                    Quantity: <Chip label={item.quantity} size="small" />
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: { xs: '1rem', sm: '1.25rem' },
                                    }}
                                >
                                    ${(item.price * item.quantity).toFixed(2)}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
};

export default CartComp;
