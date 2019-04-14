<template>
        <div class="header">
            <router-link tag="div" to="/"  class="header-back">
                <span class="back-icon iconfont">&#xe62d;</span>
            </router-link>
            <div class="header-search">
                <input v-model="keyword" ref="search" class="search-input" type="text" placeholder="输入商品/店铺"/>       
            </div>
            <div class="search-btn">
                <div class="btn">搜索</div>
            </div>
        </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            keyword:""
        }
    },
    mounted(){
        this.$refs.search.focus()
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
    .header-back
        flex:1
        height :100%
        .back-icon
            font-size:1rem   
    .header-search
        flex:5
        position: relative
        .search-input
            background-color: #e5e5e5
            color: #7d7e80
            padding:0 1rem
            border-radius: 1rem
            line-height: 2rem
            position: absolute
            top:50%
            left:50%
            width: 80%
            transform:translate(-50%,-50%)
    .search-btn
        flex:1
        position: relative
        .btn
            background-color: #e5e5e5
            color: #7d7e80
            border-radius: 1rem
            line-height: 2rem
            position: absolute
            top:50%
            left:50%
            width: 90%
            transform:translate(-50%,-50%)   
</style>