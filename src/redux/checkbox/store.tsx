import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

export interface RootState {
  checkbox: ReturnType<typeof reducer>;
  // Add other reducers as needed
}

const store = configureStore({
  reducer: {
    checkbox: reducer,
  },
});

export default store;
