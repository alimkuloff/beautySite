export type Product = {
  id: number|string;
  name: string;
  brand: string;
  price: string ;
  image_link: string;
  description: string;
  category: string;
  product_type: string;
  [key: string]: any;
  pathname?: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type favoritesSlice = {
  items: Product[];
  action : string;
  payload: any;
};


