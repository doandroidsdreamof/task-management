import { createSlice } from '@reduxjs/toolkit';

const registerFormSlice = createSlice({
  name: 'registerForm',
  initialState: {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  reducers: {
    saveUserName: (state, action) => {
      state.userName = action.payload;
    },
    saveEmail: (state, action) => {
      state.email = action.payload;
    },
    savePassword: (state, action) => {
      state.password = action.payload;
    },
    saveConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
  },
});

export default registerFormSlice;
