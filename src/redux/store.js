import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: ()=>[thunk],
});


// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
