import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, id: null, username: null, firstname: null, picture: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.id = action.payload.id;
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;
      state.value.picture = action.payload.picture;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.id = null;
      state.value.username = null;
      state.value.firstname = null;
      state.value.picture = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
