<template >
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <a class="navbar-brand" href="#">Zege</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link :to="{name:'dashboard'}" class="nav-item nav-link active">Dashboard </router-link>
          <router-link :to="{name:'balance'}" class="nav-item nav-link">Balance</router-link>

          <router-link :to="{name:'topup'}" class="nav-item nav-link">Top up</router-link>
          <router-link :to="{name:'transfer'}" class="nav-item nav-link ">Transfer</router-link>
          <router-link :to="{name:'notify'}"  class="nav-item nav-link" href="#">Nofification</router-link>
          <a @click="logout" class="nav-item nav-link">Logout</a>
        </div>
      </div>
    </nav>
    <br><br>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default{
data(){
  return{
  response:{}
  }
},
methods:{
  logout(){
    this.axios.delete('sessions').then(({data})=>{
      this.response=data
      //Clear Token
      localStorage.token=null
      this.$parent.status=false
      //redirect
      this.$router.push({name:'Login'})
    })
  }
},
beforeCreate(){

  if (localStorage.token === 'null') {
    this.$parent.status=false
    this.$router.push({name:'Login'})
  }
  this.axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.token}`}
},
}

</script>
