import {createRouter, createWebHashHistory} from 'vue-router';
import Index from './components/Index';

const routes = [
	{ path: '/', component: Index }
];

const router = createRouter({
	history: createWebHashHistory,
	routes
});

export default router;