export type TPost = {
  id: number;
  title: string;
  image: string;
  place: string;
  price: number;
  period: string;
  isActive: boolean;
};

export type TPostResponse = {
  posts: TPost[];
};
