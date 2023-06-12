import { createApp } from 'vue'
import { create, NButton, NInput } from 'naive-ui'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const app = createApp(App)

const naive = create({
  components: [NButton, NInput],
})
const pinia = createPinia()

app.use(naive)
app.use(pinia)

app.mount('#app')
