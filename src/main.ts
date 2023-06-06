import { createApp } from 'vue'
import { create, NButton, NInput } from 'naive-ui'

import './style.css'
import App from './App.vue'

const app = createApp(App)

const naive = create({
  components: [NButton, NInput],
})
app.use(naive)

app.mount('#app')
