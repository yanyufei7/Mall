<template>
    <div class="info">
        <div class="item-price">
            <span class="item-price-now"><span>￥</span>{{info.price}}</span>
            <del class="item-price-pre">￥{{info.preprice}}</del>
            <span class="item-sell">已销{{info.sell}}</span>
        </div>
        <div class="item-title">{{info.title}}</div>
    </div>
</template>

<script>
export default {
    name:'Info',
    props:{
        info:Object
    }
}
</script>

<style lang="stylus" scoped>
.info
    width :100%
    background-color :#fff
    .item-price
        padding :.6rem
        text-align :left
        position :relative
        height :2rem
        .item-price-now
            color :orange
            font-size :2rem    
            span 
                font-size:1rem
        .item-price-pre
            color:#ccc
        .item-sell
            height :100%
            line-height :2rem
            float:right
    .item-title
        text-align :left
        padding :0 .6rem .6rem .6rem
        font-weight:bold
        overflow:hidden
        text-overflow:ellipsis
        white-space:nowrap
</style>


