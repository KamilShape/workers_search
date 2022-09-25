<template>
  <section class="home">
      <AddWorker/>
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