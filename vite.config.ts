// 注意，这里使用的是 vitest/config，而不是 vite/config
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // 你可以在这里配置你的测试统一执行的文件
    setupFiles: ['./vitest.setup.ts'],
    // 你可以在这里配置你的测试环境
    environment: 'happy-dom',
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
