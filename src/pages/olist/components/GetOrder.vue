<template>
<div>
    <div class="list" v-if="getorder.length">
        <div class="item" v-for="item of getorder" :key="item.id">
            <div class="title">
                待收货
            </div>
            <div class="top-wrap">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <div class="item-title">{{item.name}}</div>
                    <div class="item-standard">{{item.type}}</div>
                </div>
                <div class="item-price">
                    <div class="item-price-val">￥{{item.price}}</div>
                    <div  class="item-price-num">×{{item.num}}</div>
                </div> 
            </div> 
            <div class="footer-wrap">
                <ul class="footer">
                    <li class="footer-item">
                        <div class="item-wrap">
                            <span class="num_item">共{{item.num}}件商品</span>
                            <span class="sum_item">合计:￥{{item.sum}}</span>
                        </div>
                    </li>
                </ul>
            </div>         
        </div>   
    </div>
    <div class="list" v-else>
        <div class="item">暂无数据</div>
    </div>
</div>
</template>

<script>
export default {
    name:'GetOrder',
    data(){
        return{
            getorder:[]
        }
    },
    methods:{
        getOrderList:function(){
            this.axios.get('/api/orderlist.json').then(this.getOrderListSucc)
        },
        getOrderListSucc:function(res){
            res=res.data
            if(res.ret&&res.data){
                this.getorder=res.data.orderlist.getorder;
            }
        }
    },
    created(){
        this.getOrderList()
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl'
@import '~style/varibles.styl'
.list
    margin-top :4rem
    .item
        width :95%
        margin : auto
        margin-top :1rem
        background-color :#fff
        padding :.8rem
        border-radius: .6rem
        box-sizing :border-box
        .title
            height :1rem
            text-align :left
            width :100%
            padding :.4rem 0
            color :$bgColor
        .top-wrap
            height :6rem
            display :flex
            .item-img
                width :6rem
                height :6rem
                border-radius: .2rem
            .item-info
                padding :0 .6rem
                flex:1
                overflow :hidden
                .item-title
                    text-align :left
                    padding :0
                    word-break: break-all;
                    word-wrap: break-word;
                    overflow:hidden
                    text-overflow:ellipsis
                    display:-webkit-box
                    -webkit-box-orient:vertical
                    -webkit-line-clamp:2    
                .item-standard
                    margin-top :1rem
                    color:#ccc
                    text-align :left
            .item-price
                width :4rem
                .item-price-val
                .item-price-num
                    width:100%
                    float:left
                    wrap()
                    text-align :right
        .footer-wrap
            width :100%
            line-height :2rem
            box-sizing :border-box
            display :flex
            .footer
                width: 100%
                border-radius: .6rem
                background-color:#fff  
                .footer-item
                    width: 100%
                    padding: .5rem 0
                    text-align: left
                    .item-wrap
                        text-align :right 
                        .num_item
                            color:#ccc
                            padding :0 .2rem
                        .sum_item
                            color:#333
                            padding :0 .2rem
                    
</style>


