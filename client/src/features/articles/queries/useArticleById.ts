import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ARTICLE_KEYS } from "api/constants";
import { Article } from "models/business";
import { getArticleById } from "../services";

export const useArticleById = (id: string) => {
  const {
    data: article,
    isLoading,
    isError,
    error
  } = useQuery<Article, AxiosError>(ARTICLE_KEYS.article(id), () =>
    getArticleById(id)
  );

  return { article, isLoading, isError, error };
};
