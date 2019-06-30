<template >
  <div class="container">
      <div class="row">
          <div class="col-md-8">
              <div class="card">
                  <div class="card-header bg-primary"> <strong> Topup Account</strong></div>

                  <div class="card-body">
                    <div v-if="response.status == 'success'" class="alert alert-success">
                      {{response.message}}
                      {{response.balance}}
                    </div>

                  <div class="form-group">
                    <label for="">Enter Amount</label>
                  <input v-model="form.amount" class="form-control" type="text" name="madeTo" value="" required>
                  <div class="message text-danger">{{ validation.firstError('form.amount') }}</div>
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
import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;

  export default{
    data(){
      return{
        response:{},
        form:{
          amount:'',
        }
      }
    },

    validators: {
       'form.amount': function(value) {
         return Validator.value(value).required().digit().lessThan(100000);
       },

     },

    methods:{
      postTopup(){

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
