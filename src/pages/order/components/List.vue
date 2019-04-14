<template>
    <div class="list">
        <div class="item" v-for="item of orderlist" :key="item.id">
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
                    <li class="footer-item">配送方式<span class="iconfont more">&#xe628;</span></li>
                    <li class="footer-item">运费险<span class="iconfont more">&#xe628;</span></li>
                    <li class="footer-item">订单备注<input class="input" :value="item.remark" type="text" placeholder="选填"/></li>
                    <li class="footer-item">
                        <div class="item-wrap">
                            <span class="num_item">共{{item.num}}件</span>
                            <span class="sum_item">小计:</span>
                            <span class="pri_item">￥{{item.sum}}</span>
                        </div>
                    </li>
                </ul>
            </div>         
        </div>   
    </div>
</template>

<script>
export default {
    name:'List',
    props:{
        orderlist:Array
    },
    methods:{

    }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl'
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
                    .more
                        float: right
                    .input
                        padding:0 .3rem
                    .item-wrap
                        text-align :right   
                        .num_item
                            color:#ccc
                        .sum_item
                            color:#333
                        .pri_item
                            color:orange
                    
</style>


