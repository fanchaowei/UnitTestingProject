<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{ msg: string }>()

  const count = ref(0)

  const inputVal = ref('')

  const handleAddTodo = () => {
    console.log('add todo', inputVal.value)
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
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
