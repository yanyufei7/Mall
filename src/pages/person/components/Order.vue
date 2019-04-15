<template>
    <div class="order">
        <div class="order-wrap">
            <router-link tag="div" to="/olist/all" class="myorder">
                我的订单
                <span class="allorder iconfont">全部订单&#xe628;</span>
            </router-link>
            <div class="orderkind">
                <router-link tag="div" to="/olist/pay" class="order-item">
                    <div class="order-icon iconfont">&#xe601;</div>
                    <div class="order-title">待付款</div>
                </router-link>
                <router-link tag="div" to="/olist/send" class="order-item">
                    <div class="order-icon iconfont">&#xe655;</div>
                    <div class="order-title">待发货</div>
                </router-link>
                <router-link tag="div" to="/olist/get" class="order-item">
                    <div class="order-icon iconfont">&#xe60c;</div>
                    <div class="order-title"> 待收货</div>
                </router-link>
                <router-link tag="div" to="/olist/comment" class="order-item">
                    <div class="order-icon iconfont">&#xe60b;</div>
                    <div class="order-title">待评价</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Order'
}
</script>

<style lang="stylus" scoped>
.order
    width: 100%
    .order-wrap
        width: 90%
        margin:-1.5rem auto
        border-radius: .6rem
        padding: .5rem
        background-color:#fff
        .myorder
            width: 100%
            padding: .6rem 0
            text-align: left
            font-size: .8rem
            border-bottom: 1px solid #ddd
            .allorder
                font-size: .8rem
                float: right
        .orderkind
            width: 100%
            display: flex
            padding: .4rem 0
            color: #58595b
            .order-item
                flex:1
                font-size: .8rem
                line-height: 2rem
                .order-icon
                    font-size: 1.6rem
</style>


