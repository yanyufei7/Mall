<template>
    <div class="swiper-wrap">
        <swiper :options="swiperOption">
        <swiper-slide v-for="item of adImgs" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>  
        <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:'Swiper',
    components:{
        swiper,
        swiperSlide
    },
    props:{
        adImgs:Array
    },
    data(){
      return{
          swiperOption:{
              slidesPerView: 1.1,
              pagination:'.swiper-pagination',
              paginationType : 'custom'
          }
      }
    }
}
</script>
<style lang="stylus" scoped>
.swiper-wrap
    width: 100%
    margin-top: 3.6rem
    padding-bottom: 1rem
    .swiper-slide
        width: 100%
        box-sizing: border-box
        .swiper-img
            width: 95%
</style>


