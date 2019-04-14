<template>
    <div class="footer">
        <div class="wrapper">
            <div class="item" v-show="type" @click="handleSelectClick">
                <div class="login-icon iconfont">&#xe7c5;</div>
                <p class="login-title">账号密码登录</p>
            </div>
            <div class="item" v-show="!type" @click="handleSelectClick">
                <div class="login-icon iconfont">&#xe6a6;</div>
                <p class="login-title">短信登录</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer',
    data(){
        return{
            type:true
        }
    },
    methods:{
        handleSelectClick:function(){
            this.type=!this.type
            this.$emit('change',this.type);
        }
    }
}
</script>

<style lang="stylus" scoped>
.footer
    width :100%
    position :relative
    .wrapper
        padding :5rem 0
        .item
            .login-icon
                width :2rem
                height :2rem
                margin :0 auto
                padding :.5rem
                font-size:2rem
                border-radius:100%
                background-color :#ff976a
            .login-title
                padding :.4rem 0
</style>


