import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    navbarState: false,
  },
  reducers: {
    toggleNavBar: (state) => {
        state.navbarState = !state.navbarState

    },
  },
});

export default navbarSlice;
