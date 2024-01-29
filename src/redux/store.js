import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import userReducer from './user/userSlice';
import projectsReducer from './projects/projectsSlice';
import guestReducer from './guest/guestSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    projects: projectsReducer,
    guests: guestReducer,
  },
  middleware: ()=>[thunk],
});


// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
