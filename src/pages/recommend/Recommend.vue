<template>
<div>
  <recommand-list :recommendList="recommendList"></recommand-list>
  <common-footer></common-footer>
  <common-tabbar></common-tabbar>
  <common-loading v-if="loading"></common-loading>
</div>
</template>

<script>
import RecommandList from './components/List'
import CommonFooter from '../../components/footer/Footer'
import CommonTabbar from '../../components/tabBar/TabBar'
import CommonLoading from '../../components/loading/Loading'

//引入axios调用HTTP请求
import axios from 'axios'
export default {
  name: 'Recommend',
  components:{
    RecommandList,
    CommonFooter,
    CommonTabbar,
    CommonLoading
  },
  data(){
    return{
      recommendList:[],
      loading:true
    }
  },
  methods:{
    getRecommendList:function(){
      axios.get('/api/recommend.json').then(this.getRecommendListSucc)
    },
    getRecommendListSucc:function(res){
      res=res.data
      if(res.ret&&res.data){
        this.recommendList=res.data.recommendlist
      }
      this.loading=false
    }
  },
  mounted(){
    this.getRecommendList()
  }
}
</script>

<style>

</style>