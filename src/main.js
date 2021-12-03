import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-plus'
import store from './store/index'
import 'element-plus/theme-chalk/index.css'
import './common/styles/common.css'
import './common/styles/icon.css'
import dataV from '@jiaminghi/data-view'


const app=createApp(App)
app.use(router)
app.use(Element)
app.use(store)
app.use(dataV)

app.mount('#app')
