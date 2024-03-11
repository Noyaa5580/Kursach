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
        <p class="price">{{ product_info.price }} ₽</p>
        <div class="buy_button">Добавить в корзину</div>
        <div class="delivery">
          <p class="city">Москва</p>
          <p class="dil_time">Доставка от 2 дней</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.page_content{
  margin: 0px 68px;
}
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

.product_specifications{
  margin-left: 70px;
}

.specs {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #ababab;
  margin-top: 24px;
}

.specs_description {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #ababab;
  margin-top: 18px;
  margin-bottom: 12px;
}

.description {
  font-family: "Nunito";
  font-weight: 400;
  color: #000;
}

.description_text {
  max-width: 650px;
  font-size: 20px;
  line-height: 25px;
  text-align: justify;
}

.buy_block {
  width: 250px;
  height: 160px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.03);
  background: #f7f7f7;
margin-left: 300px;
}

.buy_button {
  border-radius: 12px;
  width: 225px;
  height: 38px;
  background: #b5d43c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Nunito";
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  margin-left: 12px;
  cursor: pointer;
}

.price{
  color: #000;
  font-family: 'Montserrat Alternates';
  font-size: 24px;
  margin: 10px 0px 12px 12px;
  font-weight: 600;
}

.delivery{
  margin-top: 14px;
  margin-left: 12px;
}

.city{
  font-family: 'Montserrat alternates';
  font-weight: 500;
  font-size: 14;
}

.dil_time{
  font-family: 'Nunito';
  font-size: 12px;
  color: #D6D6D6;
  margin-top: 4px;
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