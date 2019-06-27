import Dashboard from './components/Dashboard.vue'

export const routes=[

  {path:'',component:Dashboard},
  //Redirect all other routes
  {path:'*', redirect:'/'}
];
