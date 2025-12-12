import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './api/productsApi.js';

// Настраиваем Redux store
export const store = configureStore({
    reducer: {
        // Подключаем reducer из RTK Query API
        // productsApi.reducerPath - это строка 'productsApi'
        // productsApi.reducer - это автоматически созданный reducer
        [productsApi.reducerPath]: productsApi.reducer,
    },
    
    // Подключаем middleware для RTK Query
    // Это нужно для обработки запросов и кэширования
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});
