<template>
  <div class="footer">
    <div class="upper_line">
      <div class="info_block1">
        <img src="../assets/logo.svg" alt="" id="logo1" />
        <div class="work_info">
          <p>+7(910) 441-48-39</p>
          <p>Бесплатно по России</p>
          <p>С 9 до 20 во все дни</p>
        </div>
        <div class="tech_support">
          <p>is25baryats@artcollege.ru</p>
          <p>Cлужба поддержки</p>
        </div>
      </div>
      <div class="info_block2">
        <p id="Partner">Партнерам</p>
        <div class="partner_info">
          <p>Стать автором</p>
          <p id="distribution">Дистрибуция</p>
          <p>Для бизнеса</p>
        </div>
      </div>
      <div class="info_block3">
        <p id="Law">Правовая Информация</p>
        <div class="law_info">
          <p id="user_agree">Пользовательское соглашение</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </div>
    <div
      style="
        width: calc(100% - 136px);
        height: 1px;
        background-color: black;
        margin: 24px 68px 12px 68px;
        border-radius: 1px;
      "
    ></div>
    <div class="down_line">
      <div class="rights">
        <p class="copy_right">
          ©<img src="../assets/logo.svg" alt="" id="logo2" />
        </p>
        <p>2023-2024</p>
      </div>
      <div class="social_networks">
        <img src="../assets/icons/vk.svg" />
        <img src="../assets/icons/telega.svg" />
        <img src="../assets/icons/github.svg" />
        <img src="../assets/icons/yotube.svg" />
      </div>
      <div class="payments">
        <img src="../assets/payments/Bitcoin.svg" alt="" />
        <img src="../assets/payments/MNP.svg" alt="" />
        <img src="../assets/payments/Paypal.svg" alt="" />
        <img src="../assets/payments/WebMoney.svg" alt="" />
        <img src="../assets/payments/YandexPay.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  width: 100%;
  height: 430px;
  background-color: #f7f7f7;
}

.upper_line {
  display: flex;
  justify-content: space-between;
}

.info_block1 {
  width: 310px;
  margin-left: 68px;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #000;
}

.work_info {
  margin: 24px 0px;
}

#logo1 {
  width: 260px;
  height: 58px;
  margin-top: 24px;
}

.info_block2 {
  width: 170px;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #000;
  margin-top: 40px;
}
#Partner {
  font-weight: 600;
  font-size: 32px;
}
.partner_info {
  margin-top: 30px;
}

#distribution {
  margin: 16px 0px;
}

#Law {
  font-size: 32px;
}

.info_block3 {
  margin-top: 40px;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  margin-right: 68px;
}

.law_info {
  margin-top: 30px;
  font-size: 20px;
}
#user_agree {
  margin-bottom: 16px;
}

#logo2 {
  width: 170px;
  height: 40px;
}

.down_line {
  display: flex;
  justify-content: space-between;
}

.rights {
  margin-left: 68px;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 20px;
}
.copy_right {
  display: flex;
  align-items: flex-end;
  margin-bottom: 4px;
}

.social_networks {
  display: flex;
  gap: 12px;
}

.social_networks > * {
  cursor: pointer;
}

.payments {
  margin-right: 68px;
  display: flex;
  gap: 12px;
}
.payments > * {
  cursor: pointer;
}

@media (min-width: 320px) and (max-width: 767px) {
  .footer {
    height: 480px;
  }
  .info_block1 {
    font-size: 10px;
    margin-left: 4px;
    height: 200px;
    width: 200px;
  }

  .work_info {
    margin: 6px 0px;
  }

  #logo1 {
    width: 100px;
  }

  .info_block2 {
    font-size: 12px;
    height: 200px;
    margin-top: 50px;
    height: 120px;
  }

  #Partner {
    font-size: 12px;
  }

  #distribution {
    margin: 8px 0px;
  }

  #Law {
    font-size: 12px;
  }
  .info_block3 {
    margin-top: 40px;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    margin-right: 4px;
    height: 140px;
  }

  .law_info {
    margin-top: 20px;
    font-size: 10px;
  }
  #user_agree {
    margin-bottom: 8px;
  }

  .down_line {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
  }

  .rights {
    margin-left: 0px;
  }

  .payments {
    margin-right: 0px;
    gap: 0px;
    flex-wrap: wrap;
    justify-content: center;
  }
}
@media (min-width: 767px) and (max-width: 1023px) {
  .footer{
    height: 480px;
  }
  .upper_line{
    justify-content: center;
    gap: 24px ;
  }

  .payments{
    margin-right: 0px;
    flex-wrap: wrap;
  }

  .down_line{
        justify-content: center;
    gap: 24px ;
  }
}
</style>
<script>
export default {};
</script>