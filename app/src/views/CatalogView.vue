<template>
  <div>
    <ProductCard
          v-for="item in books_array"
          :key="item"
          :name="item.name"
          :price="item.price"
          :author="item.author"
          :img_link="item.img_link"
          :id="item.id"
        ></ProductCard>
  </div>
</template>
<style>
</style>

<script>
import ProductCard from "../components/ProductCard.vue";
import axios from "axios";
export default {
  components: { ProductCard },
  data: function () {
    return {
      books_array: [],
      catalogs_array: ["bestsellers", "popular", "new-products"],
      authors: [],

    };
  },
  methods: {
    randomize_authors() {
      let random = Math.round(Math.random() * 2 - 0);
      axios
        .get("http://localhost:3000/" + this.catalogs_array[random])
        .then((response) => (this.authors = response.data))
        .catch((error) => {
          console.error("Ошибка при запросе к API:", error);
        });
    },
  },
  mounted() {
this.randomize_authors();
    axios
      .get("http://localhost:3000/cathalog")
      .then((response) => (this.books_array = response.data))
      .catch((error) => {
        console.error("Ошибка при запросе к API:", error);
      });
  },
};
</script>