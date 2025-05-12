import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import store from '@/stores'
import router from '@/router'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'

import '@/styles/element/global.scss'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'

const app = createApp(App)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.use(store)
app.use(router)
app.mount('#app')
