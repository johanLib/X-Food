import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeDarkMode, initializeMenuToggle } from '@/script';

import '@/assets/style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

initializeDarkMode();
initializeMenuToggle();
