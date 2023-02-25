import { configureStore } from '@reduxjs/toolkit';
import reducers from './slices/slicesIndex';

export const store = configureStore({
  reducer: {
    store: reducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
