<template>
  <div>
    <div class="contacts_label">Cвязаться с нами</div>
    <div class="contacts_block">
      <div class="contacts">
        <div class="contacts-info">
          <p class="info_label">Контактные данные</p>
          <div v-for="item in contacts_array" :key="item" class="info-point">
            <p class="contact_name">{{ item.name }}</p>
            <p class="contact_desc">{{ item.adress }}</p>
          </div>
        </div>
        <div class="border"></div>
        <div class="pic"><img src="../assets/contacts.svg" /></div>
      </div>
      <form action="" class="contacts_form">
        <p>Оставить заявку</p>
        <input class="input_text" type="text" placeholder="Ф.И.О" />
        <input class="input_text" type="text" placeholder="E-mail" />
        <input
          class="input_text"
          type="text"
          placeholder="Сообщение"
          id="msg"
        />
        <input type="submit" value="Отправить" id="send_button" />
      </form>
    </div>

    <yandex-map
      :settings="{
        location: {
          center: [37.673034, 55.874349],
          zoom: 18,
        },
      }"
      height="50vh"
      style="margin-top: 40px"
    >
      <yandex-map-default-scheme-layer :settings="{ theme: 'light' }" />
      <yandex-map-default-features-layer />
      <yandex-map-controls :settings="{ position: 'right' }">
        <yandex-map-zoom-control />
      </yandex-map-controls>
    </yandex-map>
  </div>
</template>

<style scoped>
.contacts_label {
  font-family: "montserrat alternates";
  font-weight: 600;
  font-size: 28px;
  color: #000;
  margin: 24px 68px;
}

.contacts_block {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.contacts {
  border-radius: 12px;
  width: 1313px;
  height: 729px;
  background: #f7f7f7;
  display: flex;
}

.contacts-info {
  width: 472px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 60px;
}

.info_label {
  font-weight: 600;
  font-family: "montserrat alternates";
  font-size: 24px;
  color: #000;
}

.pic {
  width: 870px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-point {
  margin-top: 36px;
}
.contact_name {
  font-family: "montserrat alternates";
  font-weight: 600;
  font-size: 20px;
}
.contact_desc {
  font-family: "Nunito";
  margin-top: 4px;
  font-size: 16px;
}

.border {
  height: calc(100%-48px);
  width: 2px;
  margin: 24px;
  background-color: black;
}

.contacts_form {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid #000;
  border-radius: 20px;
  width: 667px;
  height: 539px;
}
.contacts_form > p {
  font-family: "Montserrat alternates";
  font-weight: 500;
  font-size: 24px;
  color: #000;
  margin-top: 24px;
  margin-bottom: 8px;
}

.input_text {
  margin-top: 32px;
  width: 480px;
  height: 60px;
  border-radius: 8px;
  border: 2px solid #b5d43c;
  padding-left: 12px;
  font-size: 20px;
}

.input_text::placeholder {
  color: rgb(0, 0, 0);
  font-family: "Montserrat alternates";
  font-size: 20px;
  font-weight: 600;
}

.input_text:focus {
  outline: none;
}

#msg {
  min-height: 140px;
  margin-bottom: 24px;
}

#send_button {
  margin-left: 320px;
  border-radius: 12px;
  width: 180px;
  height: 40px;
  background-color: #d9ef81;
  border: none;
  color: white;
   font-family: "Montserrat alternates";
   font-size: 18px;
   font-weight: 700;
}
#send_button:active{
    width: 178px;
  height: 38px;
}
</style>

<script>
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
} from "vue-yandex-maps";
export default {
  components: {
    YandexMap,
    YandexMapDefaultSchemeLayer,

    YandexMapDefaultFeaturesLayer,
  },
  data: function () {
    return {
      contacts_array: [
        { name: "E-mail", adress: "is25baryats@artcollege.ru" },
        { name: "Телефон:", adress: "+7 (910) 441-48-39" },
        { name: "Telegram:", adress: "@noyaa_bezdarnost" },
        { name: "GitHub:", adress: "@Noyaa5580" },
        {
          name: "Адрес:",
          adress: "г. Москва, ул. Староватутинский пр-д, д. 6",
        },
      ],
    };
  },
};
</script>

