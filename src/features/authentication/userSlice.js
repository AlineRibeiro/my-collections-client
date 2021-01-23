import { createSlice } from "@reduxjs/toolkit";

import { User } from "../../api/User";

const INITIAL_STATE = {
  email: "",
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    loadEmail: (state, action) => ({
      ...state,
      email: action.payload,
    }),
    loadId: (state, action) => ({
      ...state,
      id: action.payload,
    }),
  },
});

export const { loadEmail, loadId } = userSlice.actions;

export const loadSignUpData = (requestBody) => async (dispatch) => {
  User.create(requestBody).then((response) => {
    console.log(response);
    if (!response.errors) {
      dispatch(loadEmail(response.email));
      dispatch(loadId(response.id));
      alert("Your user has been created");
    } else {
      alert(
        "There has been an error. You need to set up a store for error messages"
      );
      // setMessageError(response.errors);
      // setErrorAlert(true);
    }
  });
};

export default userSlice.reducer;
