<template>
<div>
  <home-header></home-header>
  <home-swiper :adImgs="adImgs"></home-swiper>
  <home-enter></home-enter>
  <home-list :goodList="goodList"></home-list>
  <keep-alive>
    <common-top></common-top>
  </keep-alive>
  <common-footer></common-footer>
  <common-tabbar></common-tabbar>
  
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeEnter from './components/Enter'
import HomeList from './components/List'
import CommonTop from '../../components/top/Top'
import CommonFooter from '../../components/footer/Footer'
import CommonTabbar from '../../components/tabBar/TabBar'
//引入axios调用HTTP请求
import axios from 'axios'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeEnter,
    HomeList,
    CommonTop,
    CommonFooter,
    CommonTabbar
  },
  data(){
    return{
      adImgs:[],
      goodList:[]
    }
  },
  methods:{
        getHomeList:function(){
            axios.get('/api/home.json').then(this.getHomeListSucc)
        },
        getHomeListSucc:function(res){
            res=res.data
            if(res.ret&&res.data){
                this.adImgs=res.data.adImgs;
                this.goodList=res.data.goodList;
            }
        }
    },
    mounted(){
        this.getHomeList()
    }
}
</script>

<style>

</style>