<template>
    <div class="list">
        <router-link tag="div" :to="'/detail/'+item.id" class="item" v-for="item of goodList" :key="item.id">
            <img class="item-img" v-lazy="item.imgUrl"/>
            <div class="item-info">
                <div class="title">{{item.name}}</div>
                <div class="price">￥{{item.price}}</div>
                <div class="btn iconfont">&#xe600;</div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'List',
    props:{
        goodList:Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
@import '~style/mixins.styl'
.list
    width: 100%
    overflow: auto
    margin-top: .6rem
    .item
        width: 100%
        display: flex
        padding: .3rem
        margin: .3rem 0
        background: #fff
        .item-img
            flex:1
            width: 20%
            height: 20%
        .item-info
            flex:2
            position: relative
            text-align: left
            padding: .5rem
            .title
                twoellipsis()
            .price
                position: absolute
                left: 1rem
                bottom: 0
                font-size: 1.2rem
                color:$bgColor
            .btn
                position: absolute
                right: 1rem
                bottom: 0
                font-size: 2rem
                color:$bgColor
</style>


