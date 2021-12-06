import { configureStore } from "@reduxjs/toolkit";
import { estateApi } from "../serveies/estateApi";
import estateReducer from "./estateSlice";
export const store = configureStore({
  reducer: {
    [estateApi.reducerPath]: estateApi.reducer,
    eatateList: estateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
