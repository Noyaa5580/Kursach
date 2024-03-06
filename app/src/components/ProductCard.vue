<template>
  <div class="card">
    <div class="img_container">
      <img :src="img_link" alt="" />
    </div>
    <div class="product_info">
      <p class="product_name">{{ name }}</p>
      <p class="product_price">{{ price }} ₽</p>
      <p class="product_author">{{ author }}</p>
    </div>
    <div class="buy_button">Купить</div>
  </div>
</template>
<style scoped>
.card {
  width: 326px;
  height: 530px;
  display: flex;
  flex-direction: column;
}
.img_container {
  width: 326px;
  height: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
img {
  width: 246px;
  height: 326px;
}



.product_info{
    font-family: 'Nunito',sans-serif;
}
.product_name{
    font-size: 24px;
    margin-top: 16px;
    margin-bottom: 8px;
}

.product_price{
    font-style: italic;
font-weight: 700;
font-size: 24px;
}
.product_author{
font-weight: 500;
font-size: 16px;
color: #a9a9a9;
margin-top: 8px;
margin-bottom: 16px;
}
.buy_button {
  display: flex;
  background-color: #b5d43c;
  width: 156px;
  height: 43px;
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Nunito", sans-serif;
  font-size: 24px;
  margin-left: 170px;
}
</style>
<script>
export default {
  props: {
    name: String,
    price: Number,
    author: String,
    img_link: String,
  },
};
</script>