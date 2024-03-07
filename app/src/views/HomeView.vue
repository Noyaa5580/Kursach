<template>
  <div>
    <BannerSlider/>
    <MainpageCatalog/>
    <ProductsSliders/>
  </div>
</template>
<script>
import BannerSlider from '../components/BannerSlider.vue'
import MainpageCatalog from '../components/MainpageCatalog.vue'
import ProductsSliders from '../components/ProductsSliders.vue'

export default {
  components:{
    BannerSlider,
    ProductsSliders,
    MainpageCatalog
  }
}
</script>


