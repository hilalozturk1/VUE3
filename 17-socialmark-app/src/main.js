import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {appAxios} from './utils/appAxios'

import "@/assets/style.css"
import appHeader from "@/components/Common/appHeader"//global registering
import appBookmarkList from "@/components/Common/appBookmarkList"

import io from "socket.io-client";
const socket = io("http://localhost:2022");

const app = createApp(App);
app.component("AppHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$socket = socket;
app.mount('#app');
