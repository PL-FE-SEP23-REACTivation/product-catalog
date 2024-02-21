import { DetailedProduct } from '../types/detailedProductType';
import { Product } from '../types/productType';
import { Quantity } from '../types/quantityType';
import { client } from '../utils/fetchClient';

//for /phones (better to make it universal and use getProductsByCategorie )
//(PagePhones)
export const getPhones = () => {
  return client.get<DetailedProduct[]>('/phones');
};

export const getItemById = (itemId: string) => {
  return client.get<Product[]>(`/products/item/${itemId}`);
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

//for /home Brand new models section
export const getHotProducts = () => {
  return client.get<Product[]>('/products/discount');
};

//for /home Hot prices section
export const getNewProducts = () => {
  return client.get<Product[]>('/products/new');
};

//to enter the number of products in category
export const getQuantityByCategory = (category: string) => {
  return client.get<Quantity>(`/products/${category}/quantity`);
};
