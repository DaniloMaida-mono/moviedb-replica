import { createRouter, createWebHistory } from 'vue-router'
// import Home from '/src/views/Home.vue'
import Movie from '/src/views/Movie.vue'

const Home = () => import('/src/views/Home.vue')
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/movie/:id',
        name: 'movie',
        component: Movie,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
