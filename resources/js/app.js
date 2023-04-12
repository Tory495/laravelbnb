require('./bootstrap');

import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";


Vue.component('index', require("./components/Index.vue").default);
Vue.use(VueRouter);

let app = new Vue({
	el: '#app',
	router
});