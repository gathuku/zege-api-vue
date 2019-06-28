<template >
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-8">
              <div class="card">
                  <div class="card-header bg-primary"> <strong> Transfer Funds</strong></div>
                  <div class="card-body">
                    <div v-if="response.status == 'success'" class="alert alert-success">
                      {{response.message}}
                      {{response.sentTo}}
                      {{response.balance}}
                    </div>
                    <p class="text-danger">You can only transfer to registered users</p>
                    <div class="form-group col-md-5">
                     <label for="">Enter user Email </label>
                   <input v-model="form.email" class="form-control" type="text" name="madeTo" value="" required>
                   </div>
                   <div class="form-group col-md-5">
                     <label for="">Enter Amount</label>
                   <input v-model="form.amount" class="form-control" type="text" name="amount" value="" required>
                   </div>
                   <div class="form-group">
                   <button @click="postTransfer" class="btn btn-primary" type="submit" name="button">Submit</button>
                   </div>
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
      response:'',
      form:{
        email:'',
        amount:''
      }
      }
    },
    methods:{
      postTransfer(){
        this.axios.post('transaction/transfer',this.form).then(({data})=>{this.response=data})
      }
    },
    beforeCreate(){
      this.axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.token}`}
    },

  }
</script>
