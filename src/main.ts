import './styles/app.styl'
import App from '@/App.vue'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import router from '@/router'
import { createAxiostr } from 'axiostr'
console.log('🚀 ~ createAxiostr:', createAxiostr)

import 'element-plus/dist/index.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(createPinia())
app.mount('#app')

const axiostr = createAxiostr()
console.log('🚀 ~ axiostr:', axiostr)
