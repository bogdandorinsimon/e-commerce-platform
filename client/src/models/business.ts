export type Article = {
  id: string;
  price: number;
  title: string;
  imageUrl: string;
  description: string;
  isFavorite: boolean;
};

export type CartItem = Article & {
  quantity: number;
};
