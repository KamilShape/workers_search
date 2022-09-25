<template>
  <section class="workersList paragraph">
    <div class="table_row workers_radios">
          <div class="workersList_row">
            <input type="radio" @click='changeVisibility(true)' v-model="picked" value="name">
            <p>Name</p>
          </div>
        <div class="workersList_row">
            <input type="radio" @click='changeVisibility(true)' v-model="picked" value="surname"> 
            <p>Surname</p>
        </div>
        <div class="workersList_row">
            <input type="radio" @click='changeVisibility(false)' v-model="picked" value="departament"> 
            <p>Departament</p>
        </div>
          <div class="workersList_row">
            <input type="radio" @click='changeVisibility(false)' v-model="picked" value="salary"> 
            <p>Salary</p>
        </div>
      </div>
      <input class="workers_input" v-if="selectVisible"  v-model="search" type="text" > 
      <select class="workers_input" v-if="!selectVisible" v-model="departament" @change="changeDepartament($event)">
          <option value="IT">IT</option>
          <option value="Sales">Sales</option>
          <option value="Administration">Administration</option>
          <option value="Advertisement">Advertisement</option>
      </select>
      <h1 class="app_name">List of workers</h1>
    <div class="table_row workersList_header">
      <p>Name</p>
      <p>Surname</p>
      <p>Department</p>
      <p>Salary (USD)</p>
    </div>
    <WorkerRow v-for='worker in filteredWorkers'
    :key="worker.id"
    :firstName="worker.firstName"
    :lastName="worker.lastName"
    :department="worker.department"
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
    data(){
    return{
      search: "",
      picked: "name",
      departament: "IT",
      selectVisible: true
    }
  },
    name: 'WorkersList',
    components:{  
      WorkerRow
    },
    computed: {
    ...mapState(["workers", "salarySummary"]),
    filteredWorkers(){
      return this.workers.filter(worker => {
        if(this.picked == "name"){
          return worker.name.toLowerCase().includes(this.search.toLowerCase())
        }
         else if(this.picked == "surname"){
          return worker.surname.toLowerCase().includes(this.search.toLowerCase())
        }
         else if(this.picked == "departament"){
          return worker.departament.toLowerCase().includes(this.departament.toLowerCase())
        }

      })
    }

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
