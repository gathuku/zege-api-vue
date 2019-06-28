<template >
  <div class="containder" id="app">
    <div class="text-center mt-4">
      <h3 class="text-primary">Zege Application</h3>
      <router-link to="/register">
          <button class="btn btn-primary" type="button" name="button">Register</button>
      </router-link>

          <router-link to="/login">
              <button class="btn btn-primary" type="button" name="button">Login</button>
         </router-link>

          <br> <br>
         <div class="content-justify-center">
           <router-view></router-view>
         </div>

     </div>


  </div>
</template>
