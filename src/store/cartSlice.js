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
    },
});
