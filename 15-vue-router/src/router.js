import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage"
const routes = [
    {
        name: "HomePage",
        path: "/",
        component : HomePage
    },
    {
        name: "AboutPage",
        path : "/about",
        component : () => import("@/views/AboutPage")
    },
    {
        name:  "DetailsPage",
        path : "/details/:userID",
        component : () => import("@/views/DetailsPage")
    }
];

const router =  createRouter({
    routes,
    history: createWebHistory()
});

export default router;