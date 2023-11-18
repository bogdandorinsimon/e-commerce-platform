import { Article } from "features/articles/models";

export type CartItem = {
  id: Article["id"];
  quantity: number;
};
