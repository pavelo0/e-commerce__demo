import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './api/productsApi.js';
import { cartSlice } from './cartSlice.js';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});
