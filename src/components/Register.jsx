import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { authSlice } from '@/store/authSlice';
import { cartSlice } from '@/store/cartSlice';
import { store } from '@/store/store';
import {
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Box,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Register = ({ setErrors: setParentErrors }) => {
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const [isHidden, setIsHidden] = useState(false);

    const validateForm = (username, email, password) => {
        const newErrors = {};

        if (!username || username.trim() === '') {
            newErrors.username = 'Username is required';
        } else if (username.length < 2) {
            newErrors.username = 'Username must be at least 2 characters';
        }

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

    const handleHidePass = () => {
        setIsHidden(!isHidden);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = usernameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        const validationErrors = validateForm(username, email, password);
        if (Object.keys(validationErrors).length > 0) {
            setParentErrors(validationErrors);
            return;
        }

        setParentErrors({});

        const currentState = store.getState().auth;
        const alreadyExists = currentState.users.find((user) => user.email === email);

        if (alreadyExists) {
            setParentErrors({ register: 'User with this email already exists' });
            return;
        }

        dispatch(authSlice.actions.register({ username, email, password }));
        dispatch(authSlice.actions.login({ email, password }));
    };

    // Редирект и загрузка корзины при успешной регистрации
    useEffect(() => {
        if (auth.isAuthenticated && auth.currentUser) {
            const userCart = auth.currentUser.cart || [];
            dispatch(cartSlice.actions.loadCart(userCart));
            navigate('/');
        }
    }, [auth.isAuthenticated, auth.currentUser, dispatch, navigate]);

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Username"
                type="text"
                inputRef={usernameRef}
                placeholder="pavelo0"
                fullWidth
                required
            />

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
                            <IconButton
                                type="button"
                                onClick={handleHidePass}
                                edge="end"
                            >
                                {isHidden ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            <Button type="submit" variant="contained" size="large" fullWidth>
                Register
            </Button>
        </Box>
    );
};

export default Register;
