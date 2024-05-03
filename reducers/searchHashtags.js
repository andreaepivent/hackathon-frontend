import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { status: false, hashtag: null },
};

export const hashtagSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    searchOn: (state, action) => {
      state.value.status = true;
      state.value.hashtag = action.payload;
    },
    searchOff: (state) => {
      state.value.status = false;
      state.value.hashtag = null;
    },
  },
});

export const { searchOn, searchOff } = hashtagSlice.actions;
export default hashtagSlice.reducer;
