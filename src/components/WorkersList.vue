<template>
  <section class="workersList paragraph">
    <div class="table_row workersList_header">
      <p>Name</p>
      <p>Surname</p>
      <p>Department</p>
      <p>Salary (USD)</p>
    </div>
    <WorkerRow v-for='worker in workers'
    :key="worker.id"
    :name="worker.name"
    :surname="worker.surname"
    :departament="worker.departament"
    :salary="worker.salary"
    />
    <div class="table_row workersList_header workersList_summary"> 
      <p>Summary</p> 
      <p>{{salarySummary}}</p>
    </div>
  </section>
</template>

<script>
  import WorkerRow from './WorkerRow.vue'
  import { mapState } from "vuex"
  export default{
    name: 'WorkersList',
    components:{  
      WorkerRow
    },
    computed: {
    ...mapState(["workers", "salarySummary"]),
  }
}
</script>
<style lang="scss">
.workersList{
  &_header{
    font-weight: bold;
    text-transform: uppercase;
    background-color: rgb(147, 179, 207);
  }
  &_summary{
    display: flex;
    justify-content: right;
  }
}
.table_row{
  display: flex;
  padding: 5px;
  &:nth-of-type(odd){
    background-color: rgba(147, 179, 207,1);
  }
  &:nth-of-type(even){
    background-color: rgba(147, 179, 207,0.5);
  }
  & p{
    width:25%;
    text-align: center;
  }
}
</style>
