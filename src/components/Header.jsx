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
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { authSlice } from '@/store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from 'react';

const Header = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogout = () => {
        dispatch(authSlice.actions.logout());
        navigate('/');
        setMobileOpen(false);
    };

    const handleMenuClick = () => {
        setMobileOpen(false);
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
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

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

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 280,
                    },
                }}
            >
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        minHeight: '100%',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 2,
                            fontWeight: 600,
                            color: 'white',
                        }}
                    >
                        Menu
                    </Typography>
                    <Divider sx={{ mb: 2, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

                    <List>
                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to="/"
                                onClick={handleMenuClick}
                                sx={{
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                }}
                            >
                                <HomeIcon sx={{ mr: 2, color: 'white' }} />
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to="/products"
                                onClick={handleMenuClick}
                                sx={{
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                }}
                            >
                                <ShoppingBagIcon sx={{ mr: 2, color: 'white' }} />
                                <ListItemText primary="Products" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to="/about"
                                onClick={handleMenuClick}
                                sx={{
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                }}
                            >
                                <InfoIcon sx={{ mr: 2, color: 'white' }} />
                                <ListItemText primary="About" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <Divider sx={{ my: 2, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

                    {auth.isAuthenticated ? (
                        <>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component={Link}
                                        to="/cart"
                                        onClick={handleMenuClick}
                                        sx={{
                                            color: 'white',
                                            '&:hover': {
                                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                            },
                                        }}
                                    >
                                        <Badge
                                            badgeContent={state?.totalQuantity || 0}
                                            color="secondary"
                                            sx={{ mr: 2 }}
                                        >
                                            <ShoppingCartIcon sx={{ color: 'white' }} />
                                        </Badge>
                                        <ListItemText primary="Cart" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        onClick={handleMenuClick}
                                        sx={{
                                            color: 'white',
                                            '&:hover': {
                                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                            },
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                bgcolor: 'rgba(255, 255, 255, 0.2)',
                                                width: 32,
                                                height: 32,
                                                fontSize: '0.875rem',
                                                mr: 2,
                                            }}
                                        >
                                            {auth.currentUser?.username?.charAt(0).toUpperCase()}
                                        </Avatar>
                                        <ListItemText
                                            primary={auth.currentUser?.username}
                                            secondary="User"
                                            secondaryTypographyProps={{
                                                color: 'rgba(255, 255, 255, 0.7)',
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        onClick={handleLogout}
                                        sx={{
                                            color: 'white',
                                            '&:hover': {
                                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                            },
                                        }}
                                    >
                                        <LogoutIcon sx={{ mr: 2, color: 'white' }} />
                                        <ListItemText primary="Logout" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </>
                    ) : (
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to="/login"
                                    onClick={handleMenuClick}
                                    sx={{
                                        color: 'white',
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        },
                                    }}
                                >
                                    <LoginIcon sx={{ mr: 2, color: 'white' }} />
                                    <ListItemText primary="Login" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to="/register"
                                    onClick={handleMenuClick}
                                    sx={{
                                        color: 'white',
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        },
                                    }}
                                >
                                    <PersonAddIcon sx={{ mr: 2, color: 'white' }} />
                                    <ListItemText primary="Register" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    )}
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Header;
