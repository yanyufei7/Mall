<template>
    <div class="tabbar">
        <div class="tabbar-wrap">
            <router-link tag="div" class="tabbar-item" to="/">
                <span class="tabbar-item-icon iconfont">&#xe65f;</span>
                <div class="tabbar-item-text">首页</div>
            </router-link>
            <router-link tag="div" class="tabbar-item" to="/recommend">
                <span class="tabbar-item-icon iconfont">&#xe67b;</span>
                <div class="tabbar-item-text">推荐</div>
            </router-link>
            <router-link tag="div" class="tabbar-item" to="/search">
                <span class="tabbar-item-icon iconfont">&#xe78d;</span>
                <div class="tabbar-item-text">搜索</div>
            </router-link>
            <router-link tag="div" class="tabbar-item" to="/cart">
                <span class="tabbar-item-icon iconfont">&#xe600;</span>
                <div class="tabbar-item-text">购物车</div>
            </router-link>
            <router-link tag="div" class="tabbar-item" to="/person">
                <span class="tabbar-item-icon iconfont">&#xe60d;</span>
                <div class="tabbar-item-text">个人中心</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabBar',
  data(){
    return{

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.tabbar
    position: fixed
    max-width: 640px
    bottom: 0
    width: 100%
    box-sizing: border-box
    .tabbar-wrap
        display:flex
        height: 3rem
        width: 100%
        font-size: .8rem
        .tabbar-item
            flex:1
            text-align: center
            vertical-align: center
            position: relative
            color:#333
            background-color: #fff
            .tabbar-item-icon
                font-size:1.8rem
        .router-link-exact-active
            color:$bgColor
</style>