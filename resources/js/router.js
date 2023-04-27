import VueRouter from 'vue-router';
import Index from './components/Index';

const routes = [
	{ name: 'home', path: '/home', component: require('./components/Home').default },
	{ name: 'example', path: '/example', component: require('./components/Example').default },
];

const router = new VueRouter({
	mode: "history",
	routes
});

export default router;