<template>
  <div class="container">
    <div class="row justify-content-center mt-2">
      <div class="col-md-4">
        <div v-if="response.status == 'error'" class="alert alert-danger">
          {{response.message}}
        </div>
        <div v-if="loader" class="spinner-border text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>

        <h4>Login</h4>
        <div class="form-group" :class="{error: validation.hasError('form.email')}">
          <label for="">Email</label>
          <input v-model="form.email" class="form-control" type="text" name="" value="" autofocus>
          <div class="message text-danger">{{ validation.firstError('form.email') }}</div>
        </div>
        <div class="form-group" :class="{error: validation.hasError('form.password')}">
          <label for="">Password</label>
          <input v-model="form.password" class="form-control" type="password" name="" value="">
            <div class="message text-danger">{{ validation.firstError('form.password') }}</div>
        </div>
        <div class="form-group">


          <button @click="postLogin" class="btn btn-primary" type="button" name="button">Login</button>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;

Vue.use(SimpleVueValidation);
  export default{
     data(){
       return{
        response:{},
        loader:'',
        form:{
          email:'',
          password:''
        }
       }
     },

     validators: {
        'form.email': function(value) {
          return Validator.value(value).required().email();
        },

        'form.password': function(value) {
          return Validator.value(value).required().minLength(6)
        },
      },
    methods:{
      login(){
        this.axios.post('sessions',this.form).then(({data}) => {
          this.response=data

        })
      },

      postLogin(){
        if (this.form.email != '' && this.form.password !='') {
          this.loader=true
          this.login()

          //delay login Event
          setInterval(()=>{
            this.$emit('loginEvent')
          },3000)
        }


      }
    },

    created(){
     this.$on('loginEvent',()=>{
        this.loader=false
       if (this.response.status == 'success') {
         localStorage.token=this.response.token
         this.$parent.status=false

         this.$router.push({name:'dashboard'})
       }
     })
    }
  }
</script>
