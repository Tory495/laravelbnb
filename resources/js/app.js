require('./bootstrap');

// import components
import Vue from "vue";
import Vuex from "vuex"
import VueRouter from "vue-router";
import router from "./router";
import Index from './components/Index';
import BootstrapVue from "bootstrap-vue";
import StarRating from "./shared/components/StarRating";
import FatalError from "./shared/components/FatalError";
import Success from "./shared/components/Success";
import ValidationErrors from "./shared/components/ValidationErrors";
import storeDefinition from "./store";

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import libraries
import moment from "moment";


Vue.use(Vuex).use(VueRouter).use(BootstrapVue).filter("fromNow", value => moment(value).fromNow());
Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("success", Success);
Vue.component("v-errors", ValidationErrors)

const store = new Vuex.Store(storeDefinition);

let app = new Vue({
	el: '#app',
	router,
	store,
	components: {
		Index,
	}
});