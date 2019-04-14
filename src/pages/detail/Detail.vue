<template>
    <div>
        <keep-alive>
            <detail-header  :commonY="commonY" :listY="listY"></detail-header>
        </keep-alive>
        <detail-banner :imgList="imgList"></detail-banner>
        <detail-info :info="info"></detail-info>
        <keep-alive>
            <detail-comment :comment="comment" @change="handleChangeCommonY"></detail-comment>
        </keep-alive>
        <keep-alive>
            <detail-list :info="info" @change="handleChangelistY"></detail-list>
        </keep-alive>
        <keep-alive>
            <common-top></common-top>
        </keep-alive>
        <detail-cart :skuData="skuData"></detail-cart>
        <common-footer></common-footer>
    </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailInfo from './components/Info'
import DetailComment from './components/Comment'
import DetailList from './components/List'
import DetailCart from './components/Cart'
import CommonTop from '../../components/top/Top'
import CommonFooter from '../../components/footer/Footer'
//引入axios调用HTTP请求
import axios from 'axios'
export default {
    name:'Detail',
    data(){
        return{
            info:{},
            imgList:[],
            comment:{},
            skuData:{},
            commonY:0,
            listY:0
        }
    },
    components:{
        DetailHeader,
        DetailBanner,
        DetailInfo,
        DetailComment,
        DetailList,
        DetailCart,
        CommonTop,
        CommonFooter
    },
    methods:{
        getDetailinfo:function(){
            axios.get('/api/good.json').then(this.getDetailInfoSucc)
        },
        getDetailInfoSucc:function(res){
            res=res.data
            if(res.ret&&res.data){
                this.info=res.data.info;
                this.imgList=res.data.info.imgList;
                this.comment=res.data.comment;
                this.skuData=res.data.skuData;
            }
        },
        handleChangeCommonY:function(val){
            this.commonY=val
        },
        handleChangelistY:function(val){
            this.listY=val
        }
    },
    mounted(){
        this.getDetailinfo()
    }
}
</script>

<style scoped>

</style>


