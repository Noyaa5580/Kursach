<template>
  <div class="page_content">
    <div @click="router_back()" class="back_link">
      <img src="../assets/icons/Chevron_Left_Duo.svg" alt="" />Назад
    </div>
    <div class="product_info">
      <img :src="product_info.img_link" alt="" />
      <div class="product_specifications">
        <p class="product_name">{{ product_info.name }}</p>
        <div class="specs">
          <p>Артикул: {{ product_info.id }}</p>
          <p>Переплет: мягкий</p>
          <p>Автор: {{ product_info.author }}</p>
        </div>
        <div class="description">
          <p class="specs_description">Описание:</p>
          <p class="description_text">{{ product_info.description }}</p>
        </div>
      </div>
      <div class="buy_block">
        <p>{{product_info.price}}</p>
        <div class="buy_button">Добавить в корзину</div>
        <div class="delivery"><p>Москва</p>
        <p>Доставка от 2 дней</p></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back_link {
  font-family: "Montserrat Alternates";
  font-weight: 400;
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 22px;
  margin-bottom: 24px;
}

.product_info {
  display: flex;
}
.product_info > img {
  width: 380px;
  height: 480px;
}

.product_name {
  font-family: "Montserrat Alternates";
  font-weight: 600;
  font-size: 36px;
  color: #000;
}

.specs{
  display: flex;
  flex-direction: column;
gap: 12px;
font-family: 'Nunito', sans-serif;
  font-weight: 400;
font-size: 20px;
color: #ababab;
margin-top: 24px;
}

.specs_description{
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
font-size: 20px;
color: #ababab;
margin-top: 18px;
margin-bottom: 12px;
}

.description{
  font-family: 'Nunito';
  font-weight: 400;
color: #000;
}

.description_text{
  max-width: 650px;
  font-size: 20px;
  line-height: 20px;
  text-align: justify;
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
    router_back() {
      this.$router.go(-1);
    },
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