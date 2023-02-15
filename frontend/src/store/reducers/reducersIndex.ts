import { combineReducers } from '@reduxjs/toolkit';
import registerFormSlice from './registerReducer';
import loginFormSlice from './loginReducer';

export const { saveUserName, saveEmail, savePassword, saveConfirmPassword } = registerFormSlice.actions;
export const { saveLoginPassword, saveLoginEmail } = loginFormSlice.actions;

export default combineReducers({
  registerFormSlice: registerFormSlice.reducer,
  loginFormSlice: loginFormSlice.reducer,
});
