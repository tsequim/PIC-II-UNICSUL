import { createAction, createReducer } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const INITIAL_STATE: any = [];

export const loadCache = createAction("LOAD_CACHE");
export const addItem = createAction("ADD_ITEM");
export const removeItem = createAction("REMOVE_ITEM");

export default createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(loadCache, (state: any, action) => {
      return action.payload;
    })
    .addCase(addItem, (state: any, action) => {
      const newState = [...state, action.payload];

      AsyncStorage.setItem("@BakeBliss:cart", JSON.stringify(newState));

      return newState;
    })
    .addCase(removeItem, (state: any, action) => {
      const newState = state.filter((item: any) => item.id != action.payload);

      AsyncStorage.setItem("@BakeBliss:cart", JSON.stringify(newState));

      return newState;
    });
});
