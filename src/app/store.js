import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/authentication/userSlice";
import snackReducer from "../features/snacks/snackSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    snacks: snackReducer,
  },
});
