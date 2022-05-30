import { combineReducers } from "redux";
import { AnyAction, Reducer } from "@reduxjs/toolkit";
import appReducer, { initialAppState } from "./Slices/app.ts";

export * from "./Slices/app.ts";

const productReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return productReducer(state, action);
};
export default rootReducer;
