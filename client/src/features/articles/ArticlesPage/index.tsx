import { Grid, Typography } from "@mui/material";
import { useTranslate } from "hooks/useTranslate";
import { PageWrapper } from "layout/PageWrapper";
import { ArticleCard } from "../components/ArticleCard";
import { Article } from "../models";
import { useArticles } from "../queries/useArticles";

const ArticlesPage = () => {
  const { translate } = useTranslate();

  const { articles, isLoading, isError, error } = useArticles();

  return (
    <PageWrapper isLoading={isLoading} isError={isError} error={error?.message}>
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 6 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      >
        {articles?.map((article: Article) => (
          <Grid item xs={2} sm={4} md={4} lg={3} key={article.id}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default ArticlesPage;
