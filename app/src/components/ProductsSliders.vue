<template>
  <div>
    <div
      class="slider"
      v-on:mouseover="show_buttons1()"
      v-on:mouseleave="hide_buttons1()"
    >
      <p class="slider_name">Популярные новинки</p>
      <div class="buttons_container">
        <div class="buttons" id="buttons1">
          <div class="button_slider" id="left1" @click="this.slider_left1()">
            <img src="../assets/icons/Arrow_left.svg" alt="" />
          </div>
          <div class="button_slider" id="right1" @click="this.slider_right1()">
            <img src="../assets/icons/Arrow_right.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="slider_line" id="slider_line1">
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
    <div
      class="slider"
      v-on:mouseover="show_buttons2()"
      v-on:mouseleave="hide_buttons2()"
    >
      <p class="slider_name">Бестесллеры</p>
      <div class="buttons_container">
        <div class="buttons" id="buttons2">
          <div class="button_slider" id="left2" @click="this.slider_left2()">
            <img src="../assets/icons/Arrow_left.svg" alt="" />
          </div>
          <div class="button_slider" id="right1" @click="this.slider_right2()">
            <img src="../assets/icons/Arrow_right.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="slider_line" id="slider_line2">
        <ProductCard
          v-for="item in bestsellers"
          :key="item"
          :name="item.name"
          :price="item.price"
          :author="item.author"
          :img_link="item.img_link"
        ></ProductCard>
      </div>
    </div>
    <div
      class="slider"
      v-on:mouseover="show_buttons3()"
      v-on:mouseleave="hide_buttons3()"
    >
      <p class="slider_name">Популярные товары</p>
      <div class="buttons_container">
        <div class="buttons" id="buttons3">
          <div class="button_slider" id="left3" @click="this.slider_left3()">
            <img src="../assets/icons/Arrow_left.svg" alt="" />
          </div>
          <div class="button_slider" id="right3" @click="this.slider_right3()">
            <img src="../assets/icons/Arrow_right.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="slider_line" id="slider_line3">
        <ProductCard
          v-for="item in popular_products"
          :key="item"
          :name="item.name"
          :price="item.price"
          :author="item.author"
          :img_link="item.img_link"
        ></ProductCard>
      </div>
    </div>
  </div>
</template>
<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: 680px;
  overflow: hidden;
  margin-bottom: 32px;
}

.slider_name {
  margin: 32px 0px 24px 68px;
  font-family: "Montserrat Alternates";
  font-weight: 600;
  font-size: 28px;
  color: #000;
}

.slider_line {
  display: flex;
  width: 300%;
  position: absolute;
  left: 0%;
  gap: 130px;
  padding: 0px 68px;
  transition: all ease-in-out 1s;
}

.button_slider {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  margin: 0px 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.buttons_container {
  position: relative;
  top: 35%;
}

.buttons {
  display: flex;
  visibility: hidden;
  opacity: 100%;
  position: absolute;
  z-index: 1;
  justify-content: space-between;
  width: 100%;
  transition: all ease-in-out 0.3s;
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
      bestsellers: [],
      popular_products: [],
      offset1: 0,
      offset2: 0,
      offset3: 0,
    };
  },
  methods: {
    show_buttons1() {
      let buttons = document.getElementById("buttons1");
      buttons.style.visibility = "visible";
      buttons.style.opacity = "1";
    },
    hide_buttons1() {
      let buttons = document.getElementById("buttons1");
      buttons.style.visibility = "hidden";
      buttons.style.opacity = "0";
    },

    slider_left1() {
      let slider = document.getElementById("slider_line1");
      this.offset1 += 100;
      slider.style.left = this.offset1 + "%";
      if (this.offset1 > 0) {
        this.offset1 = -200;
        slider.style.left = this.offset1 + "%";
      }
    },
    slider_right1() {
      let slider = document.getElementById("slider_line1");
      this.offset1 -= 100;
      slider.style.left = this.offset1 + "%";
      if (this.offset1 < -200) {
        this.offset1 = 0;
        slider.style.left = this.offset1 + "%";
      }
    },
    show_buttons2() {
      let buttons = document.getElementById("buttons2");
      buttons.style.visibility = "visible";
      buttons.style.opacity = "1";
    },
    hide_buttons2() {
      let buttons = document.getElementById("buttons2");
      buttons.style.visibility = "hidden";
      buttons.style.opacity = "0";
    },

    slider_left2() {
      let slider = document.getElementById("slider_line2");
      this.offset2 += 100;
      slider.style.left = this.offset2 + "%";
      if (this.offset2 > 0) {
        this.offset2 = -200;
        slider.style.left = this.offset2 + "%";
      }
    },
    slider_right2() {
      let slider = document.getElementById("slider_line2");
      this.offset2 -= 100;
      slider.style.left = this.offset1 + "%";
      if (this.offset2 < -200) {
        this.offset2 = 0;
        slider.style.left = this.offset2 + "%";
      }
    },
    show_buttons3() {
      let buttons = document.getElementById("buttons3");
      buttons.style.visibility = "visible";
      buttons.style.opacity = "1";
    },
    hide_buttons3() {
      let buttons = document.getElementById("buttons3");
      buttons.style.visibility = "hidden";
      buttons.style.opacity = "0";
    },

    slider_left3() {
      let slider = document.getElementById("slider_line3");
      this.offset3 += 100;
      slider.style.left = this.offset3 + "%";
      if (this.offset3 > 0) {
        this.offset3 = -200;
        slider.style.left = this.offset3 + "%";
      }
    },
    slider_right3() {
      let slider = document.getElementById("slider_line3");
      this.offset3 -= 100;
      slider.style.left = this.offset3 + "%";
      if (this.offset3 < -200) {
        this.offset3 = 0;
        slider.style.left = this.offset3 + "%";
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/new-products")
      .then((response) => (this.new_products = response.data))
      .catch((error) => {
        console.error("Ошибка при запросе к API:", error);
      });
    axios
      .get("http://localhost:3000/bestsellers")
      .then((response) => (this.bestsellers = response.data))
      .catch((error) => {
        console.error("Ошибка при запросе к API:", error);
      });
    axios
      .get("http://localhost:3000/popular")
      .then((response) => (this.popular_products = response.data))
      .catch((error) => {
        console.error("Ошибка при запросе к API:", error);
      });
  },
};
</script>