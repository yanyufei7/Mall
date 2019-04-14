<template>
    <div class="wrapper" >
        <van-button v-if="user" class="btn" @click="handleLogoutClick" plain type="danger">退出登录</van-button>
        <van-button v-else class="btn" @click="handleLoginClick" plain type="danger">登录</van-button>
    </div>
</template>

<script>
import { Button } from 'vant';
import {mapState,mapMutations} from "vuex"
export default {
    name:'LogOut',
    computed:{
        ...mapState(['user'])
    },
    methods:{
        handleLogoutClick:function(){
            this.logout(this.user);
            console.log('已退出');
            this.$toast('已退出');
        },
        handleLoginClick:function(){
            this.$router.push('./login')
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