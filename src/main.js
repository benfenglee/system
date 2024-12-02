import './assets/reset.css'
import './assets/main.css'
import { createPinia } from 'pinia'
const pinia = createPinia()
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
