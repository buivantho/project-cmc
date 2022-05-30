import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export interface appState {
  user: {
    token: string;
    data: {
      email: string;
      full_name: string
    }
  };
}

export const initialAppState: appState = {
  user: {
    token: "",
    data: {
      email: "",
      full_name: ""
    }
  },
};

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  }
});

export const {login} = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
