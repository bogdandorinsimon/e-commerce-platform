import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { useShoppingCart } from "context/ShoppingCartProvider/useShoppingCart";

export const ShoppingCart = () => {
  const { cartQuantity } = useShoppingCart();

  const handleShoppingCartClick = () => {};

  return (
    <IconButton onClick={handleShoppingCartClick}>
      <Badge badgeContent={cartQuantity} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
