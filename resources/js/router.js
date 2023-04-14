<<<<<<< HEAD
import {createRouter, createWebHashHistory} from 'vue-router';
import Index from './components/Index';

const routes = [
	{ path: '/', component: Index }
];

const router = createRouter({
	history: createWebHashHistory,
	routes
=======
import Index from './components/Index';
import VueRouter from 'vue-router';

const routes = [
    { path:'/', component: Index}
]

const router = new VueRouter({
    routes,
    mode: "history"
>>>>>>> refs/remotes/origin/main
});

export default router;