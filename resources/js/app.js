require('./bootstrap');

import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import Home from "./components/Home";

Vue.component('index', require("./components/Index.vue").default);
Vue.component('example', require("./components/Example.vue").default);
Vue.use(VueRouter);


let app = new Vue({
	el: '#app',
	router,
	components: {
		"home": Home
	}
});