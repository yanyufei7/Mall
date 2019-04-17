<template>
<div class="search">
  <search-left :categories="categories" @change="handleChangeKind"></search-left>
  <search-right :categories="categories" :title="title"></search-right>
  <common-tabbar></common-tabbar>
</div>
</template>

<script>
import SearchLeft from './components/Left'
import SearchRight from './components/Right'
import CommonTabbar from '../../components/tabBar/TabBar'
export default {
  name: 'Search',
  components:{
    SearchLeft,
    SearchRight,
    CommonTabbar
  },
  data(){
    return{
      categories:{},
      title:''
    }
  },
  methods:{
    getCategories:function(){
      this.axios.get('/api/category.json').then(this.handelGetCategoriesSucc)
    },
    handelGetCategoriesSucc(res){
      res=res.data;
      if(res.ret&&res.data){
        this.categories=res.data.category;
        //console.log(this.categories)
      }
    },
    handleChangeKind:function(title){
      this.title=title;
    }
  },
  mounted(){
    //获取商品分类
    this.getCategories();
  }
}
</script>

<style scoped>

</style>