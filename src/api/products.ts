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
  return client.get<Product[]>(`/${categorie}`);
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

//for /home Brand new models section
export const getHotProducts = () => {
  return client.get<Product[]>('/products/discount');
};

//for /home Hot prices section
export const getNewProducts = () => {
  return client.get<Product[]>('/products/new');
};
