import { Typography } from "@mui/material";
import { useTranslate } from "hooks/useTranslate";
import { PageWrapper } from "layout/PageWrapper";
import { Article } from "../models";
import { useArticles } from "../queries/useArticles";

const ArticlesPage = () => {
  const { translate } = useTranslate();

  const { articles, isLoading, isError, error } = useArticles();

  return (
    <PageWrapper isLoading={isLoading} isError={isError} error={error?.message}>
      <Typography>{translate("common.hello_world", "Hello World!")}</Typography>
      {articles?.map((article: Article) => (
        <Typography key={article.id}>{article.title}</Typography>
      ))}
    </PageWrapper>
  );
};

export default ArticlesPage;
