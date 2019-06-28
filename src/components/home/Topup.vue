<template >
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-8">
              <div class="card">
                  <div class="card-header bg-primary"> <strong> Dashboard</strong></div>

                  <div class="card-body">
                    <div v-if="response.status == 'success'" class="alert alert-success">
                      {{response.message}}
                      {{response.balance}}
                    </div>

                  <div class="form-group col-md-4">
                    <label for="">Enter Amount</label>
                  <input v-model="form.amount" class="form-control" type="text" name="madeTo" value="" required>
                  </div>
                  <div class="form-group">
                  <button @click="postTopup" class="btn btn-primary" name="button">Submit</button>
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
        response:{},
        form:{
          amount:'',
        }
      }
    },
    methods:{
      postTopup(){
        console.log(this.form)
        this.axios.post('transactions',this.form).then(({data})=>{this.response=data})
      }
    },
    beforeCreate(){
    this.axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.token}`}
    },
    created(){

    }
  }
</script>
