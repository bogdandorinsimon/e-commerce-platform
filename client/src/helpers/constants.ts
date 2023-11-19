export const ROUTER_PATH = {
  ARTICLES: "/",
  ARTICLE_DETAILS: "/articles/article-details/:articleId",
  CONTACT: "/contact",
  ABOUT: "/about",
  NOT_FOUND: "*"
};

export const CART_ITEMS_LOCAL_STORAGE_KEY = "shopping-cart-items";

export const BACK_ROUTE = -1;
export const DEFAULT_ROUTE = ROUTER_PATH.ARTICLES;

export const NAME_AND_EMAIL_MAX_LENGTH = 50;
export const NAME_REGEX = /^[A-Za-z][a-zA-Z'-]*$/;
