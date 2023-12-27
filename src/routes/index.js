import { createRouter, createWebHistory } from 'vue-router';

const pageHome = () => import('../pages/page-home.vue');

const routes = [
    {
        path: '/home',
        component: pageHome
    },
    {
        path: '/industria',
        component: () => import('../pages/page-industria.vue')
    },
    {
        path: '/estamos',
        component: () => import('../pages/page-estamos.vue')
    },
    {
        path: '/cliente',
        component: () => import('../pages/page-cliente.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;