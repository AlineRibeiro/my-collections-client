import { configureStore } from '@reduxjs/toolkit';
import  userReducer from '../features/authentication/userSlice';


export default configureStore({
  reducer: {
    user: userReducer,
  },
});