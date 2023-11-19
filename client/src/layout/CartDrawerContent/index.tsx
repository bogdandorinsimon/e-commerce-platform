import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import { FormattedNumber } from "react-intl";
import { useConfirmationDialog } from "context/ConfirmationDialogProvider/useConfirmationDialog";
import { useShoppingCart } from "context/ShoppingCartProvider/useShoppingCart";
import { useSideDrawer } from "context/SideDrawerProvider/useSideDrawer";
import { getCartItemPrice, getCartTotalPrice } from "helpers/helpers";
import { useTranslate } from "hooks/useTranslate";
import { CartItem } from "models/business";
import { sxStyles } from "./styles";

export const CartDrawerContent = () => {
  const {
    cartItems,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
    clearCart
  } = useShoppingCart();
  const { closeSideDrawer } = useSideDrawer();
  const { getConfirmation } = useConfirmationDialog();
  const { translate } = useTranslate();
  const classes = sxStyles();

  const handleIncrementClick = (item: CartItem) => {
    increaseItemQuantity(item);
  };

  const handleDecrementClick = (item: CartItem) => {
    decreaseItemQuantity(item);
  };

  const handleSubmitClick = () => {
    closeSideDrawer();

    clearCart();
  };

  const handleRemoveClick = async (item: CartItem) => {
    const shouldRemove = await getConfirmation({
      title: translate("cart.confirmation_title", "Remove {title}", {
        title: item.title
      }),
      description: translate(
        "cart.confirmation_description",
        "Are you sure you want to remove {title}?",
        { title: item.title }
      ),
      confirmText: translate("cart.confirmation_remove", "Remove?", {
        title: item.title
      })
    });

    if (shouldRemove) {
      removeItem(item);
    }
  };

  const renderItemTitle = (item: CartItem) => (
    <Box sx={classes.rowSection}>
      <Typography variant="h4" sx={classes.title}>
        {item.title}
      </Typography>
      <IconButton onClick={() => handleRemoveClick(item)}>
        <RemoveCircleIcon color="error" />
      </IconButton>
    </Box>
  );

  const renderItemPriceSection = (item: CartItem) => (
    <Box sx={classes.rowSection}>
      <Typography variant="body">
        {translate("cart.price", "Price: {element}", {
          element: (
            <FormattedNumber
              value={item.price}
              style="currency"
              currency="USD"
            />
          )
        })}
      </Typography>
      <Typography variant="body">
        {translate("cart.total", "Total: {element}", {
          element: (
            <FormattedNumber
              value={getCartItemPrice(item)}
              style="currency"
              currency="USD"
            />
          )
        })}
      </Typography>
    </Box>
  );

  const renderItemQuantity = (item: CartItem) => (
    <Box sx={classes.rowSection}>
      <IconButton onClick={() => handleDecrementClick(item)}>
        <RemoveIcon />
      </IconButton>
      <Typography variant="body">{item.quantity}</Typography>
      <IconButton onClick={() => handleIncrementClick(item)}>
        <AddIcon />
      </IconButton>
    </Box>
  );

  const renderCartItem = (item: CartItem) => {
    return (
      <Stack key={item.id} sx={classes.itemInfo}>
        {renderItemTitle(item)}
        {renderItemPriceSection(item)}
        {renderItemQuantity(item)}
        <Divider sx={classes.divider} />
      </Stack>
    );
  };

  const renderTotal = () => (
    <Typography variant="h2">
      {translate("cart.total", "Total: {element}", {
        element: (
          <FormattedNumber
            value={getCartTotalPrice(cartItems)}
            style="currency"
            currency="USD"
          />
        )
      })}
    </Typography>
  );

  return (
    <Stack>
      {cartItems.map((item) => renderCartItem(item))}
      {renderTotal()}
      <Button
        variant="contained"
        onClick={handleSubmitClick}
        sx={classes.submit}
      >
        {translate("cart.submit", "Submit")}
      </Button>
    </Stack>
  );
};
