import './styles/app.styl'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

import 'element-plus/dist/index.css'
import 'virtual:uno.css'
const app = createApp(App)

app.use(ElementPlus)

app.mount('#app')
