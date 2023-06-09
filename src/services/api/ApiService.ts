import instance from '@/services/api/instance'
import type { getAllProductsResponse } from '@/services/api/types'
import type { getAllTodosResponse } from '@/services/api/types'

// https://dummyjson.com/docs/products
export const getAllProducts = ():Promise<{data: getAllProductsResponse}> => {
  return instance.get('/products')
}

// https://dummyjson.com/docs/todos
export const getAllTodos = (limit: number, skip: number): Promise<{data: getAllTodosResponse}> => {
  return instance.get(`/todos?limit=${limit}&skip=${skip}`)
}
