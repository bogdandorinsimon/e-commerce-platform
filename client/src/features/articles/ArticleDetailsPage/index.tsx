import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useTranslate } from "hooks/useTranslate";
import { PageWrapper } from "layout/PageWrapper";
import { useArticleById } from "../queries/useArticleById";

const ArticleDetailsPage = () => {
  const { translate } = useTranslate();
  const { articleId } = useParams();

  const { article } = useArticleById(articleId ?? "");

  return (
    <PageWrapper>
      {article && (
        <Typography>
          {translate("article_details.message", "This is the details page.", {
            title: article.title
          })}
        </Typography>
      )}
    </PageWrapper>
  );
};

export default ArticleDetailsPage;
