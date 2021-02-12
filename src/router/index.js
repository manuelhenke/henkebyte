import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomeCard from "../components/WelcomeCard.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'WelcomeCard',
        component: WelcomeCard
    },
    {
        path: '/ios-calculator',
        name: 'Calculator',
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "ios-calculator" */ '../components/Calculator.vue')
    },
    {
        path: '/minesweeper',
        name: 'Minesweeper',
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "minesweeper" */ '../components/Minesweeper.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

export default router