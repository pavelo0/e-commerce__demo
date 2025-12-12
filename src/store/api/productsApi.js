import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),
    endpoints: (build) => ({
        getAllProducts: build.query({
            query: () => '/products',
        }),

        getProductById: build.query({
            query: (id) => `/products/${id}`,
        }),

        getProductByCategory: build.query({
            query: (category) => `/products/category/${category}`,
        }),
    }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useGetProductByCategoryQuery } =
    productsApi;
