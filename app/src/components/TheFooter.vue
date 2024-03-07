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
    </div>
  </div>
</template>
<style scoped>
.footer {
  width: 100%;
  height: 410px;
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

.down_line{
  display: flex;
  justify-content: space-between;
}

.rights{
  margin-left: 68px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 20px;
}
.copy_right {
  display: flex;
  align-items: flex-end;
  margin-bottom: 4px;
}
</style>
<script>
export default {};
</script>