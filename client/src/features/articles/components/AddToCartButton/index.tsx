import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Typography } from "@mui/material";
import { useTranslate } from "hooks/useTranslate";
import { sxStyles } from "./styles";

type Props = {
  onClick: () => void;
};

export const AddToCartButton = ({ onClick }: Props) => {
  const { translate } = useTranslate();
  const classes = sxStyles();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!onClick) {
      return;
    }

    event.stopPropagation();

    onClick();
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
