import { configureStore } from '@reduxjs/toolkit';
 import reducers from './reducers/reducersIndex';



export const store = configureStore({
  reducer: {
    registerForm: reducers,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;