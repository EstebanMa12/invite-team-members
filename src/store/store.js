import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userSlice from './users/userSlice';

const store = configureStore({
    reducer: {
    user: userSlice.reducer,
    },
    middleware: [thunk],
});

export default store;