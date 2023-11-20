import { Box, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { FormattedNumber } from "react-intl";
import ImagePlaceholder from "assets/icons/png/ImagePlaceholder.png";
import { Article } from "models/business";
import { AddToCartButton } from "../AddToCartButton";
import { FavoriteStatus } from "../FavoriteStatus";
import { sxStyles } from "./styles";

type Props = {
  article: Article;
  onClick: () => void;
  handleAddToCart: () => void;
  handleFavoriteClick: () => void;
};

export const ArticleCard = ({
  article,
  onClick,
  handleAddToCart,
  handleFavoriteClick
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const classes = sxStyles();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderHoveredItems = () => {
    if (!isHovered) {
      return null;
    }

    return (
      <>
        <Box sx={classes.favoriteContainer}>
          <FavoriteStatus
            isFavorite={article.isFavorite}
            onClick={handleFavoriteClick}
          />
        </Box>
        <AddToCartButton onClick={handleAddToCart} />
      </>
    );
  };

  const renderImageSection = () => {
    return (
      <CardMedia
        sx={classes.cardMedia}
        image={article.imageUrl ?? ImagePlaceholder}
        title={article.title}
      >
        {renderHoveredItems()}
      </CardMedia>
    );
  };

  const renderContent = () => {
    return (
      <CardContent>
        <Typography gutterBottom variant="h5" sx={classes.text}>
          {article.title}
        </Typography>
        <Typography variant="body" color="text.secondary" sx={classes.text}>
          {article.description}
        </Typography>
      </CardContent>
    );
  };

  const renderActions = () => {
    return (
      <CardActions>
        <Typography gutterBottom variant="h5">
          <FormattedNumber
            value={article.price}
            style="currency"
            currency="USD"
          />
        </Typography>
      </CardActions>
    );
  };

  return (
    <Card>
      <CardActionArea
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {renderImageSection()}
        {renderContent()}
        {renderActions()}
      </CardActionArea>
    </Card>
  );
};
