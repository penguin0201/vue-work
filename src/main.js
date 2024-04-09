import './assets/main.css'

// import 'element-plus/es/components/form-label/style/css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import { Axios } from 'axios'
import VueAxios from 'vue-axios'
import router from './router.js'

const app = createApp(App)

app.use(router);
app.use(ElementPlus)
// app.use(gsap)
app.use(VueAxios,Axios)
app.provide('Axios', app.config.globalProperties.axios)

app.mount('#app')
