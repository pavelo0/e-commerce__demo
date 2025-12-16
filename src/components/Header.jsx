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
    Avatar,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { authSlice } from '@/store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(authSlice.actions.logout());
        navigate('/');
    };

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
                        E_Commerce Demo
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
                            Главная
                        </Button>
                        <Button
                            component={Link}
                            to="/products"
                            sx={{ color: 'white', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                        >
                            Товары
                        </Button>
                        <Button
                            component={Link}
                            to="/about"
                            sx={{ color: 'white', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                        >
                            О нас
                        </Button>
                    </Stack>

                    <Stack direction="row" spacing={{ xs: 0.5, sm: 1, md: 2 }} alignItems="center">
                        {auth.isAuthenticated && (
                            <>
                                <IconButton component={Link} to="/cart" sx={{ color: 'white' }}>
                                    <Badge
                                        badgeContent={state?.totalQuantity || 0}
                                        color="secondary"
                                    >
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>

                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Avatar
                                        sx={{
                                            bgcolor: 'rgba(255, 255, 255, 0.2)',
                                            width: 32,
                                            height: 32,
                                            fontSize: '0.875rem',
                                        }}
                                    >
                                        {auth.currentUser?.username?.charAt(0).toUpperCase()}
                                    </Avatar>
                                    <Typography
                                        sx={{
                                            color: 'white',
                                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                            display: { xs: 'none', sm: 'block' },
                                        }}
                                    >
                                        {auth.currentUser?.username}
                                    </Typography>
                                </Stack>

                                <Button
                                    onClick={handleLogout}
                                    variant="outlined"
                                    startIcon={<LogoutIcon />}
                                    sx={{
                                        color: 'white',
                                        borderColor: 'white',
                                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                        '&:hover': {
                                            borderColor: 'white',
                                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        },
                                    }}
                                >
                                    Logout
                                </Button>
                            </>
                        )}
                        {!auth.isAuthenticated && (
                            <>
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
                            </>
                        )}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
