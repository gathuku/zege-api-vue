import Vue from 'vue'
import App from './App.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import {routes} from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://127.0.0.1:3000/v1/'
//axios.defaults.headers.common = {'Authorization': `Bearer ${this.accessToken}`}

Vue.use(VueRouter);

const router=new VueRouter({
  routes,
  mode:'history',
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,

}).$mount('#app')
