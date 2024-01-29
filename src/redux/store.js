import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import userReducer from './user/userSlice';
import projectsReducer from './projects/projectsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    projects: projectsReducer
  },
  middleware: ()=>[thunk],
});


// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
