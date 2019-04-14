<template>
    <div class="enter">
        <ul class="enter-list">
            <li class="enter-item">
                <img class="enter-item-img" src="../../../assets/images/menu01.png" alt="">
                <div class="enter-item-title">限时秒杀</div>
            </li>
            <li class="enter-item">
                <img class="enter-item-img" src="../../../assets/images/menu02.png" alt="">
                <div class="enter-item-title">断码清仓</div>
            </li>
            <li class="enter-item">
                <img class="enter-item-img" src="../../../assets/images/menu03.png" alt="">
                <div class="enter-item-title">品牌馆</div>
            </li>
            <li class="enter-item">
                <img class="enter-item-img" src="../../../assets/images/menu04.png" alt="">
                <div class="enter-item-title">9块9特卖</div>
            </li>
            <li class="enter-item">
                <img class="enter-item-img" src="../../../assets/images/menu05.png" alt="">
                <div class="enter-item-title">每日好店</div>
            </li>
            <li class="enter-item">
                <img class="enter-item-img" src="../../../assets/images/menu06.png" alt="">
                <div class="enter-item-title">充值中心</div>
            </li>
            <li class="enter-item">
                <img class="enter-item-img" src="../../../assets/images/menu07.png" alt="">
                <div class="enter-item-title">爱逛街</div>
            </li>
            <li class="enter-item">
                <img class="enter-item-img" src="../../../assets/images/menu08.png" alt="">
                <div class="enter-item-title">现金签到</div>
            </li>
            <li class="enter-item">
                <img class="enter-item-img" src="../../../assets/images/menu09.png" alt="">
                <div class="enter-item-title">食品超市</div>
            </li>
            <li class="enter-item">
                <img class="enter-item-img" src="../../../assets/images/menu10.png" alt="">
                <div class="enter-item-title">电器城</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Enter'
}
</script>

<style lang="stylus" scoped>
.enter
    width: 100%
    position: relative
    zoom: 1
    background-color: #fff
    .enter-list
        list-style: none
        .enter-item
            float: left
            overflow: hidden
            width: 20%
            padding: .2rem 0
            .enter-item-img
                width: 60%
                .enter-item-title
                    font-size: .8rem

.enter::after
    display: block
    clear: both
    content: ''
    height: 0
</style>


