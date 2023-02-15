import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'formValue',
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
    cleanUpForm: (state) => {
      (state.userName = ''), (state.email = ''), (state.password = ''), (state.confirmPassword = '');
    },
  },
});

export default formSlice;
