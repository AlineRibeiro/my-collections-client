import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/authentication/userSlice";
import companyReducer from "../features/companies/companySlice";

export default configureStore({
  reducer: {
    user: userReducer,
    companies: companyReducer,
  },
});
