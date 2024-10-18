import { CategoryT } from "./categoryTypes";

export type ProductT = {
  id: number;
  title: string;
  price: number;
  category: CategoryT;
  description: string;
  image: string;
};
