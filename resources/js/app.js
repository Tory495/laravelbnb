require('./bootstrap');

import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import Index from './components/Index';
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter).use(BootstrapVue);


let app = new Vue({
	el: '#app',
	router,
	components: {
		"index": Index
	}
});