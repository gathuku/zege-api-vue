import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import App from './App.vue'

export const routes=[
  {path:'',component:Login},
  {path:'/login',component:Login},
  {path:'/register',component:Register},
  {path:'home',name:'dashboard',component:Dashboard},
  //Redirect all other routes
  {path:'*', redirect:'/'}
];
