import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Todo } from '../../types/todo'
import { fetchAddTodo, fetchRemoveTodo, fetchTodoList } from '../server'

let id = 0
export const useTodoStore = defineStore('TodoStore', () => {
  const todos = ref<Todo[]>([])

  const createTodoItem = (id: number, title: string) => {
    return {
      id,
      title,
    }
  }

  const addTodo = async (title: string) => {
    const { data, state } = await fetchAddTodo({ title })

    const todo = createTodoItem(data.todo.id, data.todo.title)

    if (state) {
      todos.value.push(todo)
    }

    // if (title.startsWith('reverse:')) {
    //   title = title.slice(8).split('').reverse().join('')
    // }
    // todos.value.push({
    //   title,
    //   id: id++,
    // })
  }

  const removeTodo = async (id: number) => {
    const { data, state } = await fetchRemoveTodo(id)
    const todoItem = findTodo(id)

    if (state) {
      if (todoItem) {
        todos.value = todos.value.filter((todo) => todo.id !== id)
      }
    }
  }

  const findTodo = (id: number) => {
    return todos.value.find((todo) => todo.id === id)
  }

  return {
    todos,
    addTodo,
    removeTodo,
  }
})
