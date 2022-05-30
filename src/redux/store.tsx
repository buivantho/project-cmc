// import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";
import reducer, { RootState } from "./rootReducer.tsx";

const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
});

// export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export default store;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
