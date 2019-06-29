import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import App from './App.vue'

//home routes
import Dash from './components/home/Dash.vue'
import Balance from './components/home/Balance.vue'
import Topup from './components/home/Topup.vue'
import Transfer from './components/home/Transfer.vue'
import Notify from './components/home/Notify.vue'
import History from './components/home/History.vue'

export const routes=[
  {path:'',name:'Login', component:Login},
  {path:'/login',component:Login},
  {path:'/register',component:Register},
  {path:'/home', component:Dashboard, children:[
    {path:'',name:'dashboard',component:Dash},
    {path:'balance',name:'balance',component:Balance},
    {path:'topup',name:'topup',component:Topup},
    {path:'transfer',name:'transfer',component:Transfer},
    {path:'notify',name:'notify',component:Notify},
    {path:'history',name:'history',component:History},
  ]},
  //Redirect all other routes
  {path:'*', redirect:'/'}
];
