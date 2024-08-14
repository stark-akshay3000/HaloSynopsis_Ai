import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from './article'; // Import your API slice

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer, // Add the API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware), // Add the API middleware
});

export default store;
