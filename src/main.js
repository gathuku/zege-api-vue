import Vue from 'vue'
import App from './App.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import {routes} from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Moment from 'moment'

Vue.use(VueAxios, axios)
//axios.defaults.baseURL = 'https://zege-api.herokuapp.com/v1/'
axios.defaults.baseURL = 'http://localhost:3000/v1/'
//axios.defaults.headers.common = {'Authorization': `Bearer ${this.accessToken}`}
//Date filter
Vue.filter('dateFilter',function(createdAt){
  return Moment(createdAt).format('MMMM Do YYYY')
})

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
