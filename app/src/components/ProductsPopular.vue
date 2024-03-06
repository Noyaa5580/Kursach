<template>
  <div class="slider">
    <p class="slider_name">Популярные новинки</p>
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
    height: 680px;
    overflow: hidden;
}

.slider_name{
    margin: 32px 0px 24px 68px;
    font-family: 'Montserrat Alternates';
    font-weight: 600;
font-size: 28px;
color: #000;
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