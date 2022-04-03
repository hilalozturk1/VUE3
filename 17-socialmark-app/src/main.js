import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import appAxios from './utils/appAxios'

import "@/assets/style.css"
import appHeader from "@/components/Common/appHeader"//global registering
import appBookmarkList from "@/components/Common/appBookmarkList"

const app = createApp(App);
app.component("AppHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router);
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app');
