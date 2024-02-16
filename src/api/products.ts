import { DetailedProduct } from '../types/detailedProductType';
import { Product } from '../types/productType';
import { client } from '../utils/fetchClient';

export const getPhones = () => {
  return client.get<DetailedProduct[]>('/phones');
};

export const getProductByItemId = (id: string) => {
  return client.get<Product>(`/products/${id}`);
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

// export const addTodo = ({ title, userId, completed }: Omit<Todo, 'id'>) => {
//   return client.post<Todo>('/todos', { title, userId, completed });
// };

// export const deleteTodo = (todoId: number) => {
//   return client.delete(`/todos/${todoId}`);
// };

// export const updateTodo = (
//   url: number, data: Partial<Todo>,
// ): Promise<Todo> => {
//   return client.patch(`/todos/${url}`, data);
// };import { Todo } from '../types/Todo';
// import { client } from '../utils/fetchClient';

// export const getTodos = (userId: number) => {
//   return client.get<Todo[]>(`/todos?userId=${userId}`);
// };

// export const addTodo = ({ title, userId, completed }: Omit<Todo, 'id'>) => {
//   return client.post<Todo>('/todos', { title, userId, completed });
// };

// export const deleteTodo = (todoId: number) => {
//   return client.delete(`/todos/${todoId}`);
// };

// export const updateTodo = (
//   url: number, data: Partial<Todo>,
// ): Promise<Todo> => {
//   return client.patch(`/todos/${url}`, data);
// };
