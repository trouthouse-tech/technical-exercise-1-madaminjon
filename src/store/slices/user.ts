import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  user?: {
    email: string;
    password: string;
  };
};

const initialState: InitialState = {
  user: {
    email: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = undefined;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
