<template>
    <div class="wrapper" >
        <van-button v-if="userno" class="btn" @click="handleLogoutClick" plain type="danger">退出登录</van-button>
        <van-button v-else class="btn" @click="handleLoginClick" plain type="danger">登录</van-button>
    </div>
</template>

<script>
import { Button } from 'vant';
import {mapState,mapMutations} from "vuex"
export default {
    name:'LogOut',
    computed:{
        ...mapState(['userno']),
        ...mapState(['token'])
    },
    methods:{
        handleLogoutClick:function(){
            this.logout();
            this.$toast('已退出');
        },
        handleLoginClick:function(){
            this.$router.push({path:'/login',query:{redirect:this.$route.fullPath}})
        },
        ...mapMutations(['logout'])
    }
}
</script>

<style lang="stylus" scoped>
.wrapper
    width: 100%
    padding: .6rem
    box-sizing:border-box
    .btn
        width :100%
</style>