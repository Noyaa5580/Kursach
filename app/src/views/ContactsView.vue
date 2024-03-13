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
    </div>
<yandex-map
    :settings="{
      location: {
        center: [37.673034, 55.874349,],
        zoom: 18,
      },
    }"
    height="50vh"
  >
    <yandex-map-default-scheme-layer :settings="{ theme: 'light' }" />
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

.border{
  height: calc(100%-48px);
  width: 2px;
  margin: 24px;
  background-color: black;
}

</style>

<script>
import {
  YandexMap,

  YandexMapDefaultSchemeLayer,

} from "vue-yandex-maps";
export default {
  components:{
    YandexMap, YandexMapDefaultSchemeLayer
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

