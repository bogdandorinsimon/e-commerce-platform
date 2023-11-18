import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FormattedNumber } from "react-intl";
import { Article } from "features/articles/models";
import { sxStyles } from "./styles";

type Props = {
  article: Article;
};

export const ArticleCard = ({ article }: Props) => {
  const classes = sxStyles();

  return (
    <Card sx={classes.container}>
      <CardMedia
        sx={classes.image}
        image={article.imageUrl}
        title={article.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {article.title}
        </Typography>
        <Typography variant="body" color="text.secondary">
          {article.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography gutterBottom variant="h5">
          <FormattedNumber
            value={article.price}
            style="currency"
            currency="USD"
          />
        </Typography>
      </CardActions>
    </Card>
  );
};
