import { combineReducers } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import navbarSlice from './navbarSlice';

export const { saveUserName, saveEmail, savePassword, saveConfirmPassword, cleanUpForm } = formSlice.actions;
export const {toggleNavBar} = navbarSlice.actions;



export default combineReducers({
  formSlice: formSlice.reducer,
  navbarSlice: navbarSlice.reducer,

});
