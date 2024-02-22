import { DetailedProduct } from '../types/detailedProductType';
import { Product } from '../types/productType';
import { CategoryCount } from '../types/quantityType';
import { client } from '../utils/fetchClient';

export const getPhones = () => {
  return client.get<DetailedProduct[]>('/phones');
};

export const getItemById = (itemId: string) => {
  return client.get<Product[]>(`/products/item/${itemId}`);
};

export const getProductsByCategorie = (categorie: string) => {
  return client.get<Product[]>(`/products/${categorie}`);
};

export const getProductsRecommended = (id: string) => {
  return client.get<Product[]>(`/products/${id}/recommended`);
};

export const getProductByIdAndCategory = async (
  productId: string,
  category: string
) => {
  return await client.get<DetailedProduct>(`/${category}/${productId}`);
};

export const getHotProducts = () => {
  return client.get<Product[]>('/products/discount');
};

export const getNewProducts = () => {
  return client.get<Product[]>('/products/new');
};

export const getQuantity = (category: string) => {
  return client.get<CategoryCount[]>(`/products/quantity?category=${category}`);
};
