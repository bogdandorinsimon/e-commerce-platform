import { CartItem } from "models/business";

export const getCartTotalPrice = (cartItems: CartItem[]) => {
  return cartItems.reduce(
    (price, cartItem) => price + getCartItemPrice(cartItem),
    0
  );
};

export const getCartItemPrice = (cartItem: CartItem) => {
  return cartItem.price * cartItem.quantity;
};
