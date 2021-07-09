import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/MainPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

export const router = createRouter({
    history: createWebHistory(),
    //   base: process.env.BASE_URL,
    routes
})