import { Http } from "api/http";
import { Article } from "./models";

const ARTICLE_SERVICE_ROUTES = {
  articles: () => "articles",
  articleById: (id: string) => `articles?id=${id}`
};

export const getArticles = (): Promise<Article[]> => {
  return Http.base
    .get<Article[]>(ARTICLE_SERVICE_ROUTES.articles())
    .then((response) => response.data);
};

export const getArticleById = (id: string) => {
  return Http.base
    .get<Article[]>(ARTICLE_SERVICE_ROUTES.articleById(id))
    .then((response) => response.data);
};
