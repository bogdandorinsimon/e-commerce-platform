import {
  ButtonProps,
  CardActionArea,
  CardActionAreaProps
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { FormattedNumber } from "react-intl";
import { Article } from "features/articles/models";
import { AddToCartButton } from "../AddToCartButton";
import { sxStyles } from "./styles";

type Props = {
  article: Article;
  onClick: CardActionAreaProps["onClick"];
  handleAddToCart: ButtonProps["onClick"];
};

export const ArticleCard = ({ article, onClick, handleAddToCart }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const classes = sxStyles();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderImageSection = () => {
    return (
      <CardMedia
        sx={classes.cardMedia}
        image={article.imageUrl}
        title={article.title}
      >
        {isHovered && <AddToCartButton onClick={handleAddToCart} />}
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
          {article.title}
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
