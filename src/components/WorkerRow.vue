<template>
    <div class="worker table_row">
      <p>{{firstName}}</p>
      <p>{{lastName}}</p>
      <p>{{department}}</p>
      <p>{{salary}}</p>
    </div>
</template>

<script>
  export default {
    name: 'WorkerRow',
    props:{
      firstName: String,
      lastName: String,
      department: String,
      salary: Number,
    },
}

</script>
<style lang="scss">

</style>
