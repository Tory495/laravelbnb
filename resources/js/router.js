import VueRouter from 'vue-router';

export default new VueRouter({
	mode: "history",
	routes: [
		{ name: 'bookables', path: '/bookables', component: require('./bookables/Bookables').default },
		{ name: 'bookable', path: '/bookable/:id', component: require('./bookable/Bookable').default },
		{ name: 'review', path: '/review/:id', component: require('./review/Review').default },
		{ name: 'basket', path: '/basket', component: require('./basket/Basket').default },
		{ name: 'login', path: '/auth/login', component: require("./auth/Login").default },
		{ name: 'register', path: '/auth/register', component: require("./auth/Register").default },
		

	]
});