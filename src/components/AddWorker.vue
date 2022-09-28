<template>
  <section class="addWorker">
    <form class="addWorker_form paragraph">
      <div class="addWorker_wrapper">
        <label class="addWorker_label">first name: </label>
        <input class="addWorker_input paragraph" type="text" v-model="firstName">
      </div>
      <div class="addWorker_wrapper">
        <label class="addWorker_label">last name: </label>
        <input class="addWorker_input paragraph" type="text" v-model="lastName">
      </div>
      <div class="addWorker_wrapper">
        <label class="addWorker_label">department: </label>
        <select class="addWorker_input paragraph" @change="changeSelect($event)" type="text" v-model="department">
          <option value="IT">IT</option>
          <option value="Sales">Sales</option>
          <option value="Administration">Administation</option>
        </select>
      </div>
      <div class="addWorker_wrapper">
        <label class="addWorker_label">salary: </label>
        <input class="addWorker_input paragraph" type="number" v-model="salary">
      </div>
    </form>
    <button class="app_button addWorker_button paragraph" @click="addNewWorker">Add Worker</button>
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
      if(this.firstName != "" && this.lastName != "" && this.department != "" && this.salary != ""){
          this.addWorker([this.workers.length+1, this.firstName, this.lastName, this.department, this.salary])
          this.addSalary()
      }
    },
    changeSelect(event) {
        this.value = event.target.options[event.target.options.selectedIndex].text;
      },
  },
}
</script>
<style scoped lang="scss">
    .addWorker{
      &_form{
        display: flex;
        flex-direction: column;
        width: 375px;
        margin: 0 auto;
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
        width: 40%;
        margin: auto;
        font-weight: 700;
        text-transform: uppercase;
      }
      &_input{
        width: 60%;
      }
      &_button {
        padding: 10px;
        background-color: 	rgb(143,188,143);
        border-radius: 15px 0 15px 0;
        &:hover{
          background-color: 	rgb(144,238,144);
          border-radius: 0 15px 0 15px;
        }
      }
    }
</style>
