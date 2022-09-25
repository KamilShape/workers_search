<template>
  <section class="addWorker">
    <form class="addWorker_form paragraph">
      <div class="addWorker_wrapper">
        <label class="addWorker_label">first name: </label>
        <input class="addWorker_input" type="text" v-model="firstName">
      </div>
      <div class="addWorker_wrapper">
        <label class="addWorker_label">last name: </label>
        <input class="addWorker_input" type="text" v-model="lastName">
      </div>
      <div class="addWorker_wrapper">
        <label class="addWorker_label">department: </label>
        <select class="addWorker_input" @change="changeDepartament($event)" type="text" v-model="department">
          <option value="">IT</option>
          <option value="">Sales</option>
          <option value="">Administation</option>
        </select>
      </div>
      <div class="addWorker_wrapper">
        <label class="addWorker_label">salary: </label>
        <input class="addWorker_input" type="text" v-model="salary">
      </div>
    </form>
    <button class="app_button">Add Worker</button>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default{
  data(){
    return{
      firstName: "",
      lastName: "",
      department: "IT",
      salary: ""
    }
  },
  computed:{
    workers(){
      return this.$store.state.workers
    },
  },
  methods:{
    ...mapMutations(["addWorker", "addSalary"]),
    addNewWorker(){
      if(this.name != "" && this.surname != "" && this.departament != "" && this.salary != ""){
          this.addWorker([this.name, this.surname, this.departament, this.salary])
          this.addSalary()
          this.name = ""
          this.surname = ""
          this.departament = ""
          this.salary = ""
      }
    },
    changeDepartament(event) {
      this.departament =
        event.target.options[event.target.options.selectedIndex].text;
    },
  },
}
</script>
<style scoped lang="scss">
    .addWorker{
      &_form{
        width: 375px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
          @media (min-width: 768px) {
            width: 500px;
          }
          @media (min-width: 1024px) {
            width: 700px;
          }
      }
      &_wrapper{
        display: flex;
        justify-content: space-between;
        padding: 10px;
      }
      &_label{
        text-transform: uppercase;
        font-weight: 700;
        width: 40%;
      }
      &_input{
        width: 60%;
      }
    }
</style>
