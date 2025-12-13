import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => '/products',
        }),
        getProductsByCategory: build.query({
            query: (categoryName) => `products/category/${categoryName}`,
        }),
        getProductById: build.query({
            query: (id) => `/products/${id}`,
        }),
        getCategories: build.query({
            query: () => '/products/categories',
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductsByCategoryQuery,
    useGetProductByIdQuery,
    useGetCategoriesQuery,
} = productsApi;
