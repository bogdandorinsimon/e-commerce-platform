import { ReactNode, createContext, useCallback, useMemo } from "react";
import { CART_ITEMS_LOCAL_STORAGE_KEY } from "helpers/constants";
import { useLocalStorage } from "hooks/useLocalStorage";
import { Article, CartItem } from "models/business";

type ShoppingCartSignature = {
  cartItems: CartItem[];
  cartQuantity: number;
  getItemQuantity: (article: Article) => number;
  increaseItemQuantity: (article: Article) => void;
  decreaseItemQuantity: (article: Article) => void;
  removeItem: (article: Article) => void;
  clearCart: () => void;
};

export const ShoppingCartContext =
  createContext<Optional<ShoppingCartSignature>>(undefined);

type Props = {
  children: ReactNode;
};

export const ShoppingCartProvider = ({ children }: Props): JSX.Element => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    CART_ITEMS_LOCAL_STORAGE_KEY,
    []
  );

  const cartQuantity = useMemo(
    () => cartItems.reduce((quantity, item) => quantity + item.quantity, 0),
    [cartItems]
  );
  const getItemQuantity = useCallback(
    (article: Article) => {
      return cartItems.find((item) => item.id === article.id)?.quantity ?? 0;
    },
    [cartItems]
  );

  const increaseItemQuantity = useCallback(
    (article: Article) => {
      const existingItem = cartItems.find((item) => item.id === article.id);

      if (!existingItem) {
        setCartItems([...cartItems, { ...article, quantity: 1 }]);
      } else {
        const newCartItems = cartItems.map((item) =>
          item.id === article.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        setCartItems(newCartItems);
      }
    },
    [cartItems]
  );

  const removeItem = useCallback(
    (article: Article) => {
      setCartItems(cartItems.filter((item) => item.id !== article.id));
    },
    [cartItems]
  );

  const decreaseItemQuantity = useCallback(
    (article: Article) => {
      const existingItem = cartItems.find((item) => item.id === article.id);

      if (existingItem?.quantity === 1) {
        removeItem(article);
      } else {
        const newCartItems = cartItems.map((item) =>
          item.id === article.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );

        setCartItems(newCartItems);
      }
    },
    [cartItems]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const contextValue = useMemo(() => {
    return {
      cartQuantity,
      cartItems,
      getItemQuantity,
      increaseItemQuantity,
      decreaseItemQuantity,
      removeItem,
      clearCart
    };
  }, [cartItems]);

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
