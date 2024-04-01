<template>
  <div class="main">
    <header><TheHeader /></header>
    <main>
      <transition name="fade">
      <router-view :key="$route.path" v-if="show"/></transition>
    </main>
    <footer><TheFooter /></footer>
  </div>
</template>

<style>
* {
  margin: 0%;
  padding: 0%;
}

.main{
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;}

.fade-enter-to, .fade-leave-from{
  opacity: 1;
}
</style>

<script>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data: function () {
    return {
      show:false
    };
  },

  mounted() {
    this.show = true
  }

};
</script>