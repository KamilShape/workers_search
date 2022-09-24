<template>
  <section class="app">
    <h1 class="app_title">Workers App</h1>
      <nav class="menu paragraph">
        <router-link class="menu_link" to="/">Home</router-link> 
        <p class="menu_link" >|</p>
        <router-link class="menu_link" to="/contact">Contact</router-link>
      </nav>
  </section>
</template>

<script>

// import AddWorker from './components/AddWorker.vue'
// import WorkersList from './components/WorkersList.vue';

export default {

}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
.app{
  font-family: 'Ubuntu', sans-serif;
  font-size: 12px;
  background-color: rgb(122, 160, 203);
  &_title{
    font-size: 2.4rem;
    text-align: center;
    padding: 10px 0;
    &:nth-of-type(1){
      padding-top: 40px;
    }
    @media (min-width: 768px) {
      font-size: 2.7rem;
    }
    @media (min-width: 1024px) {
      font-size: 3rem;
    }
    @media (min-width: 1280px) {
      font-size: 3.3rem;
    }
    @media (min-width: 1414px) {
      font-size: 3.6rem;
    }
  }
}
.paragraph{
  font-size: 1.0rem;
    @media (min-width: 768px) {
        font-size: 1.2rem;
      }
    @media (min-width: 1024px) {
        font-size: 1.3rem;
      }
    @media (min-width: 1280px) {
        font-size: 1.4rem;
      }
    @media (min-width: 1414px) {
        font-size: 1.6rem;
      }
}
.menu{
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: bold;
  &_link{
    padding: 10px;
    transition: 2s ease-in-out;
    &:hover{
      cursor: pointer;
      text-decoration: underline;
    }
  }
    @media (min-width: 768px) {
        font-size: 1.5rem;
      }
    @media (min-width: 1024px) {
        font-size: 1.7rem;
      }
    @media (min-width: 1280px) {
        font-size: 1.9rem;
      }
    @media (min-width: 1414px) {
        font-size: 2.1rem;
      }
}
section{
  min-width: 375px;
}
input, select{
  background-color: white;
  outline: none;
  border-radius: 10px;
  text-align: center;
  border: 1px solid black;
  padding: 5px;
}
</style>
