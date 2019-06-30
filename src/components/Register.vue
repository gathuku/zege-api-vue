<template>
  <div class="container">
    <div class="row justify-content-center mt-2">
      <div class="col-md-4">
        <div v-if="loader" class="spinner-border text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div v-if="response.status == 'error'" class="alert alert-danger">
          {{response.message}}
        </div>
        <h4>Register</h4>
        <div class="form-group">
          <label for="">Email</label>
          <input v-model="form.email" class="form-control" type="text" name="" value="" autofocus>
          <div class="message text-danger">{{ validation.firstError('form.email') }}</div>
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input v-model="form.password" class="form-control" type="password" name="" value="">
          <div class="message text-danger">{{ validation.firstError('form.password') }}</div>
        </div>
        <div class="form-group">
          <label for="">Confirm Password</label>
          <input v-model="form.password_confirmation" class="form-control" type="password" name="" value="">
         <div class="message text-danger">{{ validation.firstError('form.password_confirmation') }}</div>
        </div>
        <div class="form-group">

          <input @click="postRegister" class="btn btn-primary" type="submit" name="" value="Register">
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
        loader:'',
        form:{
          email:'',
          password:'',
          password_confirmation:''
        }
       }
     },

    //Validation
    validators: {
       'form.email': function(value) {
         return Validator.value(value).required().email();
       },

       'form.password': function(value) {
         return Validator.value(value).required().minLength(6)
       },
       'form.password_confirmation, form.password': function (password_confirmation, password) {
        if (this.submitted || this.validation.isTouched('form.password_confirmation')) {
          return Validator.value(password_confirmation).required().match(password);
        }
     }
   },

    methods:{
      register(){
        this.axios.post('users',this.form).then(({data}) => {this.response=data})
      },

      postRegister(){
        if (this.form.email != '' && this.form.password !='' && this.form.password_confirmation) {
          this.loader=true
          this.register()

          //delay login Event
          setInterval(()=>{
            this.loader=false
            this.$emit('registerEvent')
          },3000)
        }


      }
    },

    created(){
     this.$on('registerEvent',()=>{

       if (this.response.status == 'success') {
         localStorage.token=this.response.token
         this.$parent.status=false
         this.$router.push({name:'dashboard'})
       }
     })
    }
  }
</script>
