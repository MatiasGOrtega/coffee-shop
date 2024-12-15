export type ProductType = {
  id: number;
  productName: string;
  slug: string;
  productDescription: string;
  productActive: boolean;
  productPrice: number;
  productOrigin: string;
  productTest: string;
  productIsFeatured: boolean;
  productImage: {
    id: number;
    url: string;
  }[];
  category: {
    slug: string;
    categoryName: string;
  };
};
