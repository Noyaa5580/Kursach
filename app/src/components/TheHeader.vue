<template>
  <div class="head">
    <div class="header_string">
      <div class="city_button">
        <div class="city">
          <img src="../assets/icons/map.png" alt="" />
          <p>Москва</p>
        </div>
        <div class="delivery_time">Доставка от {{ this.delivery }} дней</div>
      </div>
      <div><img src="../assets/logo.svg" alt="" class="logo" /></div>
      <div class="menu_icons">
        <img src="../assets/icons/Search.svg" alt="" srcset="" class="icon"/>
        <img src="../assets/icons/Heart_01.svg" alt="" srcset="" class="icon"/>
        <img src="../assets/icons/User.svg" alt="" srcset="" class="icon" @click="open_user_modal()"/>
        <img src="../assets/icons/Shopping_Cart_01.svg" alt="" srcset="" class="icon"/>
      </div>
    </div>
    <div id="user_modal" >
      <form class="user_form" name="auth">
        <div class="form_name">
          <p>Авторизация</p>
          <img src="../assets/icons/Close_MD.svg" alt="" srcset="" class="icon" @click="close_user_modal()"/>
        </div>
        <div class="auth_inputs">
          <input type="text" class="input_auth" placeholder="E-mail" />
          <input type="text" class="input_auth" placeholder="Пароль" />
        </div>
        <div class="auth_buttons">
          <div class="stay_checkbox">
            <input type="checkbox" name="check" id="" />
            <label for="check" style="margin-left: 4px">
              Оставаться в системе
            </label>
          </div>
          <input type="submit" value="Войти" class="submit_button" />
        </div>
      </form>
    </div>
    <div class="search_modal"></div>
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
  margin-bottom: 40px;
}
.menu {
  display: flex;
  width: 980px;
  justify-content: space-between;
}

.header_string {
  width: 100%;
  margin: 24px 0px 32px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu_icons {
  display: flex;
  gap: 12px;
  margin-right: 24px;
}
.menu_icons > img {
  width: 30px;
  height: 30px;
}

.city {
  display: flex;
  gap: 4px;
  font-family: "Montserrat alternates";
  font-weight: 500;
  font-size: 20px;
}

.city_button {
  margin-left: 24px;
}

.delivery_time {
  font-family: "Nunito";
  font-weight: 500;
  font-size: 14px;
  color: #d6d6d6;
  margin-left: 28px;
  margin-top: 4px;
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

#user_modal {
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: flex;
  visibility: hidden;
  opacity: 0%;
  background-color: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: center;
  transition:all 0.7s ease-in-out;
  animation: alternate;
  z-index: 1;
}

.user_form {
  background-color: white;
  width: 670px;
  height: 360px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  font-family: "Montserrat alternates";
  align-items: center;
}

.form_name {
  width: 100%;
  display: flex;
  height: 30px;
  align-items: center;
  margin-top: 24px;
}

.form_name > p {
  font-weight: 500;
  font-size: 24px;
  margin-left: 242px;
  margin-right: 194px;
}

.auth_inputs {
  display: flex;
  flex-direction: column;
  margin-top: 42px;
}

.input_auth {
  width: 490px;
  height: 56px;
  border-radius: 12px;
  outline: none;
  border: 2px solid #b5d43c;
  margin-bottom: 32px;
  padding-left: 24px;
  font-size: 24px;
}

.input_auth::placeholder {
  font-size: 24px;
  font-family: "Montserrat Alternates";
  font-weight: 500;
}

.submit_button {
  background-color: #d9ef81;
  border: none;
  width: 128px;
  height: 40px;
  cursor: pointer;
  border-radius: 12px;
  color: white;
  font-family: "Montserrat Alternates";
  font-size: 20px;
  font-weight: 700;
}

.auth_buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
}

.icon{cursor: pointer;}
</style>

<script>
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
      delivery: "2",
    };
  },
  methods: {
    open_user_modal() {
      let user_modal = document.getElementById('user_modal');
      user_modal.style.opacity = '100%';
      user_modal.style.visibility = 'visible';
    },
    close_user_modal() {
      let user_modal = document.getElementById('user_modal');
      user_modal.style.opacity = '0%';
      user_modal.style.visibility = 'hidden';
    },
    open_search_modal() {},
    close_search_modal() {},
  },

  mounted() {},
};
</script>