<template>
  <div class="container">
    <div class="text-center mt-2">
      <div class="col-md-4">
        <div v-if="response.status == 'error'" class="alert alert-danger">
          {{response.message}}
        </div>
        <div v-if="loader" class="spinner-border text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>

        <h4>Login</h4>
        <div class="form-group">
          <label for="">Email</label>
          <input v-model="form.email" class="form-control" type="text" name="" value="">
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input v-model="form.password" class="form-control" type="password" name="" value="">
        </div>
        <div class="form-group">


          <button @click="postLogin" class="btn btn-primary" type="button" name="button">Login</button>
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
        loader:'',
        form:{
          email:'',
          password:''
        }
       }
     },
    methods:{
      login(){
        this.axios.post('http://127.0.0.1:3000/v1/sessions',this.form).then(({data}) => {this.response=data})
      },

      postLogin(){
        this.loader=true
        this.login()

        //delay login Event 
        setInterval(()=>{
          this.$emit('loginEvent')
        },3000)

      }
    },

    created(){
     this.$on('loginEvent',()=>{
       console.log('in event')
       if (this.response.status == 'success') {
         console.log('redirecting')
         this.$router.push({name:'dashboard'})
       }
     })
    }
  }
</script>
