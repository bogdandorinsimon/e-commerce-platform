import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, ButtonProps, Typography } from "@mui/material";
import { useTranslate } from "hooks/useTranslate";
import { sxStyles } from "./styles";

type Props = {
  onClick: ButtonProps["onClick"];
};

export const AddToCartButton = ({ onClick }: Props) => {
  const { translate } = useTranslate();
  const classes = sxStyles();

  const handleClick = (event: any) => {
    if (!onClick) {
      return;
    }

    event.stopPropagation();

    onClick(event);
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      <ShoppingCartIcon sx={classes.icon} />
      <Typography variant="caption">
        {translate("articles.add_to_cart", "Add to cart")}
      </Typography>
    </Button>
  );
};
