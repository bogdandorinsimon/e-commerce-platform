import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ARTICLE_KEYS } from "helpers/constants";
import { Article } from "models/business";
import { getArticles } from "../services";

export const useArticles = () => {
  const {
    data: articles,
    isLoading,
    isError,
    error
  } = useQuery<Article[], AxiosError>(ARTICLE_KEYS.lists(), () =>
    getArticles()
  );

  return { articles, isLoading, isError, error };
};
