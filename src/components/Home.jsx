import { Container, Box, Typography, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Home = () => {
    return (
        <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
            <Box
                sx={{
                    maxWidth: { xs: '100%', sm: 600, md: 1000, lg: 1200 },
                    mx: 'auto',
                    px: { xs: 2, sm: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 2, md: 4 },
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 3, sm: 4, md: 6 },
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        borderRadius: 3,
                        width: '100%',
                    }}
                >
                    <ShoppingBagIcon sx={{ fontSize: { xs: 60, sm: 80 }, mb: 2 }} />
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                        }}
                    >
                        Welcome to E-Commerce Demo
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 4,
                            opacity: 0.9,
                            fontSize: { xs: '1rem', sm: '1.25rem' },
                        }}
                    >
                        Discover amazing products at great prices
                    </Typography>
                    <Button
                        component={Link}
                        to="/products"
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: 'white',
                            color: 'primary.main',
                            '&:hover': {
                                bgcolor: 'rgba(255, 255, 255, 0.9)',
                            },
                        }}
                    >
                        Browse Products
                    </Button>
                </Paper>
            </Box>
        </Container>
    );
};

export default Home;
