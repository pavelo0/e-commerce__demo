import Login from '@/components/Login';
import { useState } from 'react';
import { Link } from 'react-router';
import { Container, Box, Typography, Paper, Stack, Alert } from '@mui/material';

const LoginPage = () => {
    const [errors, setErrors] = useState({});

    return (
        <Container maxWidth="sm" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
            <Box
                sx={{
                    maxWidth: 500,
                    mx: 'auto',
                    px: { xs: 2, sm: 3 },
                }}
            >
                <Paper elevation={3} sx={{ p: { xs: 3, sm: 4 }, borderRadius: 2 }}>
                    <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}>
                        Login
                    </Typography>

                    <Login setErrors={setErrors} />

                    <Stack spacing={1} sx={{ mt: 2 }}>
                        {errors.email && <Alert severity="error">{errors.email}</Alert>}
                        {errors.password && <Alert severity="error">{errors.password}</Alert>}
                        {errors.login && <Alert severity="error">{errors.login}</Alert>}
                    </Stack>

                    <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                        Don't have an account?{' '}
                        <Link to="/register" style={{ color: 'inherit', textDecoration: 'underline' }}>
                            Register
                        </Link>
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default LoginPage;
