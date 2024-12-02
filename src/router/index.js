import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import HomePage from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'
console.log(Login);
const routes = [
    { path: '/login', component: Login },
    {
        path: '/',
        component: Layout,
        children: [
            { path: '/home', component: HomePage },
        ]
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router