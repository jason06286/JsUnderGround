import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import TurnTableLv9 from '@/views/TurnTableLv9.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/lv9',
        name: 'lv9',
        component: TurnTableLv9,
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;