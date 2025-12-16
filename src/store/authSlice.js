import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        users: [],
        isAuthenticated: false,
        currentUser: null,
    },
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const logedUser = state.users.find(
                (user) => user.email === email && user.password === password
            );
            if (!logedUser) return;
            state.isAuthenticated = true;
            state.currentUser = logedUser;
        },
        register: (state, action) => {
            const { username, email, password } = action.payload;
            const alreadyExistUser = state.users.find((user) => user.email === email);
            if (alreadyExistUser) return;
            const newUser = {
                id: Date.now().toString(36) + Math.random().toString(36).substring(2),
                username,
                email,
                password,
                cart: [],
            };
            state.users.push(newUser);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.currentUser = null;
        },
        updateUserCart: (state, { payload }) => {
            if (state.currentUser) {
                state.currentUser.cart = payload;
                const userIndex = state.users.findIndex((user) => user.id === state.currentUser.id);
                if (userIndex !== -1) {
                    state.users[userIndex].cart = payload;
                }
            }
        },
    },
});
