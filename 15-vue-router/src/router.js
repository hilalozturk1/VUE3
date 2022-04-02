import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage"
const routes = [
    {
        path: "/",
        component : HomePage
    },
    {
        path : "/about",
        component : () => import("@/views/AboutPage")
    }
];

const router =  createRouter({
    routes,
    history: createWebHistory()
});

export default router;