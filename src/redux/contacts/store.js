// import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import { contactsReducer } from './ContactsSlice';
// import { filterReducer } from './FilterSlice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
// import { authReducer } from './auth/authSlice';
import { contactsReducer } from './ContactsSlice';
import { filterReducer } from './FilterSlice';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'redux/auth/authSlice';
// import { contactsReducers } from './contacts/contactSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
