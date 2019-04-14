<template>
    <div class="banner"  @click="handleBannerClick">
        <swiper :options="swiperOption"  ref="mySwiper">
            <swiper-slide v-for="item of imgList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>    
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>  
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { ImagePreview } from 'vant'
export default {
    name:'Banner',
    components:{
        swiper,
        swiperSlide,
        swiperSlideIndex:0
    },
    props:{
        imgList:Array
    },
    data(){
      return{
          swiperOption:{
              pagination:'.swiper-pagination',
              paginationType:'fraction'
          }
      }
    },
    computed:{
        swiper() {
            return this.$refs.mySwiper.swiper
        },
        imgUrlList(){
            const imgUrlList=[];
            for(let i of this.imgList){
                imgUrlList.push(i.imgUrl)
            }
            return imgUrlList;
        }
    },
    methods:{
        handleBannerClick(){
            const instance=ImagePreview({
                images:this.imgUrlList,
                startPosition:this.swiper.activeIndex
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.banner
    position relative
    height:0;
    padding-bottom:100%
    overflow:hidden
    .swiper-img
        width :100%
</style>


