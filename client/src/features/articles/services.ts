import { Http } from "api/http";
import { Article } from "models/business";

const ARTICLE_SERVICE_ROUTES = {
  articles: () => "articles",
  articleById: (id: string) => `articles/${id}`
};

export const getArticles = (): Promise<Article[]> => {
  return Http.base
    .get<Article[]>(ARTICLE_SERVICE_ROUTES.articles())
    .then((response) => response.data);
};

export const getArticleById = (id: string) => {
  return Http.base
    .get<Article>(ARTICLE_SERVICE_ROUTES.articleById(id))
    .then((response) => response.data);
};

export const updateArticle = (article: Article) => {
  return Http.base
    .put<Article>(ARTICLE_SERVICE_ROUTES.articleById(article.id), {
      ...article
    })
    .then((response) => response.data);
};
