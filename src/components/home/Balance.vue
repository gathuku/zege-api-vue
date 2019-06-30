<template >
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-8">
              <div class="card">
                  <div class="card-header bg-primary"> <strong>Balance</strong></div>

                  <div class="card-body">
                    <h4>Your balance is <span class="text-warning">Ksh {{balance.balance}}</span> </h4>
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
        balance:''
      }
    },
    methods:{
      loadBalance(){
        this.axios.get('balance').then(({data})=>{this.balance=data})
      }
    },

    beforeCreate(){
      this.axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.token}`}
    },
    created(){
      this.loadBalance()
    }
  }
</script>
