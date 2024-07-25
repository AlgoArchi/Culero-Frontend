import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { statusReducer } from './status';
// import { createWrapper } from 'next-redux-wrapper';
import storage from 'redux-persist/lib/storage';
import {api} from './culero.api';
const rootReducer = combineReducers({
  'status': persistReducer(
    {
      key: 'status',
      storage,
      version: 1,
    },
    statusReducer,
  ),
  [api.reducerPath]: api.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
}); 


// const makeStore = () => store

// export const persistor = persistStore(store)
// export const wrapper = createWrapper(makeStore)

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;