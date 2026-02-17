import { createSlice } from "@reduxjs/toolkit";
import { propertyList } from "../data/propertyList";

/* ================= INITIAL STATE ================= */

const initialState = {
  // ⭐ IMPORTANT
  // load default properties into redux
  properties: propertyList,
};

const propertySlice = createSlice({
  name: "property",
  initialState,

  reducers: {

    /* ADD PROPERTY */
    addProperty: (state, action) => {
      state.properties.push(action.payload);
    },

    /* REMOVE PROPERTY */
    removeProperty: (state, action) => {
      state.properties = state.properties.filter(
        (p) => p.id !== action.payload
      );
    },

  },
});

export const { addProperty, removeProperty } =
  propertySlice.actions;

export default propertySlice.reducer;
