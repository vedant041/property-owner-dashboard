import { createSlice } from "@reduxjs/toolkit";

const investorSlice = createSlice({
  name: "investor",
  initialState: {
    totalInvested: 30000,
    shareholders: [
      { name: "Michael Smith", shares: 1200, dividend: 3100, total: 30000 },
      { name: "Sarah Lee", shares: 1200, dividend: 3100, total: 30000 },
      { name: "James Brown", shares: 1200, dividend: 3100, total: 30000 },
    ],
  },
  reducers: {},
});

export default investorSlice.reducer;
