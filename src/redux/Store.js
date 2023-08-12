import { configureStore } from "@reduxjs/toolkit";
import HabitReducer from "./reducer/HabitReducer";

// redux store settings
const Store = configureStore({
  reducer: {
    habits: HabitReducer,
  },
});

export default Store;
