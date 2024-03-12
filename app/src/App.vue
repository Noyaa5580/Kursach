<template>
  <div>
    <header><TheHeader/></header>
    <main><router-view :key="$route.path"/></main>
    <footer><TheFooter/></footer>

  </div>
</template>

<style>
*{
  margin: 0%;
  padding: 0%;
} 
</style>

<script>
import TheFooter from './components/TheFooter.vue';
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
    TheFooter
  },
};
</script>