import axios from 'axios'

export const fetchTodoList = () => {
  return axios.get('/api/todoList').then(({ data }) => {
    return data
  })
}

export const fetchAddTodo = ({ title }: any) => {
  return axios.post('/api/addTodo', { title }).then(({ data }) => {
    return data
  })
}

export const fetchRemoveTodo = (id: number) => {
  return axios.post('/api/removeTodo', { id }).then(({ data }) => {
    return data
  })
}
