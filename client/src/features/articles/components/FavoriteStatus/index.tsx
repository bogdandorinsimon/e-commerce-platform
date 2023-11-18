import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";

type Props = {
  isFavorite: boolean;
  onClick: () => void;
};

export const FavoriteStatus = ({ isFavorite, onClick }: Props) => {
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
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </Button>
  );
};
