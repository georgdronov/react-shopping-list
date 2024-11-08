import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const fetchItems = createAsyncThunk(
  "shoppingList/fetchItems",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/items`
    );
  }
);
