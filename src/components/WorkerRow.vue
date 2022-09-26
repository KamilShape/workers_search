<template>
    <div class="worker table_row">
      <p><button @click="remove(this.id)">Remove</button>{{firstName}}</p>
      <p>{{lastName}}</p>
      <p>{{department}}</p>
      <p>{{salary}}</p>
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
        // this.addSalary()
      }
    }
}
</script>
