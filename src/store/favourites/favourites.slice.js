import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      state.value.push(action.payload);
    },

    removeFromFavourite: (state, action) => {
      const filter = state.value.filter(
        (state) => state.id !== action.payload.id
      );
      state.value = filter;
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
