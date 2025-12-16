import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { authSlice } from '@/store/authSlice';
import { cartSlice } from '@/store/cartSlice';
import { store } from '@/store/store';
import { TextField, Button, InputAdornment, IconButton, Box, Alert } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = ({ setErrors: setParentErrors }) => {
    const [isHidden, setIsHidden] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const validateForm = (email, password) => {
        const newErrors = {};

        if (!email || email.trim() === '') {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!password || password.trim() === '') {
            newErrors.password = 'Password is required';
        } else if (password.length < 3) {
            newErrors.password = 'Password must be at least 3 characters';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        const validationErrors = validateForm(email, password);
        if (Object.keys(validationErrors).length > 0) {
            setParentErrors(validationErrors);
            return;
        }

        setParentErrors({});

        const currentState = store.getState().auth;
        const userExists = currentState.users.find(
            (user) => user.email === email && user.password === password
        );

        if (!userExists) {
            setParentErrors({ login: 'Invalid email or password' });
            return;
        }

        dispatch(authSlice.actions.login({ email, password }));
    };

    useEffect(() => {
        if (auth.isAuthenticated && auth.currentUser) {
            const userCart = auth.currentUser.cart || [];
            dispatch(cartSlice.actions.loadCart(userCart));
            navigate('/');
        }
    }, [auth.isAuthenticated, auth.currentUser, dispatch, navigate]);

    const handleHidePass = () => {
        setIsHidden(!isHidden);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
            <TextField
                label="Email"
                type="email"
                inputRef={emailRef}
                placeholder="pavelo0@gmail.com"
                fullWidth
                required
            />

            <TextField
                label="Password"
                type={isHidden ? 'text' : 'password'}
                inputRef={passwordRef}
                fullWidth
                required
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="button" onClick={handleHidePass} edge="end">
                                {isHidden ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            <Button type="submit" variant="contained" size="large" fullWidth>
                Login
            </Button>
        </Box>
    );
};

export default Login;
