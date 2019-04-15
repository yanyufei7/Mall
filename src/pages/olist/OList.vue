<template>
    <div>
        <olist-header></olist-header>
        <router-view :orderList="orderList"></router-view>
        <common-tabbar></common-tabbar>
    </div>
</template>

<script>
import OlistHeader from './components/Header'
import CommonTabbar from '../../components/tabBar/TabBar'
//引入axios调用HTTP请求
import axios from 'axios'
export default {
    name:'OList',
    components:{
        OlistHeader,
        CommonTabbar
    },
    data(){
        return{
            orderList:{}
        }
    },
    
}
</script>

<style lang="stylus" scoped>

</style>


