import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { pokemonApi } from '../api';

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    devTools: process.env.NODE_ENV == 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([pokemonApi.middleware]),
  });
  return store;
};

export const wrapper = createWrapper(makeStore);