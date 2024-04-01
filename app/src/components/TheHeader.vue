<template>
  <div class="head">
    <div class="header_string">
      <div class="city_button" @click="this.open_drop()">
        <div class="city">
          <img src="../assets/icons/map.png" alt="" id="location" />
          <p>{{ this.city }}</p>
        </div>
        <div class="delivery_time">Доставка от {{ this.delivery }} дней</div>
        <div class="drop_con">
          <div class="city_drop" v-on:mouseleave="this.close_drop()" id="drop">
            <div class="item_drop" @click="this.Moscow()">Москва</div>
            <div class="item_drop" @click="this.St()">Санкт-Петербург</div>
            <div class="item_drop" @click="this.Novosibirsk()">Новосибирск</div>
            <div class="item_drop" @click="this.sofrino()">Софрино</div>
          </div>
        </div>
      </div>

      <div><img src="../assets/logo.svg" alt="" class="logo" /></div>
      <div class="menu_icons">
        <img src="../assets/icons/Search.svg" alt="" srcset="" class="icon" />
        <img src="../assets/icons/Heart_01.svg" alt="" srcset="" class="icon" />
        <img
          src="../assets/icons/User.svg"
          alt=""
          srcset=""
          class="icon"
          @click="open_user_modal()"
        />
        <img
          src="../assets/icons/Shopping_Cart_01.svg"
          alt=""
          srcset=""
          class="icon"
        />
      </div>
    </div>
    <div id="user_modal">
      <form class="user_form" name="auth">
        <div class="form_name">
          <p>Авторизация</p>
          <img
            src="../assets/icons/Close_MD.svg"
            alt=""
            srcset=""
            class="icon"
            @click="close_user_modal()"
          />
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
  font-size: 18px;
  align-items: center;
}

.city_button {
  margin-left: 24px;
  max-width: 160px;
  cursor: pointer;
}

#location {
  min-width: 24px;
  min-height: 24px;
  max-width: 24px;
  max-height: 24px;
}

.drop_con {
  position: absolute;
}

.city_drop {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  margin-top: 12px;
  font-family: "Montserrat Alternates";
  font-size: 20px;
  background-color: #d6d6d6;
  margin-left: 24px;
  padding: 12px;
  width: 250px;
  height: 140px;
  z-index: 1;
  border-radius: 20px;
  transition: 0.3s all ease-in-out;
  visibility: hidden;
  opacity: 0;
}

.item_drop {
  border-bottom: 1px solid black;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  width: 238px;
  padding-left: 12px;
  transition: 0.3s all ease-in-out;
  border-radius: 0px 10px 0px 0px;
}

.item_drop:hover {
  background-color: #b5d43c;
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
  transition: all 0.7s ease-in-out;
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

.icon {
  cursor: pointer;
}

@media (min-width: 320px) and (max-width: 767px) {
  .header_string {
    justify-content: center;
    margin: 10px 0px;
  }

  .menu {
    width: 320px;
    justify-content: center;
    gap: 12px;
  }

  .link {
    font-size: 14px;
  }
  .logo {
    width: 100px;
    height: 30px;
  }
  .city_button {
    display: none;
  }

  .menu_icons {
    width: 10px;
    height: 30px;
    margin-right: 0px;
  }
  .menu_icons {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .menu {
    width: 650px;
  }
}
</style>

<script>
export default {
  data: function () {
    return {
      urls: [
        { name: "Главная", link: "/" },
        { name: "Каталог", link: "/catalog" },
        { name: "Контакты", link: "/contacts" },
        { name: "О нас", link: "/about" },
      ],
      delivery: "2",
      city: "Москва",
    };
  },
  methods: {
    open_user_modal() {
      let user_modal = document.getElementById("user_modal");
      user_modal.style.opacity = "100%";
      user_modal.style.visibility = "visible";
      document.body.style.overflow = "hidden";
    },
    close_user_modal() {
      let user_modal = document.getElementById("user_modal");
      user_modal.style.opacity = "0%";
      user_modal.style.visibility = "hidden";
      document.body.style.overflow = "";
    },
    open_drop() {
      let drop = document.getElementById("drop");
      drop.style.visibility = "visible";
      drop.style.opacity = "1";
    },
    close_drop() {
      let drop = document.getElementById("drop");
      drop.style.visibility = "hidden";
      drop.style.opacity = "0";
    },
    Moscow() {
      this.city = "Москва";
    },
    St() {
      this.city = "Санкт-Петербург";
    },
    sofrino() {
      this.city = "Софрино";
    },
    Novosibirsk() {
      this.city = "Новосибирск";
    },
  },

  mounted() {},
};
</script>