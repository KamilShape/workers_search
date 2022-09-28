<template>
  <section class="workersList paragraph">
    <h1 class="app_name">Search workers</h1>
    <div class="workersList_radios">
      <div class="workersList_radio">
        <input type="radio" class="workersList_button" @click='changeVisibility(true, false, false)' v-model="picked" value="firstName">
        <p>Name</p>
      </div>
      <div class="workersList_radio">
        <input type="radio" class="workersList_button" @click='changeVisibility(true, false, false)' v-model="picked" value="lastName"> 
        <p>Surname</p>
      </div>
      <div class="workersList_radio">
        <input type="radio" class="workersList_button" @click='changeVisibility(false, true, false)' v-model="picked" value="department"> 
        <p>Department</p>
      </div>
      <div class="workersList_radio">
        <input type="radio" class="workersList_button" @click='changeVisibility(false, false, true)' v-model="picked" value="salary"> 
        <p>Salary</p>
      </div>
    </div>
    <input class='workersList_search paragraph' v-if="nameSurnameVisible"  v-model="search" type="text" > 
    <select class='workersList_search paragraph' v-if="departmentVisible" v-model="department" @change="changeSelect($event)">
      <option value="IT">IT</option>
      <option value="Sales">Sales</option>
      <option value="Administration">Administration</option>
    </select>
    <select class='workersList_search paragraph' v-if="salaryVisible" v-model="salary" @change="changeSelect($event)">
      <option value="1">0 - 3000</option>
      <option value="2">3000 - 6000</option>
      <option value="3">over 6000</option>
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
  export default {
    name: 'WorkersList',
    data(){
    return{
      search: "",
      picked: "firstName",
      department: "IT",
      salary: "1",
      nameSurnameVisible: true,
      departmentVisible: false,
      salaryVisible: false,
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
      changeSelect(event) {
        this.value = event.target.options[event.target.options.selectedIndex].text;
      },
      changeVisibility(value1, value2, value3){
        this.nameSurnameVisible = value1,
        this.departmentVisible = value2,
        this.salaryVisible = value3
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
        else{
          this.sumSalary(this.picked, this.salary)
          if(this.salary == '1'){
              return worker.salary <= 3000
          } else if(this.salary == '2'){
              return worker.salary > 3000 && worker.salary <= 6000        
          } else if(this.salary == '3'){
              return worker.salary > 6000        
          } 
        }
      })
    }
  }
}
</script>
<style lang="scss">
.workersList{
  &_header {
    justify-content: right;
    font-weight: bold;
    text-transform: uppercase;
  }
  &_radios {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 700px;
    padding: 10px;
    margin: 0 auto;
    @media (min-width: 768px) {
      width: 80%;
    }
  }
  &_radio {
    display: flex;
    justify-content: space-evenly;
    width: 25%;
    text-align: center;
  }
  &_button:hover {
      cursor: pointer;
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
    width: 100%;
    height: 100%;
    padding-bottom: 90px;
    margin: 0 auto;
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
