import { createSlice } from "@reduxjs/toolkit";

const estateSlice = createSlice({
  name: "estateList",
  initialState: {
    eatateList: {},
  },
  reducers: {
    updateEstateState: (state: any, action) => {
      state.estateList = action.payload;
    },
  },
});

export const { updateEstateState } = estateSlice.actions;

export default estateSlice.reducer;
