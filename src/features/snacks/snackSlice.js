import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  index: [],
};

export const snackSlice = createSlice({
  name: "snacks",
  initialState: INITIAL_STATE,
  reducers: {
    loadSnacks: (state, action) => {
      return {
        ...state,
        index: action.payload,
      };
    },
  },
});

export const { loadSnacks } = snackSlice.actions;

export default snackSlice.reducer;
