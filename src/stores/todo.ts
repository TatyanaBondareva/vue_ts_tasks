import { defineStore } from 'pinia'
import type {getAllTodosResponse, ITodo} from "@/services/api/types";
import { getAllTodos } from '@/services/api/ApiService'

type State = {
  todos: Array<ITodo>
}
export const useTodoStore = defineStore('todo', {
  state: (): State => {
    return {
      todos: []
    }
  },
  actions: {
    getTodos: async function (limit: number, skip: number): Promise<void> {
      this.todos = await getAllTodos(limit, skip).then((res: {data: getAllTodosResponse}) => res.data.todos)
    }
  }
})
