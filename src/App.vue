<template>
<the-header></the-header>
<main>

<router-view v-slot="slotProp">
 <transition name="route" mode="out-in">
 <component :is="slotProp.Component"></component>

 </transition>
</router-view>
</main>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  name: 'App',
  components:{
    TheHeader
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body{
  margin: 0 ;
}
.route-enter-from{
  opacity:0;
  transform:translateY(-30px);
}
.route-leave-to{
opacity:0;
transform: translateY(30px);
}
.route-leave-active{
transition:all .3s ease-in;
}
.route-enter-active{
  transition:all .3s ease-out;

}
.route-enter-to,
.route-leave-from{
opacity:1;
transform:translateY(0)
}
</style>
