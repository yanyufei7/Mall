<template>
    <div class="list">
        <ul class="wrapper">
            <li class="item">收货地址<span class="iconfont more">&#xe628;</span></li>
            <li class="item">商品收藏<span class="iconfont more">&#xe628;</span></li>
            <li class="item">店铺收藏<span class="iconfont more">&#xe628;</span></li>
            <li class="item">关于我们<span class="iconfont more">&#xe628;</span></li>
            <li class="item">设置<span class="iconfont more">&#xe628;</span></li>           
        </ul>
    </div>
</template>

<script>
export default {
    name:'List'
}
</script>

<style lang="stylus" scoped>
.list
    width: 100%
    .wrapper
        width: 90%
        margin:2.5rem auto
        border-radius: .6rem
        padding: .6rem
        background-color:#fff  
        .item
            width: 100%
            padding: .8rem 0
            text-align: left
            font-size: .8rem
            border-bottom: 1px solid #ddd
            &:last-child
                border-bottom:none
            .more
                float: right     
</style>


