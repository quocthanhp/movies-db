import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import searchReducer from "./searchSlice";

const initStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
    },
  })
};

export const wrapper = createWrapper(initStore);