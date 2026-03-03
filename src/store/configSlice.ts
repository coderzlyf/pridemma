import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fallbackData from "../../public/data.json";


export const fetchConfig = createAsyncThunk(
    "config/fetch",
    async () => {
      const res = await fetch("/api/config");
      return await res.json();
    }
);
  
const configSlice = createSlice({
    name: "config",
    initialState: {
        data: fallbackData,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchConfig.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchConfig.fulfilled, (state, action) => {
            state.data = action.payload; // override fallback
            state.loading = false;
          })
          .addCase(fetchConfig.rejected, (state) => {
            state.loading = false;
          });
    },
});
            
export default configSlice.reducer;