import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        name : "HomePage",
        path : "/",
        component : () => import("@/views/HomePage")
    },
    {
        name : "LoginPage",
        path : "/login",
        component : () => import("@/views/LoginPage")
    },
    {
        name : "RegisterPage",
        path : "/register",
        component : () => import("@/views/RegisterPage")
    }
]

const router = createRouter({
    routes,
    history : createWebHashHistory()
});

export default router;