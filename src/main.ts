import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store, key} from './store'
import './style/index.scss'

createApp(App).use(router).use(store, key).mount('#app')
