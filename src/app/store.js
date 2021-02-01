import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/authentication/userSlice";
import collectionReducer from "../features/collections/collectionSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    collections: collectionReducer,
  },
});
