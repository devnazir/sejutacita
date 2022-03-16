import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { booksApi } from "services/books.service";
import { categoriesApi } from "services/categories.service";
import favouritesReducer from "./favourites/favourites.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favourites"],
};

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  [booksApi.reducerPath]: booksApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (gdm) => [
    ...gdm({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    booksApi.middleware,
    categoriesApi.middleware,
  ],
});

export let persistor = persistStore(store);
export default store;
