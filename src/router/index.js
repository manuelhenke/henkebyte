import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import PageNotFound from "@/pages/PageNotFound.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/ios-calculator',
        name: 'calculator',
        // route level code-splitting
        // this generates a separate chunk (calculator.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "calculator" */ '@/pages/Calculator.vue')
    },
    {
        path: '/minesweeper',
        name: 'minesweeper',
        // route level code-splitting
        // this generates a separate chunk (minesweeper.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "minesweeper" */ '@/pages/Minesweeper.vue')
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'page-not-found',
        component: PageNotFound 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router