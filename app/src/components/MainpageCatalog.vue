<template>
  <div class="catalog">
    <div class="catalog_line">
      <p style="font-weight: 500">Каталог книг</p>
      <router-link to="/catalog" class="link_catalog"
        ><p id="see_all">
          Смотреть все
          <img src="../assets/icons/Chevron_Right_Duo.svg" alt="" /></p
      ></router-link>
    </div>
    <div class="categories">
      <div class="category_line">
        <CategoryCard
          v-for="item in categories1"
          :key="item"
          :img="item.img"
          :name="item.name"
          :top_px="item.top"
          :right_px="item.right"
        >
        </CategoryCard>
      </div>
      <div class="category_line">
        <CategoryCard
          v-for="item in categories2"
          :key="item"
          :img="item.img"
          :name="item.name"
          :top_px="item.top"
          :right_px="item.right"
        >
        </CategoryCard>
      </div>
    </div>
  </div>
</template>
<style scoped>
.catalog {
  margin-top: 40px;
  margin-bottom: 32px;
}

.catalog_line {
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat Alternates";
  font-size: 24px;
}

.catalog_line > p {
  margin: 0px 68px;
}

#see_all {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.link_catalog {
  margin-right: 68px;
  text-decoration: none;
  color: #000;
}
.categories {
  margin:0px 68px;
  display: flex;
  flex-direction: column;
}

.category_line{
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
</style>
<script>
import CategoryCard from "./CategoryCard.vue";
export default {
  components: {
    CategoryCard,
  },
  data: function () {
    return {
      categories1: [
        {
          name: "Скидки",
          top: -35,
          right: 40,
          img: "/img/sales.0ae38c07.svg",
        },
        {
          name: "Саморазвитие",
          top: 28,
          right: -19,
          img: "/img/personal_development.1fe619e2.svg",
        },
        {
          name: "Научпоп",
          top: 30,
          right: -35,
          img: "/img/scincepop.0dbbab63.svg",
        },
        {
          name: "Детям",
          top: 30,
          right: -15,
          img: "/img/kids.50ce9257.svg",
        },
        {
          name: "Психология",
          top: 50,
          right: -43,
          img: "/img/psychology.6df1b057.svg",
        },
        {
          name: "Манга",
          top: -7,
          right: 0,
          img: "/img/manga.94038c35.svg",
        },
      ],
      categories2: [
        {
          name: "Ежедневники",
          top: -30,
          right: 40,
          img: "/img/everyday_book.02d58631.svg",
        },
        {
          name: "Бизнес",
          top: -30,
          right: -3,
          img: "/img/buisness.2f7bdf59.svg",
        },
        {
          name: "Художественная литература",
          top: 40,
          right: 35,
          img: "/img/art_litr.cb88b5a0.svg",
        },
        {
          name: "Экономика",
          top: -25,
          right: -40,
          img: "/img/economy.c449e9df.svg",
        },
        {
          name: "Исскуство",
          top: 45,
          right: 0,
          img: "/img/art.ccaff680.svg",
        },
        {
          name: "Классическая литература",
          top: 50,
          right: 30,
          img: "/img/classic.fa024828.svg",
        },
      ],
    };
  },
};
</script>