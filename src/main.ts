import './assets/main.css'
import './utils/theme-init'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

// Inicializar tema antes de montar a aplicação
import { useThemeStore } from './stores/theme'
const themeStore = useThemeStore()
themeStore.initializeTheme()

app.mount('#app')
