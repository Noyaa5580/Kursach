<template>
  <router-link to="/catalog" class="link"
    ><div class="category_container">
      <div class="category_card">
        <img :src="img" style="z-index: 1" />
        <div class="round_container">
          <div
            class="round"
            :style="{ top: top_px + 'px', right: right_px + 'px' }"
          ></div>
        </div>
      </div>
      <p class="category_name">{{ name }}</p>
    </div></router-link
  >
</template>
<style scoped>
.link {
  color: black;
  text-decoration: none;
}

.category_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
}

.category_card {
  border-radius: 8px;
  width: 170px;
  height: 170px;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.category_card > img {
  width: 100px;
  height: 100px;
}

.round_container {
  position: absolute;
}
.round {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  position: relative;
  background-color: #d9ef81;
  z-index: 0;
}

.category_name {
  font-family: "Montserrat Alternates";
  font-size: 24px;
  max-width: 230px;
  text-align: center;
}
</style>
<script>
export default {
  props: {
    img: String,
    name: String,
    top_px: Number,
    right_px: Number,
  },
  methods: {
   
  },
};
</script>