import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Article, CartItem } from "models/business";

export type AppState = {
  cartItems: CartItem[];
};

const INITIAL_STATE: AppState = {
  cartItems: []
};

const appSlice = createSlice({
  name: "appSlice",
  initialState: INITIAL_STATE,
  reducers: {
    resetAppState() {
      return INITIAL_STATE;
    },
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
    },
    increaseItemQuantity: (state, action: PayloadAction<Article>) => {
      const cartItems = state.cartItems;
      const article = action.payload;

      const existingItem = cartItems.find((item) => item.id === article.id);

      if (!existingItem) {
        state.cartItems = [...cartItems, { ...article, quantity: 1 }];
      } else {
        const newCartItems = cartItems.map((item) =>
          item.id === article.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        state.cartItems = newCartItems;
      }
    },
    decreaseItemQuantity: (state, action: PayloadAction<Article>) => {
      const cartItems = state.cartItems;
      const article = action.payload;

      const existingItem = cartItems.find((item) => item.id === article.id);

      if (existingItem?.quantity === 1) {
        state.cartItems = cartItems.filter((item) => item.id !== article.id);
      } else {
        const newCartItems = cartItems.map((item) =>
          item.id === article.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );

        state.cartItems = newCartItems;
      }
    },
    removeItem: (state, action: PayloadAction<Article>) => {
      const cartItems = state.cartItems;
      const article = action.payload;

      state.cartItems = cartItems.filter((item) => item.id !== article.id);
    }
  }
});

export const {
  resetAppState,
  setCartItems,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem
} = appSlice.actions;

export default appSlice.reducer;
