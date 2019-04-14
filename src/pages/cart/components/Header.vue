<template>
    <div class="header">
        <div class="header-back" @click="handleGoBackClick">
            <div class="back-icon iconfont">&#xe62d;</div>
        </div>
        <div class="header-title">
            购物车
        </div>
    </div>
</template>

<script>
export default {
    name:'Header',
    methods:{
        handleGoBackClick:function(){
            history.go(-1)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
    position: fixed
    top: 0
    max-width: 640px
    width: 100%
    display: flex
    line-height: 3rem
    background-color: $bgColor
    text-align :center
    .header-back
        position :absolute
        left :0
        z-index :1
        .back-icon
            width :3rem
            font-size:1rem   
    .header-title
        width :100%  
        position: relative
</style>


