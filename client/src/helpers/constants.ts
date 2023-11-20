export const ROUTER_PATH = {
  ARTICLES: "/",
  ARTICLE_DETAILS: "/articles/article-details/:articleId",
  CONTACT: "/contact",
  ABOUT: "/about",
  NOT_FOUND: "*"
};

export const ARTICLE_KEYS = {
  all: ["articles"],
  lists: () => [...ARTICLE_KEYS.all, "lists"],
  article: (id: string) => [...ARTICLE_KEYS.all, id]
};

export const CART_ITEMS_LOCAL_STORAGE_KEY = "shopping-cart-items";
export const DEFAULT_ROUTE = ROUTER_PATH.ARTICLES;
