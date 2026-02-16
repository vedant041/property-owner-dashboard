import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  properties: [],
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    addProperty: (state, action) => {
      state.properties.push(action.payload);
    },
  },
});

export const { addProperty } = propertySlice.actions;
export default propertySlice.reducer;
