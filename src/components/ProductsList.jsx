import Product from './Product';
import { Box } from '@mui/material';

const ProductsList = ({ products }) => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: { xs: 2, sm: 3 },
                alignItems: 'stretch',
            }}
        >
            {products.map(({ id, title, price, thumbnail }) => (
                <Box key={id} sx={{ height: '100%' }}>
                    <Product id={id} title={title} price={price} thumbnail={thumbnail} />
                </Box>
            ))}
        </Box>
    );
};

export default ProductsList;
