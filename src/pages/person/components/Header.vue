<template>
    <div class="header">
        <div class="user-info" v-if="userno">
            <img class="user-img" src="../../../assets/images/头像 男孩.png"/>
            <div class="user-mobile">
                <div class="mobile-txt">{{this.userno}}</div>
                <div class="mobile-icon iconfont">&#xe6a6;</div>
            </div>
            <div class="more iconfont">&#xe628;</div>
        </div>
        <div class="user-info" v-else>
            <img class="user-img" src="../../../assets/images/头像 男孩.png"/>
            <div class="user-mobile" @click="handleLoginClick">未登录</div>
            <div class="more iconfont">&#xe628;</div>
        </div>       
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'Header',
    computed:{
        ...mapState(['userno'])
    },
    methods:{
        handleLoginClick:function(){
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl'
@import '~style/varibles.styl'
.header
    width: 100%
    padding:2rem 0
    background-color: $bgColor
    .user-info
        width: 90%
        margin: auto
        display: flex
        align-items: center
        .user-img
            width: 20%
            height: 20%
        .user-mobile
            font-size: 1rem
            text-align: left
            flex:1
            width :100%
            overflow :hidden
            .mobile-txt
                max-width :60%
                ellipsis()
                float:left
            .mobile-icon
                width :1rem
                float:left
                color:blue
                font-size:1.2rem
        .more
            width: 10%
            float :right
</style>


