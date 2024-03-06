<template>
  <div>
    <ProductCard v-for="item in new_products" :key="item" :name="item.name"></ProductCard>
  </div>
</template>
<script>
import ProductCard from "./ProductCard.vue";
import axios from "axios";
export default {
  components: {
    ProductCard,
  },
  data: function () {
    return {
      new_products: [],
    };
  },
  methods: {
    check() {
      console.log(this.new_products);
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/new-products")
      .then((response) => (this.new_products = response.data))
      .catch((error) => {
        console.error("Ошибка при запросе к API:", error);
      });
  },
};
</script>