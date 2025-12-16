import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetCategoriesQuery } from '../store/api/productsApi.js';
import { Box, Stack, Button, CircularProgress, Typography } from '@mui/material';

const CategoriesBar = () => {
    const { data, isLoading, error } = useGetCategoriesQuery();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const currentCategory = searchParams.get('category');

    const handleCategoryClick = (categoryName) => {
        navigate(`/products?category=${categoryName}`);
    };

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                <CircularProgress size={24} />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                <Typography variant="body2" color="error">
                    Error!
                </Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                maxWidth: '100vw',
                px: 2,
                py: 2,
                bgcolor: 'background.paper',
                borderBottom: 1,
                borderColor: 'divider',
            }}
        >
            <Stack
                direction="row"
                spacing={1.5}
                sx={{ overflowX: 'auto', pb: 1, '&::-webkit-scrollbar': { height: 8 } }}
                alignItems="center"
            >
                {data?.map(({ slug, name }) => {
                    const isActive = currentCategory === slug;
                    return (
                        <Button
                            key={slug}
                            size="small"
                            variant={isActive ? 'contained' : 'outlined'}
                            color="primary"
                            onClick={() => handleCategoryClick(slug)}
                            sx={{
                                minWidth: 150,
                                textTransform: 'none',
                                fontWeight: 600,
                                whiteSpace: 'nowrap',
                                paddingLeft: 5,
                                paddingRight: 5,
                            }}
                        >
                            {name}
                        </Button>
                    );
                })}
            </Stack>
        </Box>
    );
};

export default CategoriesBar;
