import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "context/ShoppingCartProvider/useShoppingCart";
import { ROUTER_PATH } from "helpers/constants";
import { PageWrapper } from "layout/PageWrapper";
import { ArticleCard } from "../components/ArticleCard";
import { Article } from "../models";
import { useUpdateArticle } from "../mutations/useUpdateArticle";
import { useArticles } from "../queries/useArticles";

const ArticlesPage = () => {
  const navigate = useNavigate();
  const { articles, isLoading, isError, error } = useArticles();
  const { increaseItemQuantity } = useShoppingCart();
  const { updateArticle } = useUpdateArticle();

  const handleArticleClick = (article: Article) => {
    navigate(ROUTER_PATH.ARTICLE_DETAILS.replace(":articleId", article.id));
  };

  const handleAddToCart = (article: Article) => {
    increaseItemQuantity(article.id);
  };

  const handleFavoriteClick = (article: Article) => {
    updateArticle({ ...article, isFavorite: !article.isFavorite });
  };

  return (
    <PageWrapper isLoading={isLoading} isError={isError} error={error?.message}>
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 6 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      >
        {articles?.map((article: Article) => (
          <Grid item xs={2} sm={4} md={4} lg={3} key={article.id}>
            <ArticleCard
              article={article}
              onClick={() => handleArticleClick(article)}
              handleAddToCart={() => handleAddToCart(article)}
              handleFavoriteClick={() => handleFavoriteClick(article)}
            />
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default ArticlesPage;
