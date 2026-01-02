import Register from '@/components/Register';
import { Link } from 'react-router';
import { useState } from 'react';
import { Container, Box, Typography, Paper, Stack, Alert } from '@mui/material';

const RegisterPage = () => {
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
                        Registration
                    </Typography>

                    <Register setErrors={setErrors} />

                    <Stack spacing={1} sx={{ mt: 2 }}>
                        {errors.username && <Alert severity="error">{errors.username}</Alert>}
                        {errors.email && <Alert severity="error">{errors.email}</Alert>}
                        {errors.password && <Alert severity="error">{errors.password}</Alert>}
                        {errors.register && <Alert severity="error">{errors.register}</Alert>}
                    </Stack>

                    <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                        Already have an account?{' '}
                        <Link to="/login" style={{ color: 'inherit', textDecoration: 'underline' }}>
                            Login
                        </Link>
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default RegisterPage;
