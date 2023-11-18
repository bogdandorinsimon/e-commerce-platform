import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState
} from "react";
import { Article } from "features/articles/models";
import { CartItem } from "models/cart";

type ShoppingCartSignature = {
  cartQuantity: number;
  getItemQuantity: (id: Article["id"]) => number;
  increaseItemQuantity: (id: Article["id"]) => void;
  decreaseItemQuantity: (id: Article["id"]) => void;
  removeItem: (id: Article["id"]) => void;
};

export const ShoppingCartContext =
  createContext<Optional<ShoppingCartSignature>>(undefined);

type Props = {
  children: ReactNode;
};

export const ShoppingCartProvider = ({ children }: Props): JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQuantity = useCallback(
    (id: Article["id"]) => {
      return cartItems.find((item) => item.id === id)?.quantity ?? 0;
    },
    [cartItems]
  );

  const increaseItemQuantity = useCallback(
    (id: Article["id"]) => {
      const existingItem = cartItems.find((item) => item.id === id);

      if (!existingItem) {
        setCartItems([...cartItems, { id, quantity: 1 }]);
      } else {
        const newCartItems = cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );

        setCartItems(newCartItems);
      }
    },
    [cartItems]
  );

  const removeItem = useCallback(
    (id: Article["id"]) => {
      setCartItems(cartItems.filter((item) => item.id !== id));
    },
    [cartItems]
  );

  const decreaseItemQuantity = useCallback(
    (id: Article["id"]) => {
      const existingItem = cartItems.find((item) => item.id === id);

      if (existingItem?.quantity === 1) {
        removeItem(id);
      } else {
        const newCartItems = cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );

        setCartItems(newCartItems);
      }
    },
    [cartItems]
  );

  const contextValue = useMemo(() => {
    return {
      cartQuantity: cartItems.length,
      getItemQuantity,
      increaseItemQuantity,
      decreaseItemQuantity,
      removeItem
    };
  }, [cartItems]);

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
