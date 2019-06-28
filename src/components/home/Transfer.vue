<template >
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-8">
              <div class="card">
                  <div class="card-header bg-primary"> <strong> Dashboard</strong></div>

                  <div class="card-body">
                    <div class="form-group col-md-5">
                     <label for="">Enter user Email </label>
                   <input class="form-control" type="text" name="madeTo" value="" required>
                   </div>
                   <div class="form-group col-md-5">
                     <label for="">Enter Amount</label>
                   <input class="form-control" type="text" name="amount" value="" required>
                   </div>
                   <div class="form-group">
                   <button class="btn btn-primary" type="submit" name="button">Submit</button>
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

      }
    },
    methods:{
      postTransfer(){
        this.axios.post('transaction/transfer',this.form)
      }
    },
    beforeCreate(){
      this.axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.token}`}
    },

  }
</script>
