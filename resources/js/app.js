require('./bootstrap');

import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import Index from './components/Index';

Vue.use(VueRouter);


let app = new Vue({
	el: '#app',
	router,
	components: {
		"index": Index
	}
});