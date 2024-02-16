import {createRouter, createWebHistory} from "vue-router";

import SingleProject from "./pages/SingleProject.vue";
import AppHome from "./pages/AppHome.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: SingleProject
        }
    ]
});

export {router};