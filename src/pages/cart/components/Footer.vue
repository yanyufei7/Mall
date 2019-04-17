<template>
<div>
    <van-submit-bar class="footer"
        :price="allSum*100"
        button-text="结算"
        @submit="handleSubmitClick">
    </van-submit-bar>
</div>
</template>

<script>
import { SubmitBar } from 'vant';
export default {
    name:'Footer',
    data(){
        return {
            checked:true
        }
    },
    props:{
        allSum:Number
    },
    methods:{
        handleSubmitClick:function(){
            this.$router.push('/order')
        }
    }
}
</script>

<style lang="stylus" scoped>
.footer
    position: fixed
    max-width: 640px
    bottom: 3rem
    left :0
    right :0
    width: 100%
    box-sizing: border-box 
    margin :0 auto!important
</style>


