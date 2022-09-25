<template>
  <section class="home">
      <AddWorker/>
      <h1 class="app_title">Workers List</h1>
      <WorkersList/>
      <ContactView/>
  </section>
</template>

<script>
import AddWorker from '@/components/AddWorker.vue'
import WorkersList from '@/components/WorkersList.vue';

export default {
components:{
  AddWorker,
  WorkersList,
}
}
</script>
<style lang="scss">

</style>