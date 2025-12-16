import { Container, Box, Typography, Paper, Stack } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const About = () => {
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
                <Paper elevation={2} sx={{ p: { xs: 2, sm: 3, md: 4 }, borderRadius: 2 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                        <InfoIcon color="primary" sx={{ fontSize: { xs: 30, sm: 40 } }} />
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 600,
                                fontSize: { xs: '1.5rem', sm: '2rem' },
                            }}
                        >
                            About Us
                        </Typography>
                    </Stack>
                    <Typography
                        variant="body1"
                        sx={{
                            lineHeight: 1.8,
                            color: 'text.secondary',
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                            wordBreak: 'break-word',
                        }}
                    >
                        This is a demo e-commerce application built with React, Material-UI, and Redux Toolkit.
                        It showcases modern web development practices including state management, routing, and
                        responsive design.
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default About;
