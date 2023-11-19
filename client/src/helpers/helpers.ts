import { CartItem } from "models/business";

export const getCartItemPrice = (cartItem: CartItem) => {
  return cartItem.price * cartItem.quantity;
};

export const getCartTotalPrice = (cartItems: CartItem[]) => {
  return cartItems.reduce(
    (price, cartItem) => price + getCartItemPrice(cartItem),
    0
  );
};
