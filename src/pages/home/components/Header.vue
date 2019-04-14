<template>
    <div class="header">
        <router-link tag="div" to="/city"  class="header-city">
            {{this.city}}       
        </router-link>
        <div class="select-city iconfont">&#xe644;</div>
        <div class="header-search">
            <router-link tag="div" to="/entry" class="search">
                <span class="search-icon iconfont">&#xe78d;</span>
                输入城市/商品
            </router-link>        
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'Header',
    computed:{
        ...mapState(['city'])
    }
}
</script>
<style lang="stylus" scoped>
@import '~style/mixins.styl'
@import '~style/varibles.styl'
.header
    position: fixed
    top: 0
    max-width: 640px
    width: 100%
    z-index: 999
    display: flex
    line-height: 3rem
    background-color: $bgColor
    .header-city
        flex:1
        ellipsis()
    .select-city
        width :1rem
        font-size: 1rem
        float: right 
    .header-search
        flex:4
        position: relative
        .search
            background-color: #e5e5e5
            color: #7d7e80
            border-radius: 1rem
            line-height: 2rem
            position: absolute
            top:50%
            left:50%
            width: 90%
            transform:translate(-50%,-50%)
            .search-icon
                font-size: 1rem
</style>


