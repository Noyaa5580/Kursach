<template>
  <div class="slider">
    <div class="slider_line">
      <ProductCard
        v-for="item in new_products"
        :key="item"
        :name="item.name"
        :price="item.price"
        :author="item.author"
        :img_link="item.img_link"
      ></ProductCard>
    </div>
  </div>
</template>
<style scoped>
.slider{
    width: 100%;
    height: 640px;
    overflow: hidden;
}
.slider_line{
    display: flex;
    width: 300%;
    position: absolute;
    left: 0%;
    gap: 130px;
    padding: 0px 68px;
}
</style>
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