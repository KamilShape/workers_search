<template>
  <section class="app">
    <h1 class="app_title">Workers App</h1>
      <nav class="menu paragraph">
        <router-link class="menu_link" to="/">Home</router-link> 
        <p class="menu_link" >|</p>
        <router-link class="menu_link" to="/contact">Contact</router-link>
      </nav>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <Footer/>
  </section>
</template>
<script>

import Footer from '@/components/Footer.vue';
export default{
  components:{
  Footer
}
}

</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }
  .app{
    font-family: 'Ubuntu', sans-serif;
    font-size: 12px;
    padding-top: 150px;
    background-color: 	rgba(143,188,143, 0.5);
    // background-color: red;
    &_title{
      font-size: 2.4rem;
      text-align: center;
      padding: 10px 0;
      &:nth-of-type(1){
        background-color: 	rgba(143,188,143);
        padding-top: 30px;
        position: absolute;
        top: 0;
        width: 100%;
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
    &_name{
      font-size: 1.6rem;
      text-align: center;
      @media (min-width: 768px) {
        padding: 10px;
        font-size: 1.8rem;
      }
      @media (min-width: 1024px) {
        font-size: 2rem;
      }
      @media (min-width: 1280px) {
        font-size: 2.2rem;
      }
      @media (min-width: 1414px) {
        font-size: 2.4rem;
      }
    }
    &_button{
      font-family: 'Ubuntu', sans-serif;
      display: block;
      border: none;
      border-radius: 10px 0 10px 0;
      transition: 0.1s ease-in;
      margin: 20px auto;
      &:hover{
        cursor: pointer;
        border-radius: 0 10px 0 10px;
        }
    }
}
.paragraph{
  font-size: 0.9rem;
    @media (min-width: 768px) {
        font-size: 1.1rem;
      }
    @media (min-width: 1024px) {
        font-size: 1.2rem;
      }
    @media (min-width: 1280px) {
        font-size: 1.3rem;
      }
    @media (min-width: 1414px) {
        font-size: 1.4rem;
      }
}
.menu{
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  &_link{
    padding: 10px;
    color: black;
    transition: 0.3s ease-in-out;
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
.table_row{
  display: flex;
  padding: 5px;
  &:nth-of-type(odd){
    background-color: 	rgb(143,188,143,0.8)
  }
  &:nth-of-type(even){
    background-color: 	rgb(143,188,143,0.5)
  }
  &_com{
    width:24.5%;
    text-align: center;
  }
  &_com:nth-child(1){
    width:2%;
  }
}
section{
  min-width: 375px;
}
input, select{
  display: block;
  background-color: white;
  outline: none;
  border-radius: 15px;
  text-align: center;
  border: 1px solid black;
  padding: 5px;
}
</style>
