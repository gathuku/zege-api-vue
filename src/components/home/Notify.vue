<template >
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-8">
              <div class="card">
                  <div class="card-header bg-primary"> <strong> Notications</strong></div>

                  <div class="card-body">
                    <table class="table">
                      <th>Message</th>
                      <th>Date</th>
                      <tbody>
                        <tr v-for="notify in notifies"  :key="notify.id">
                          <td>User with id {{notify.user_id}} sent {{notify.amount}} to your account</td>
                          <td>{{notify.created_at | dateFilter}}</td>
                        </tr>

                      </tbody>
                    </table>
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
       notifies:{}
      }

    },
    beforeCreate(){

      this.axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.token}`}
    },
    created(){

      this.axios.get('notifications').then(({data})=>{this.notifies=data})
    }
  }
</script>
