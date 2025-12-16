import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
        totalQuantity: 0,
    },

    reducers: {
        addToCart: (state, { payload }) => {
            const { id, title, price, quantity, image } = payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.image = image;
                state.totalPrice += price * quantity;
                state.totalQuantity += quantity;
            } else {
                state.items.push({ id, title, price, quantity, image });
                state.totalPrice += price * quantity;
                state.totalQuantity += quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        },
        loadCart: (state, { payload }) => {
            state.items = payload || [];

            state.totalPrice = state.items.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0);

            state.totalQuantity = state.items.reduce((total, item) => {
                return total + item.quantity;
            }, 0);
        },
    },
});
