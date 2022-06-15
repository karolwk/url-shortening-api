import { configureStore } from '@reduxjs/toolkit';
import { shortedApi } from './services/api';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import domainsReducer from './slices/domains.slice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'domains',
  storage,
};

const persitedReducer = persistReducer(persistConfig, domainsReducer);

export const store = configureStore({
  reducer: {
    [shortedApi.reducerPath]: shortedApi.reducer,
    domains: persitedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(shortedApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
