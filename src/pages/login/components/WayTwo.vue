<template>
    <div class="wrapper">
        <div class="input-group">
            <div class="name">
                <input v-model="loginInfo.name" class="name-input" type="text" placeholder="输入用户名/邮箱/手机号"/>       
            </div>
            <div class="pwd">
                <input v-model="loginInfo.pwd" class="pwd-input" type="password" placeholder="输入登录密码"/>       
            </div>
        </div>
        <div class="btn-group">
            <div class="submit">
                <van-button @click="handleSubmitClick" class="submit-btn" :disabled="disabled" type="warning">登录</van-button>
            </div>
            <div class="back">
                <van-button @click="handleBackClick" class="back-btn" plain type="warning">返回</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Button } from 'vant';
import { Notify } from 'vant';
import {mapMutations} from 'vuex';
export default {
    name:'WayTwo',
    data(){
        return {
            loginInfo:{
                name:'',
                pwd:'',
            },
            disabled:true
        }
    },
    watch:{
        loginInfo:{
            handler:function(val,oldval){
                if(val.name.length>0&&val.pwd.length>0){
                    this.disabled=false
                }else{
                    this.disabled=true
                }
            },
            deep:true
        }
    },
    methods:{
        handleBackClick:function(){
            history.go(-1)
        },
        handleSubmitClick:function(){
            if(this.loginInfo.name!=null&&this.loginInfo.pwd!=null){
                this.axios.get('/api/info.json').then(this.getLoginSucc)          
            }
        },
        getLoginSucc:function(res){
            res=res.data
            if(res.ret&&res.data){
                this.login(res.data.info);
                this.$notify({message:'登录成功',duration:1000,background:'orange'});
                this.$router.push(this.$route.query.redirect);
            }
        },
        ...mapMutations(['login'])
    }
}
</script>

<style lang="stylus" scoped>
.wrapper
    margin-top :3rem
    .input-group
        padding :1rem 0
        .vertical
            color :#ccc
        .name
            height :3rem
            line-height :3rem
            background-color :#fff
            padding :.5rem 2rem
            border-bottom:1px solid #ccc
            text-align :left
        .pwd
            height :3rem
            line-height :3rem
            background-color :#fff
            padding :.5rem 2rem
            text-align :left
            .sendbtn
                line-height :3rem
                float :right
                color :red
    .btn-group
        width :100%
        .submit
        .back
            padding :.5rem
            .submit-btn
            .back-btn
                width :100%
</style>


