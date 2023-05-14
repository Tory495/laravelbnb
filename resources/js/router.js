import VueRouter from 'vue-router';

export default new VueRouter({
	mode: "history",
	routes: [
		{ name: 'home', path: '/home', component: require('./components/Home').default },
		{ name: 'example', path: '/example', component: require('./components/Example').default },
		{ name: 'bookables', path: '/bookables', component: require('./bookables/Bookables').default },
		{ name: 'bookable', path: '/bookable/:id', component: require('./bookable/Bookable').default },
		{ name: 'review', path: '/review/:id', component: require('./review/Review').default }
	]
});