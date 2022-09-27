<template>
  <section class="home">
    <h1 class="app_title">Workers App</h1>
      <AddWorker/>
      <WorkersList/>
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
.home{
  height: 100%;
  min-height: 890px;
}
</style>