export const BASE_URL = "http://localhost:3000";

export const ARTICLE_KEYS = {
  all: ["articles"],
  lists: () => [...ARTICLE_KEYS.all, "lists"],
  article: (id: string) => [...ARTICLE_KEYS.all, id]
};
