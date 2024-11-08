import { configureStore } from "@reduxjs/toolkit";
import shoppingListSlice from "./shoppingListSlice";

export const store = configureStore({
  reducer: {
    shoppingList: shoppingListSlice,
  },
});
