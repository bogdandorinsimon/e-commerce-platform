import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { useShoppingCart } from "context/ShoppingCartProvider/useShoppingCart";
import { useSideDrawer } from "context/SideDrawerProvider/useSideDrawer";
import { useTranslate } from "hooks/useTranslate";
import { CartDrawerContent } from "layout/CartDrawerContent";

export const ShoppingCart = () => {
  const { translate } = useTranslate();
  const { openSideDrawer } = useSideDrawer();
  const { cartQuantity } = useShoppingCart();

  const handleShoppingCartClick = () => {
    openSideDrawer({
      title: translate("common.shopping_cart", "Shopping cart"),
      content: <CartDrawerContent />
    });
  };

  return (
    <IconButton onClick={handleShoppingCartClick}>
      <Badge badgeContent={cartQuantity} color="error" id="cart-badge">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
