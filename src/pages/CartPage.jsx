import CartComp from '@/components/CartComp';
import { Container, Box, Typography } from '@mui/material';

const CartPage = () => {
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
                <Typography variant="h4">Cart</Typography>
                <CartComp />
            </Box>
        </Container>
    );
};

export default CartPage;
