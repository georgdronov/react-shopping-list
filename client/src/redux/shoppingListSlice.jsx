// src/redux/shoppingListSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk(
  "shoppingList/fetchItems",
  async () => {
    const response = await axios.get("http://localhost:5000/api/items");
    return response.data;
  }
);

export const addItem = createAsyncThunk(
  "shoppingList/addItem",
  async (item) => {
    const response = await axios.post("http://localhost:5000/api/items", item);
    return response.data;
  }
);

export const deleteItem = createAsyncThunk(
  "shoppingList/deleteItem",
  async (id) => {
    await axios.delete(`http://localhost:5000/api/items/${id}`);
    return id;
  }
);

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default shoppingListSlice.reducer;
