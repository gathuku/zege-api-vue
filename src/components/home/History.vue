<template >
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-8">
              <div class="card">
                  <div class="card-header bg-primary"> <strong> Dashboard</strong></div>

                  <div class="card-body">


                    History
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
       history:{}
      }
    },

    beforeCreate(){
      this.axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.token}`}
    },

    created(){
     this.axios.get('history').then(({data})=>{this.history=data})
    }
  }
</script>
