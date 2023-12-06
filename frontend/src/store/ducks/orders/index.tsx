import { createAction, createReducer } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const INITIAL_STATE: any = [];

export const loadCache = createAction("LOAD_CACHE");
export const addOrder = createAction("ADD_ORDER");
export const removeOrder = createAction("REMOVE_ORDER");

export default createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(loadCache, (state: any, action) => {
      return action.payload;
    })
    .addCase(addOrder, (state: any, action) => {
      const newState = [...state, action.payload];

      AsyncStorage.getItem("@BakeBliss:orders").then((obj: any) => {
        const currentOrdersList = JSON.parse(obj);
        let newArr = newState;
        if (currentOrdersList) {
          newArr = [...currentOrdersList, ...newState];
        }
        AsyncStorage.setItem("@BakeBliss:orders", JSON.stringify(newArr));
      });

      return newState;
    })
    .addCase(removeOrder, (state: any, action) => {
      const newState = state.filter((item: any) => item.id != action.payload);

      AsyncStorage.setItem("@BakeBliss:orders", JSON.stringify(newState));

      return newState;
    });
});
