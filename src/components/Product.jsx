import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Product = ({ id, title, price, thumbnail }) => {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                },
            }}
        >
            <CardMedia
                component="img"
                image={thumbnail}
                alt={title}
                sx={{
                    height: 250,
                    objectFit: 'cover',
                }}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        mb: 1,
                        fontWeight: 600,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        wordBreak: 'break-word',
                        hyphens: 'auto',
                    }}
                >
                    {title}
                </Typography>
                <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 700, mb: 2 }}>
                        ${price}
                    </Typography>
                    <Button
                        component={Link}
                        to={`/products/${id}`}
                        variant="contained"
                        fullWidth
                        startIcon={<ShoppingCartIcon />}
                        sx={{ textTransform: 'none' }}
                    >
                        View Details
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Product;
