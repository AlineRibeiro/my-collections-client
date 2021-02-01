import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  index: [],
};

export const collectionSlice = createSlice({
  name: "collections",
  initialState: INITIAL_STATE,
  reducers: {
    loadCollections: (state, action) => {
      return {
        ...state,
        index: action.payload,
      };
    },
  },
});

export const { loadCollections } = collectionSlice.actions;

export default collectionSlice.reducer;
