import { useContext } from "react";
import { ShoppingCartContext } from "./index";

export const useShoppingCart = () => {
  const shoppingCart = useContext(ShoppingCartContext);

  if (!shoppingCart) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }

  return shoppingCart;
};
