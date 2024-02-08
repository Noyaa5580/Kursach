<template>
  <div class="head">
    <div class="header_string">
      <div class="city_button">
        <div class="city"><img src="../assets/icons/map.png" alt=""><p>Москва</p></div>
        <div class="delivery_time"></div>
      </div>
      <div><img src="../assets/logo.svg" alt="" /></div>
      <div class="menu_icons"></div>
    </div>
    <nav class="menu">
      <div v-for="url in urls" :key="url">
        <router-link :to="url.link" active-class="active_link" class="link">
          {{ url.name }}
        </router-link>
      </div>
    </nav>
  </div>
</template>

<style>
.head {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu {
  display: flex;
  width: 980px;
  justify-content: space-between;
}

.header_string{
  
}

.link {
  color: black;
  font-size: 28px;
  text-decoration: none;
  font-family: "Montserrat Alternates";
  font-weight: 500;
}
.active_link {
  color: #b5d43c;
}
</style>

<script>
// import axios from 'axios';
export default {
  data: function () {
    return {
      urls: [
        { name: "Главная", link: "/" },
        { name: "Каталог", link: "/catalog" },
        { name: "Новости", link: "/news" },
        { name: "Контакты", link: "/contacts" },
        { name: "О нас", link: "/about" },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>