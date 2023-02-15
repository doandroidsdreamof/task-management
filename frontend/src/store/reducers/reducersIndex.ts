import { combineReducers } from '@reduxjs/toolkit';
import formSlice from './formReducer';

export const { saveUserName, saveEmail, savePassword, saveConfirmPassword, cleanUpForm } = formSlice.actions;

export default combineReducers({
  formSlice: formSlice.reducer,

});
