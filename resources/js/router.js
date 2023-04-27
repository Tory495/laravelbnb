import VueRouter from 'vue-router';
import Index from './components/Index';

const routes = [
	{ path: '/', component: Index }
];

const router = new VueRouter({
	mode: "history",
	routes
});

export default router;