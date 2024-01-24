import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: ()=>[thunk],
});

export default store;