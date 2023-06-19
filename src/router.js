import VueRouter from "vue-router";

import MainPage from "@/pages/MainPage";
import TodoPage from "@/pages/TodoPage";
import NotFoundPage from "@/pages/NotFoundPage";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/todo',
            name: 'TodoPage',
            component: TodoPage
        },
        {
            path: '*',
            name: 'NotFoundPage',
            component: NotFoundPage
        }
    ]
})

export default router;