import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from "axios";//like plugin

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;//global
app.mount('#app');
