import { defineStore } from 'pinia';
import { getAllTodos } from '@/services/api/ApiService';
export const useTodoStore = defineStore('todo', {
    state: () => {
        return {
            todos: []
        };
    },
    actions: {
        getTodos: async function (limit, skip) {
            this.todos = await getAllTodos(limit, skip).then((res) => res.data.todos);
        }
    }
});
