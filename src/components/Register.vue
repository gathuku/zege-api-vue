<template>
  <div class="container">
    <div class="row justify-content-center mt-2">
      <div class="col-md-4">
        <div v-if="loader" class="spinner-border text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <h4>Register</h4>
        <div class="form-group">
          <label for="">Email</label>
          <input v-model="form.email" class="form-control" type="text" name="" value="">
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input v-model="form.password" class="form-control" type="password" name="" value="">
        </div>
        <div class="form-group">
          <label for="">Confirm Password</label>
          <input v-model="form.password_confirmation" class="form-control" type="password" name="" value="">
        </div>
        <div class="form-group">

          <input @click="postRegister" class="btn btn-primary" type="submit" name="" value="Login">
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
          password:'',
          password_confirmation:''
        }
       }
     },
    methods:{
      register(){
        this.axios.post('users',this.form).then(({data}) => {this.response=data})
      },

      postRegister(){
        this.loader=true
        this.register()

        //delay login Event
        setInterval(()=>{
          this.$emit('registerEvent')
        },3000)

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
