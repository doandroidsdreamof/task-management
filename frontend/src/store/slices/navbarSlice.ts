import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    navbarState: false,
  },
  reducers: {
    toggleNavbar: (state) => {
        state.navbarState = !state.navbarState
    },
    resetNavbar: (state) => {
      state.navbarState = false;
  },
  },
});

export default navbarSlice;
