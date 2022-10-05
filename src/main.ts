import { createApp } from 'vue'
import './style.css'
import "./assets/tailwind.css"
import "./assets/custom-scroll.css"
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)

import router from "./router";
app.use(router)
app.use(pinia)
app.mount('#app')
