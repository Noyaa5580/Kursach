<template>
  <div>
    <h1>{{ product_info.name }}</h1>
        <h1>{{ product_info.description}}</h1>
        <img :src="product_info.img_link" alt="">
  </div>
</template>

<style scoped>
img{
    width: 300px;
    height: 400px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      product_info: {},
    };
  },
  methods: {
  },
  mounted() {
    axios
      .get("http://localhost:3000/cathalog?id=" + this.$route.query.id)
      .then((response) => (this.product_info = response.data[0]))
      .catch((error) => {
        console.error("Ошибка при запросе к API:", error);
      });
  },
};
</script>