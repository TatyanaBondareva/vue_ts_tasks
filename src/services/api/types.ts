export interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: Array<string>
}

export interface ITodo {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
}

export interface getAllProductsResponse {
    products: Array<IProduct>,
    total: number,
    skip: number,
    limit: number
}

export interface getAllTodosResponse {
    todos: Array<ITodo>,
    total: number,
    skip: number,
    limit: number
}
