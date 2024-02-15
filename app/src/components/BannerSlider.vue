<template>
  <div>
    <div class="slider">
      <div class="slider_line" id="slider">
        <img
          src="../assets/banners/1920/slide1.svg"
          alt=""
          srcset=""
          @click="edit_slider()"
        />
        <img src="../assets/banners/1920/slide2.svg" alt="" srcset="" />
        <img src="../assets/banners/1920/slide3.svg" alt="" srcset="" />
        <img src="../assets/banners/1920/slide4.svg" alt="" srcset="" />
        <img src="../assets/banners/1920/slide5.svg" alt="" srcset="" />
      </div>
    </div>
    <div class="slide_buttons">
      <div class="button_slider button_slider_active" id="buttonS_1" @click="this.edit_slider1()"></div>
      <div class="button_slider" id="buttonS_2" @click="this.edit_slider2()"></div>
      <div class="button_slider" id="buttonS_3" @click="this.edit_slider3()"></div>
      <div class="button_slider" id="buttonS_4" @click="this.edit_slider4()"></div>
      <div class="button_slider" id="buttonS_5" @click="this.edit_slider5()"></div>
    </div>
  </div>
</template>

<style scoped>
.slider {
  width: 100%;
  height: 639px;
  overflow: hidden;
}

.slider_line {
  display: flex;
  width: 500%;
  height: 450px;
  position: relative;
  right: 0%;
  z-index: 0;
  transition: all ease-in-out 200ms;
}

img {
  width: 100%;
  height: 639px;
}

.slide_buttons {
  margin-top: 24px;
  display: flex;
  gap: 16px;
  margin-left: 40px;
}

.button_slider {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #434738;
  cursor: pointer;
}

.button_slider_active {
  border-radius: 12px !important;
  width: 30px;
  transition: all ease-in-out 50ms;
}
</style>

<script>
export default {
  data: function () {
    return {
      b1: null,
      b2: null,
      b3: null,
      b4: null,
      b5: null,
    };
  },
  methods: {
    edit_slider1() {
      this.b1 = document.getElementById("buttonS_1");
      this.b2 = document.getElementById("buttonS_2");
      this.b3 = document.getElementById("buttonS_3");
      this.b4 = document.getElementById("buttonS_4");
      this.b5 = document.getElementById("buttonS_5");
      let slider = document.getElementById("slider");
      slider.style.right = "0%";
      this.b1.classList.add("button_slider_active");
      this.b2.classList.remove("button_slider_active");
      this.b3.classList.remove("button_slider_active");
      this.b4.classList.remove("button_slider_active");
      this.b5.classList.remove("button_slider_active");
    },
    edit_slider2() {
      this.b1 = document.getElementById("buttonS_1");
      this.b2 = document.getElementById("buttonS_2");
      this.b3 = document.getElementById("buttonS_3");
      this.b4 = document.getElementById("buttonS_4");
      this.b5 = document.getElementById("buttonS_5");
      let slider = document.getElementById("slider");
      slider.style.right = "100%";
      this.b2.classList.add("button_slider_active");
      this.b1.classList.remove("button_slider_active");
      this.b3.classList.remove("button_slider_active");
      this.b4.classList.remove("button_slider_active");
      this.b5.classList.remove("button_slider_active");
    },
    edit_slider3() {
      this.b1 = document.getElementById("buttonS_1");
      this.b2 = document.getElementById("buttonS_2");
      this.b3 = document.getElementById("buttonS_3");
      this.b4 = document.getElementById("buttonS_4");
      this.b5 = document.getElementById("buttonS_5");
      let slider = document.getElementById("slider");
      slider.style.right = "200%";
      this.b3.classList.add("button_slider_active");
      this.b2.classList.remove("button_slider_active");
      this.b1.classList.remove("button_slider_active");
      this.b4.classList.remove("button_slider_active");
      this.b5.classList.remove("button_slider_active");
    },
    edit_slider4() {
      this.b1 = document.getElementById("buttonS_1");
      this.b2 = document.getElementById("buttonS_2");
      this.b3 = document.getElementById("buttonS_3");
      this.b4 = document.getElementById("buttonS_4");
      this.b5 = document.getElementById("buttonS_5");
      this.b4.classList.add("button_slider_active");
      let slider = document.getElementById("slider");
      slider.style.right = "300%";
      this.b2.classList.remove("button_slider_active");
      this.b3.classList.remove("button_slider_active");
      this.b1.classList.remove("button_slider_active");
      this.b5.classList.remove("button_slider_active");
    },
    edit_slider5() {
      this.b1 = document.getElementById("buttonS_1");
      this.b2 = document.getElementById("buttonS_2");
      this.b3 = document.getElementById("buttonS_3");
      this.b4 = document.getElementById("buttonS_4");
      this.b5 = document.getElementById("buttonS_5");
      let slider = document.getElementById('slider');
      slider.style.right = '400%';
      this.b5.classList.add("button_slider_active");
      this.b2.classList.remove("button_slider_active");
      this.b3.classList.remove("button_slider_active");
      this.b4.classList.remove("button_slider_active");
      this.b1.classList.remove("button_slider_active");
    },
  },
};
</script>