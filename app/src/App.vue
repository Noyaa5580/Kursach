<template>
  <div>
    <header><TheHeader/></header>
    <main><router-view/></main>
    <footer></footer>

  </div>
</template>

<style>
*{
  margin: 0%;
  padding: 0%;
} 
</style>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>