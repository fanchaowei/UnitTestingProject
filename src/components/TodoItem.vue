<script lang="ts">
  import { defineComponent } from 'vue'
  import { useTodoStore } from '../store/todo'
  export default defineComponent({
    name: 'TodoItem',
  })
</script>

<script setup lang="ts">
  const todoStore = useTodoStore()

  defineProps<{
    todo: {
      title: string
      id: number
    }
  }>()
</script>

<template>
  <div>
    <h3>{{ todo.title }}</h3>
    <n-button @click="todoStore.removeTodo(todo.id)">remove</n-button>
  </div>
</template>

<style scoped lang=""></style>
