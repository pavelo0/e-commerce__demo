import { Container, Box, Typography, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFound = () => {
    return (
        <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
            <Box
                sx={{
                    maxWidth: { xs: '100%', sm: 600, md: 1000, lg: 1200 },
                    mx: 'auto',
                    px: { xs: 2, sm: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 2, md: 3 },
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 3, sm: 4, md: 6 },
                        textAlign: 'center',
                        borderRadius: 3,
                        width: '100%',
                    }}
                >
                    <ErrorOutlineIcon
                        sx={{
                            fontSize: { xs: 60, sm: 80, md: 100 },
                            color: 'primary.main',
                            mb: 2,
                        }}
                    />
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: '2rem', sm: '3rem' },
                        }}
                    >
                        404
                    </Typography>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{
                            mb: 4,
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        }}
                    >
                        Page Not Found
                    </Typography>
                    <Button component={Link} to="/" variant="contained" size="large">
                        Go Home
                    </Button>
                </Paper>
            </Box>
        </Container>
    );
};

export default NotFound;
