<template >
  <div class="containder" id="app">
    <div v-if="this.status" class="text-center mt-4">
      <h3 class="text-primary">Zege Application</h3>
      <div class="container">
        <router-link to="/register">
            <button class="btn btn-primary ml-1" type="button" name="button">Register</button>
            </router-link>

            <router-link to="/login">
                <button class="btn btn-primary ml-1" type="button" name="button">Login</button>
           </router-link>
        </div>


          <br> <br>
     </div>

     <div class="content-justify-center">
       <router-view></router-view>
     </div>


  </div>
</template>
<script>
export default{
  data(){
    return {
    status:true
    }
  },

}

</script>
