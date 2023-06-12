import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Todo } from '../../types/todo'

let id = 0
export const useTodoStore = defineStore('TodoStore', () => {
  const todos = ref<Todo[]>([])
  const addTodo = (title: string) => {
    if (title.startsWith('reverse:')) {
      title = title.slice(8).split('').reverse().join('')
    }

    todos.value.push({
      title,
      id: id++,
    })
  }

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  return {
    todos,
    addTodo,
    removeTodo,
  }
})
