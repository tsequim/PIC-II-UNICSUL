import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE: boolean = false;

export const setIsAuthenticated = createAction("SET_IS_AUTHENTICATED");
// export const removeItem = createAction("REMOVE_ITEM");

export default createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setIsAuthenticated, (state: any, action) => {
    return action.payload;
  });
});
