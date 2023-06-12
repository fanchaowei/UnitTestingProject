<script lang="ts">
  import { defineComponent } from 'vue'
  import TodoItem from './TodoItem.vue'
  import { useTodoStore } from '../store/todo'
  export default defineComponent({
    name: 'TodoList',
  })
</script>

<script setup lang="ts">
  const todoStore = useTodoStore()
</script>

<template>
  <ul v-for="todo in todoStore.todos" :key="todo.id">
    <li>
      <TodoItem :todo="todo" />
    </li>
  </ul>
</template>

<style scoped lang=""></style>
