<template>
    <div class="worker table_row">
      <p>{{name}}</p>
      <p>{{surname}}</p>
      <p>{{departament}}</p>
      <p>{{salary}}</p>
    </div>
</template>

<script>
  export default {
    name: 'WorkerRow',
    props:{
      name: String,
      surname: String,
      departament: String,
      salary: Number,
    },
}

</script>
<style lang="scss">

</style>
