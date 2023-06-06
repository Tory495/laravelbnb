require('./bootstrap');

// import components
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import Index from './components/Index';
import BootstrapVue from "bootstrap-vue";
import StarRating from "./shared/components/StarRating";
import FatalError from "./shared/components/FatalError";

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import libraries
import moment from "moment";


Vue.use(VueRouter).use(BootstrapVue).filter("fromNow", value => moment(value).fromNow());
Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);

let app = new Vue({
	el: '#app',
	router,
	components: {
		Index,
	}
});