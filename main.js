import Vue from 'vue';
import App from './App';
import fetch from './server/http.js';
import api from './server/api.js';
import store from './store';
import encode from './util/encryption';

Object.assign(Vue.prototype,{
  fetch:fetch,
  encryption:encode
});
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
