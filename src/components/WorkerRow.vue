<template>
  <div class="worker table_row">
    <p class="table_row_com"><button class="app_button worker_button" @click="remove(this.id)">X</button></p>
    <p class="table_row_com">{{firstName}}</p>
    <p class="table_row_com">{{lastName}}</p>
    <p class="table_row_com">{{department}}</p>
    <p class="table_row_com">{{salary}}</p>
  </div> 
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'WorkerRow',
    props:{
      id: Number,
      firstName: String,
      lastName: String,
      department: String,
      salary: Number,
    },
    methods: {
      ...mapMutations(["removeWorker", "addSalary"]),
      remove(id){
        this.removeWorker(id)
      }
    }
}
</script>
<style lang="scss">
  .worker_button{
    padding: 2px 5px;
    margin: auto 0;
    background-color:rgb(253, 253, 151, 0.4);
    border-radius: unset;    
    &:hover{
      background-color:rgb(253, 253, 151, 0.7);
      border-radius: unset;
    }
    @media (min-width: 1024px) {
        font-size: 0.8rem;
      }
    @media (min-width: 1280px) {
        font-size: 1rem;
      }
  }
</style>