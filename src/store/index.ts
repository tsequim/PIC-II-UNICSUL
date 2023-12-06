import { configureStore } from "@reduxjs/toolkit";

import rootCart from "./ducks/cart";
import rootAuth from "./ducks/auth";
import rootOrders from "./ducks/orders";

export default configureStore({
  reducer: {
    cart: rootCart,
    auth: rootAuth,
    orders: rootOrders,
  },
});
