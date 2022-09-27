<template>
  <section class="workersList paragraph">
    <h1 class="app_name">Search workers</h1>
    <div class="workersList_radios">
          <div class="workersList_radio">
            <input type="radio" @click='changeVisibility(true)' v-model="picked" value="firstName">
            <p>Name</p>
          </div>
        <div class="workersList_radio">
            <input type="radio" @click='changeVisibility(true)' v-model="picked" value="lastName"> 
            <p>Surname</p>
        </div>
        <div class="workersList_radio">
            <input type="radio" @click='changeVisibility(false)' v-model="picked" value="department"> 
            <p>Department</p>
        </div>
      </div>
      <input class='workersList_search paragraph' v-if="selectVisible"  v-model="search" type="text" > 
      <select class='workersList_search paragraph' v-if="!selectVisible" v-model="department" @change="changeDepartament($event)">
          <option value="IT">IT</option>
          <option value="Sales">Sales</option>
          <option value="Administration">Administration</option>
      </select>
      <h1 class="app_name">List of workers</h1>
      <div class="workersList_list">
        <div class="table_row workersList_header">
          <p class="table_row_com"></p>
          <p class="table_row_com">Name</p>
          <p class="table_row_com">Surname</p>
          <p class="table_row_com">Department</p>
          <p class="table_row_com">Salary (USD)</p>
        </div>
        <transition-group name="opacity">
          <WorkerRow v-for='worker in filteredWorkers'
          :key="worker.id"
          :id="worker.id"
          :firstName="worker.firstName"
          :lastName="worker.lastName"
          :department="worker.department"
          :salary="worker.salary"/>
        </transition-group> 
        <div class="table_row workersList_header workersList_summary"> 
          <p class="table_row_com"></p>
          <p class="table_row_com"></p>
          <p class="table_row_com"></p>
          <p class="table_row_com">Summary</p>
          <p class="table_row_com">{{salarySummary}}</p>
        </div>
    </div>

  </section>
</template>

<script>
  import WorkerRow from './WorkerRow.vue'
  import { mapState, mapMutations } from "vuex"

  export default{
    name: 'WorkersList',
    data(){
    return{
      search: "",
      picked: "firstName",
      department: "IT",
      salary:1,
      selectVisible: true
      }
    },
    components:{  
      WorkerRow
    },
    methods:{
      ...mapMutations(["addSalary", "resetSalary"]),
      sumSalary(picked, search){
       this.addSalary({picked, search})
      },
      changeDepartament(event) {
        this.departament = event.target.options[event.target.options.selectedIndex].text;
      },
      changeVisibility(value){
        this.selectVisible = value
      }
    },
    computed: {
    ...mapState(["workers", "salarySummary"]),
    filteredWorkers(){
      this.resetSalary()
      return this.workers.filter(worker => {
        if(this.picked == "firstName"){
          this.sumSalary(this.picked, this.search)
          return worker.firstName.toLowerCase().includes(this.search.toLowerCase())
        }
         else if(this.picked == "lastName"){
          this.sumSalary(this.picked, this.search)
          return worker.lastName.toLowerCase().includes(this.search.toLowerCase())
        }
         else if(this.picked == "department"){
          this.sumSalary(this.picked, this.department)
          return worker.department.toLowerCase().includes(this.department.toLowerCase())
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
    justify-content: right;
  }
  &_radios{
    padding: 10px;
    width: 375px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
      @media (min-width: 768px) {
        width: 600px;
      }
  }
  &_radio{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    width: 33%;
    &:hover{
      cursor: pointer;
    }
  }
  &_search{
    width: 70%;
    max-width: 500px;
    margin: 10px auto;
  }
  &_summary{
    display: flex;
    justify-content: right;
  }
  &_list{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding-bottom: 90px;
    @media (min-width: 768px) {
        width: 90%;
      }
    @media (min-width: 1024px) {
        width: 80%;
      }
  }
}
.opacity-enter-active {
    transition: 1s ease-in-out;
}
.opacity-leave-active {
    transition: 0.5s ease-in-out;
}
.opacity-enter-from {
    transform: translateX(100%);  
    opacity: 0;
}
.opacity-leave-to {
  transform: translateX(-100%);
    opacity: 0;
}
</style>
