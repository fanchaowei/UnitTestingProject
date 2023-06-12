<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import TodoList from './TodoList.vue'
  import { useTodoStore } from '../store/todo'
  export default defineComponent({
    name: 'HelloWrorld',
  })
</script>

<script setup lang="ts">
  defineProps<{ msg: string }>()
  const todoStore = useTodoStore()

  const count = ref(0)
  const inputVal = ref('')

  const handleAddTodo = () => {
    todoStore.addTodo(inputVal.value)
  }
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <div class="card">
    <n-input
      v-model:value="inputVal"
      @keyup.enter="handleAddTodo"
      type="text"
      placeholder=""
    ></n-input>
  </div>
  <div class="card">
    <TodoList />
  </div>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
