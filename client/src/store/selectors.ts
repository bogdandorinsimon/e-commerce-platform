import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/index";
import { CartItem } from "models/business";

const getAppState = (state: RootState) => state.appState;

export const getCartItems = createSelector(
  [getAppState],
  (appState) => appState.cartItems
);

export const getCartTotalQuantity = createSelector(
  [getCartItems],
  (cartItems) =>
    cartItems.reduce(
      (quantity: CartItem["quantity"], item: CartItem) =>
        quantity + item.quantity,
      0
    )
);
