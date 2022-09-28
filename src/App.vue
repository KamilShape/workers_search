<template>
  <section class="app">
    <nav class="menu paragraph">
      <router-link class="menu_link" to="/">Home</router-link> 
      <router-link class="menu_link" to="/contact">Contact</router-link>
    </nav>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <transition name="router_animation">
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>
  </section>
</template>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    color: black;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }
  body{
    background-image: url(../public/backgroung.png);
    background-position: contain;
  }
  .app{
    &_title{
      font-size: 2.4rem;
      text-align: center;
      padding: 50px 0 20px;
      width: 100%;
      @media (min-width: 768px) {
        font-size: 2.7rem;
        padding-top: 70px
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
      transition: 0.1s ease-in;
      margin: 20px auto;
      &:hover{
        cursor: pointer;
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
  position: fixed;
  display: flex;
  z-index: 2;
  width: 100vw;
  min-width: 375px;
  justify-content: center;
  font-size: 1.3rem;
  text-transform: uppercase;
  background-color: 	rgba(143,188,143);
  text-decoration: none;
  font-weight: bold;
  &_link{
    padding: 10px;
    text-align: center;
    width: 50%;
    transition: 0.3s ease-in-out;
    &:hover{
      cursor: pointer;
      background-color: 	rgb(144,238,144);
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
.router_animation-enter-active {
    transition: 1.5s ease-in-out;
  }
.router_animation-leave-active {
    transition: 0.5s ease-in-out;
}
.router_animation-enter-from {
    transform: translateX(100%);
    opacity: 0;
}
.router_animation-leave-to {
    transform: translateY(-100%);
    opacity: 0;
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
