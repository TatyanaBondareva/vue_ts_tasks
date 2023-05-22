import instance from '@/services/api/instance';
// https://dummyjson.com/docs/products
export const getAllProducts = () => {
    return instance.get('/products');
};
// https://dummyjson.com/docs/todos
export const getAllTodos = (limit, skip) => {
    return instance.get(`/todos?limit=${limit}&skip=${skip}`);
};
