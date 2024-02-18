import { DetailedProduct } from '../types/detailedProductType';
import { Product } from '../types/productType';
import { client } from '../utils/fetchClient';

//for /phones (better to make it universal and use getProductsByCategorie )
//(PagePhones)
export const getPhones = () => {
  return client.get<DetailedProduct[]>('/phones');
};

export const getProductByItemId = (id: string) => {
  return client.get<Product>(`/products/${id}`);
};

//for path /:category (need change route)
export const getProductsByCategorie = (categorie: string) => {
  return client.get<Product[]>(`/products/${categorie}`);
};

//for /products/:id/recommended (ProductPage)
export const getProductsRecommended = (id: string) => {
  return client.get<Product[]>(`/products/${id}/recommended`);
};

//for /:category/:id (ProductPage)
export const getProductByIdAndCategory = async (
  productId: string,
  category: string
) => {
  return await client.get<DetailedProduct>(`/${category}/${productId}`);
};

//to enter the number of products in category
export const getQuantityByCategory = (category: string) => {
  return client.get<Product[]>(`/${category}/quantity`);
};
