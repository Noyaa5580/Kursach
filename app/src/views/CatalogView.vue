<template>
  <div class="content">
    <div class="filters">
      <p class="filters_name">Фильтры</p>
      <p class="filter_category__name" style="margin-top: 16px">Цена</p>
      <div class="price">
        <p>от</p>
        <input type="number" />
        <p>до</p>
        <input type="number" />
      </div>
      <div class="filter_border"></div>
      <p class="filter_category__name">Автор</p>
      <div class="search">
        <input style="width: 170px" type="text" placeholder="Поиск" />
      </div>
      <label v-for="item in authors" :key="item"
        ><input type="checkbox" name="" id="" class="checkbox" />{{
          item.author
        }}</label
      >
      <div class="filter_border"></div>
      <p class="filter_category__name">Переплет</p>
      <label
        ><input type="checkbox" name="" id="" class="checkbox" />мягкий</label
      >
    </div>
    <div class="products">
      <div class="search_line">
        <div class="sort_dropdown">
          <p>По цене</p>
          <img src="../assets/icons/Caret_Down_SM.svg" alt="" />
        </div>
        <div class="search"><input type="text" placeholder="Поиск" /></div>
      </div>
      <div class="cards">
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
    </div>
  </div>
</template>

<style>
.content {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0px 68px;
  width: calc(100% - 132px);
}
.cards {
  display: flex;
  width: 1100px;
  flex-wrap: wrap;
  gap: 24px;
  margin: 24px 0px;
}

.search_line {
  display: flex;
}

.search > input {
  border: 1px solid #a9a9a9;
  border-radius: 6px;
  padding-left: 12px;
  width: 848px;
  height: 24px;
}
input:focus {
  outline: none;
}

.sort_dropdown {
  display: flex;
  font-family: "nunito";
  justify-content: space-between;
  border: 1px solid #a9a9a9;
  border-radius: 6px;
  width: 198px;
  height: 24px;
  margin-right: 24px;
  cursor: pointer;
  padding-left: 12px;
}

.filters {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Nunito";
  width: 300px;
  margin-left: 8px;
}

.filter_border {
  width: 206px;
  height: 2px;
  background-color: black;
  border-radius: 2px;
  margin: 16px 0px;
}
.filters_name {
  font-family: "Montserrat Alternates";
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  color: #000;
}
.price {
  display: flex;
  gap: 4px;
  margin-top: 8px;
}

.price > input {
  border: 1px solid #a9a9a9;
  border-radius: 12px;
  width: 48px;
  height: 20px;
}

.filter_category__name {
  font-size: 24px;
}
label {
  font-size: 18px;
  margin-top: 4px;
}
.checkbox {
  margin-right: 4px;
}
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