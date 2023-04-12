require('./bootstrap');

import Vue from "vue";

let app = new Vue({
	el: '#app',
	template: "<h1>Hello vue!</h1>",
	data: {
		message: 'Hello Vue!'
	}
});