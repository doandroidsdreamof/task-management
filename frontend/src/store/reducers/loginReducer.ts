import { createSlice } from '@reduxjs/toolkit';

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    saveLoginEmail: (state, action) => {
      state.email = action.payload;
    },
    saveLoginPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export default loginFormSlice;
