import {
    Container,
    Toolbar,
    AppBar,
    Stack,
    Box,
    Typography,
    Button,
    IconButton,
    Badge,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    const state = useSelector((state) => state.cart);

    return (
        <AppBar position="static" elevation={2}>
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        gap: { xs: 1, sm: 2, md: 3 },
                        justifyContent: 'space-between',
                        py: 1,
                        flexWrap: 'wrap',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: 'white',
                            fontSize: { xs: '1rem', sm: '1.25rem' },
                        }}
                    >
                        ShopHub
                    </Typography>

                    <Stack
                        component="nav"
                        direction="row"
                        spacing={{ xs: 1, sm: 2, md: 3 }}
                        alignItems="center"
                        sx={{
                            flexGrow: 1,
                            justifyContent: 'center',
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <Button
                            component={Link}
                            to="/"
                            sx={{ color: 'white', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/products"
                            sx={{ color: 'white', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                        >
                            Products
                        </Button>
                        <Button
                            component={Link}
                            to="/about"
                            sx={{ color: 'white', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                        >
                            About
                        </Button>
                    </Stack>

                    <Stack direction="row" spacing={{ xs: 0.5, sm: 1, md: 2 }} alignItems="center">
                        <IconButton component={Link} to="/cart" sx={{ color: 'white' }}>
                            <Badge badgeContent={state?.totalQuantity || 0} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <Button
                            component={Link}
                            to="/login"
                            sx={{
                                color: 'white',
                                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                display: { xs: 'none', sm: 'inline-flex' },
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            component={Link}
                            to="/register"
                            variant="outlined"
                            sx={{
                                color: 'white',
                                borderColor: 'white',
                                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                '&:hover': {
                                    borderColor: 'white',
                                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                                },
                                display: { xs: 'none', sm: 'inline-flex' },
                            }}
                        >
                            Register
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
