import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  index: [],
};

export const companySlice = createSlice({
  name: "companies",
  initialState: INITIAL_STATE,
  reducers: {
    loadCompanies: (state, action) => {
      return {
        ...state,
        index: action.payload,
      };
    },
  },
});

export const { loadCompanies } = companySlice.actions;

export default companySlice.reducer;
