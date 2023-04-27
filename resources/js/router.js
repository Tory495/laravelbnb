import VueRouter from 'vue-router';
import Index from './components/Index';

const routes = [
	{ name: 'home', path: '/home', component: require('./components/Home').default },
	{ name: 'example', path: '/example', component: require('./components/Example').default },
	{ name: 'bookables', path: '/bookables', component: require('./bookables/Bookables').default }
];

const router = new VueRouter({
	mode: "history",
	routes
});

export default router;