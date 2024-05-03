import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    like: (state, action) => {
      state.value.push(action.payload);
    },
    dislike: (state, action) => {
      state.value = state.value.filter((like) => like.id !== action.payload.id);
    },
  },
});

export const { like, dislike } = likeSlice.actions;
export default likeSlice.reducer;
