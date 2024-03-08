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
          // img: "/img/sales.0ae38c07.svg",
          img: require("../assets/catalog_icons/sales.svg")
        },
        {
          name: "Саморазвитие",
          top: 28,
          right: -19,
          img: require("../assets/catalog_icons/personal_development.svg")
        },
        {
          name: "Научпоп",
          top: 30,
          right: -35,
          img: require("../assets/catalog_icons/scincepop.svg")
        },
        {
          name: "Детям",
          top: 30,
          right: -15,
          img: require("../assets/catalog_icons/kids.svg")
        },
        {
          name: "Психология",
          top: 50,
          right: -43,
          img: require("../assets/catalog_icons/psychology.svg")
        },
        {
          name: "Манга",
          top: -7,
          right: 0,
          img: require("../assets/catalog_icons/manga.svg")
        },
      ],
      categories2: [
        {
          name: "Ежедневники",
          top: -30,
          right: 40,
          img: require("../assets/catalog_icons/everyday_book.svg")
        },
        {
          name: "Бизнес",
          top: -30,
          right: -3,
          img: require("../assets/catalog_icons/buisness.svg")
        },
        {
          name: "Художественная литература",
          top: 40,
          right: 35,
          img: require("../assets/catalog_icons/art_litr.svg")
        },
        {
          name: "Экономика",
          top: -25,
          right: -40,
          img: require("../assets/catalog_icons/economy.svg")
        },
        {
          name: "Исскуство",
          top: 45,
          right: 0,
          img: require("../assets/catalog_icons/art.svg"),
        },
        {
          name: "Классическая литература",
          top: 50,
          right: 30,
          img: require("../assets/catalog_icons/classic.svg")
        },
      ],
    };
  },

};
</script>