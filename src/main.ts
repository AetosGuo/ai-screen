import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 暗色主题
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/index.css'
// 全局 Icon
import { Icon } from '@iconify/vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Icon', Icon)

app.mount('#app')
